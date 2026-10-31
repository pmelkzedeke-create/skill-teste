# Instalação da skill `short-form-storyteller-3d`

**Status: instalada e estudada.** O ZIP `short-form-storyteller-3d-ready.zip` foi extraído na raiz do repositório;
a skill vive em `short-form-storyteller-3d/` (116 arquivos) e é a fonte de verdade para qualquer pedido de vídeo.

```
short-form-storyteller-3d/
├── SKILL.md                  ← instruções mestras (8 etapas) + frontmatter name/description
├── USAGE.md                  ← como invocar (Codex: $short-form-storyteller-3d; outra IA: mandar o zip + tema)
├── agents/openai.yaml        ← metadados de invocação implícita
├── references/               ← câmera, vídeo, diorama 3D, contrato de dados, pipeline, workflow de imagens
│   └── remotion/             ← APIs do Remotion empacotadas (markup, multimedia, render, studio)
├── templates/prompt_templates.md
├── assets/
│   ├── character-sheet.jpg   ← protagonista padrão (exemplo, não obrigatório)
│   ├── references/           ← 5 imagens low-poly de referência (composição, analogia, rótulo, paleta)
│   └── template/             ← motor Remotion + R3F (é um motor, não a animação pronta)
├── scripts/                  ← voiceover, prepare_vo, music, sfx, loudness, audiocheck, stills, sheet
└── examples/poco-artesiano/  ← projeto completo de referência (poço artesiano)
```

---

## 1. O que a skill manda fazer (resumo operacional)

**Contrato de entrada:** um tema no chat ou um arquivo de briefing. Se a pessoa só der o tema, o padrão é
**produção completa até o MP4** — não parar em roteiro, não parar em prompts, não pedir aprovação.

**Padrões travados:** pt-BR · 45 s (30–60) · 9:16 1080×1920 · 30 fps · H.264/AAC · voz `pt-BR-AntonioNeural`
via `edge-tts` (grátis) · trilha e efeitos procedurais em Python · estética 3D cartoon low-poly facetada ·
personagem = protagonista da folha, reinterpretado low-poly · nunca chamar serviço pago, nunca publicar.

**Fluxo em 8 etapas**

| # | Etapa | Entrega |
|---|---|---|
| 1 | Formato e conceito | 1 dos 10 formatos (5 níveis, e se…, quanto custa, o que acontece se, escolha difícil, ranking 5→1, um dia na vida, mito ou verdade, analogia, problema→solução) + título + 3 ganchos (1 recomendado) |
| 2 | Roteiro | tabela `Bloco \| Fala \| Duração \| O que aparece \| Número/ideia` + texto corrido, contagem de palavras, tempo estimado, fontes |
| 3 | Narração TTS | falas preservadas, números por extenso, emoção `[tenso]` antes de cada fala, `...` e `(PAUSA)` |
| 4 | Bíblia visual | ficha em inglês do protagonista (a base já vem pronta no SKILL.md) + folha de 4 vistas |
| 5 | Cenas e câmera | 1–2 planos por fala, ângulo do catálogo, ação que prova a fala |
| 6 | Produção e render | projeto Remotion/R3F real em `output/<tema>/`, TTS real, stills revisados, MP4 |
| 7 | Som e montagem | tabela `Tempo \| Ação \| Efeito \| Volume` + prompt de música em inglês |
| 8 | Checklist | 11 verificações finais antes de declarar pronto |

**Regras de roteiro que mais pesam:** gancho no primeiro segundo, segunda pessoa, sem "neste vídeo";
frases de 12–15 palavras; cada fala precisa virar imagem legível sem som; um número por frase e sempre
concreto; virada/dilema no terço final; última fala = pergunta específica para comentários; nada de
curtida/compartilhamento; fato exige fonte, hipótese é dita como hipótese.

**Contrato técnico (`references/scene-plan-contract.md`) — o coração do motor**

- `startFrame` global; **tudo dentro da cena é local**; intervalos `[início, fim)`; cenas contíguas somam `DURATION` (o arquivo valida e lança erro).
- Uma fala por cena (`voKey` s1, s2, …), na ordem das cenas.
- Antes do TTS: `PLANNED_SECONDS`. Depois: `SCENE_FRAMES` vem da **duração real** da voz. Escrever sempre com `sc(i).from` / `sc(i).durationInFrames` e `s(seg)` / `W("s3", 9)` (frame local da 10ª palavra) para o plano sobreviver à voz real.
- `objects`: ids estáveis + `visible` + estado inicial/final. Mundo persistente, um único `World.tsx`.
- `animations`: `target` = `"objeto.propriedade"`, trilha contínua entre cenas, `interpolate` (linear/in/out/inOut/soft) ou `spring` (≥30 frames), `unit` = u3d/px/deg/rad/0-1.
- `badges`: negative ✖ / positive ✔ / info / warning (`icon:"?"`), `appearAt` local, `slot` só em tela dividida, `size:"large"` no título final.
- `captions` provisórias → depois palavra a palavra de `vo.json`; `highlights` em MAIÚSCULAS sem pontuação.
- `audioCues`: `status:"planned"` não toca. **Só marcar `ready` depois que o arquivo existir.**
- Câmera: `orbit(alvo, distância, azimute°, elevação°)`, `keys[0]` = pose inicial, última chave = primeira da cena seguinte.

**Matemática de enquadramento (FOV 24°, 1080×1920):** altura visível = `0,425 × distância`;
**px por unidade ≈ 4516 / distância`**; badges em ~260–470 px, legendas em ~1360–1480 px.
Exemplo: diorama de 10×11 unidades inteiro → câmera a ~54–56. Em plano de detalhe, **mire o plano de corte**
(senão o objeto escorrega para a borda vertical).

**Armadilhas já documentadas:** `Config.setChromiumOpenGlRenderer("angle")`; sem `useFrame` (animação só
por frame); `<ThreeCanvas width height>` obrigatórios; pose em `useLayoutEffect`; `shadows="percentage"`
(three ≥0.18 removeu `PCFSoftShadowMap`); `map` colorido escurece o material; efeito que cruza o corte
mora no `World`, não no `Stage`; UTF-8 sem BOM em tudo (acento corrompido já quebrou um TTS); `%` em
`argparse help` vira `%%`; música sempre duckada abaixo da voz; nunca acelerar a locução para caber.

---

## 2. Ambiente deste sandbox — o que dá para fazer aqui

Testado agora:

| Dependência | Status | Observação |
|---|---|---|
| Node 22.22 / npm 10.9 | ✅ | compatível com `engines` do template (`^22.13`) |
| Python 3.11 | ✅ | scripts compilam (`py_compile` OK nos 8) |
| pypi | ✅ | `edge-tts`, `numpy`, `scipy`, `soundfile`, `Pillow` instaláveis |
| npm registry | ✅ | `npm install` do template funciona |
| **ffmpeg / ffprobe** | ❌ no PATH | contornável: `imageio-ffmpeg` (pypi) entrega binário ffmpeg 7.0.2 estático — testado |
| **Chromium para Remotion** | ❌ | não há Chrome no sistema |
| **Download do browser do Remotion** | ❌ | host de download bloqueado → **`npx remotion render` não roda aqui** |
| **`edge-tts` (endpoint Microsoft)** | ❌ | rede bloqueada → TTS da skill não funciona aqui |
| Persistência | ⚠️ | `node_modules/`, `.venv/`, `~/.local` não entram no snapshot → reinstalar por sessão |

### Consequência prática

- Etapas **1–5 completas aqui** (conceito, roteiro, TTS-texto, bíblia visual, storyboard, dados do `scenes.ts`).
- Etapa **3 com substituto**: a voz sai pelo gerador de fala da Arena (`generate_speech`, pt-BR, qualidade
  superior ao edge-tts) — as falas continuam idênticas ao roteiro; só muda o provedor. Depois converto
  para `public/audio/vo/sX.wav` + `vo.json` com tempos por palavra.
- Etapa **6 (Remotion)**: o código pode ser escrito e revisado, mas **o render não acontece neste sandbox**.
  Três caminhos, a escolher:
  1. **Entregar o projeto pronto** para você rodar `npm run render` numa máquina com Node/ffmpeg (GPU ajuda).
  2. **Render alternativo local**: motor próprio em Python (numpy/Pillow, geometria low-poly facetada +
     câmera orbital) → frames → ffmpeg → MP4 1080×1920 real, entregue aqui mesmo. Mesma linguagem visual e
     mesmo roteiro; não é o mesmo código do template Remotion.
  3. **Só planejamento** (roteiro + storyboard + prompts), sem vídeo.

---

## 3. Instalar numa máquina que renderiza

```bash
# projeto a partir do motor incluído
cp -r short-form-storyteller-3d/assets/template output/<tema-slug>
cd output/<tema-slug>
npm install

python3 -m venv .venv && . .venv/bin/activate
pip install -r ../../scripts/requirements.txt      # edge-tts numpy scipy soundfile Pillow
sudo apt install ffmpeg                            # ffmpeg + ffprobe no PATH

python scripts/voiceover.py --lines scripts/narration.json --provider edge --voice pt-BR-AntonioNeural
python scripts/prepare_vo.py                      # → public/audio/vo/sX.wav + src/data/vo.json
python scripts/sfx.py && python scripts/music.py
npm run typecheck
node scripts/stills.mjs 0 60 123 200 && python scripts/sheet.py out/sheet.png
npm run render                                    # ProblemResolveVideo → out/video.mp4
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,nb_frames \
  -show_entries format=duration out/video.mp4
python scripts/audiocheck.py out/video.mp4 && python scripts/loudnorm.py out/video.mp4 out/final.mp4
```

Entregáveis obrigatórios junto do projeto: `roteiro.md`, `scene-plan.ts`, `production-status.md`.

---

## 4. Como me pedir

Basta o tema:

> Faça um vídeo sobre: **por que o céu fica vermelho no pôr do sol**

Variações aceitas: duração (30–60 s), formato específico, só roteiro, só narração, só storyboard,
outro personagem, outra voz, outro idioma.
