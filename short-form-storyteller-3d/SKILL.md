---
name: short-form-storyteller-3d
description: Transforma um tema ou briefing em roteiro, animação 3D low-poly, narração, som e MP4 vertical renderizado com Remotion. Use quando pedirem um Reel, TikTok ou Short completo; por padrão, basta fornecer o tema.
---

# Short-Form Storyteller 3D

Transforme um tema ou arquivo em um vídeo educativo vertical 3D low-poly finalizado: roteiro, cena procedural em Remotion/React Three Fiber, narração sincronizada, legendas, trilha, efeitos, revisão e MP4. **Quando a pessoa fornecer somente um tema, faça o fluxo completo por padrão e entregue o arquivo renderizado; não pare em roteiro ou prompts.**

A promessa é **potencial de retenção**, não viralização garantida. Otimize gancho, clareza, progressão, novidade visual e conversa nos comentários.

## Materiais de referência da skill

Leia os documentos relevantes antes de criar o plano visual:

- `references/image_reference_workflow.md`: imagens de referência a gerar e uso da folha de personagem.
- `references/camera_angles.md`: catálogo de enquadramentos e ângulos com usos.
- `references/video_standard.md`: padrão de movimento, continuidade e prompt de vídeo.
- `templates/prompt_templates.md`: moldes de prompts de imagem, vídeo e som.
- `examples/workflow_guide.md`: sequência de produção.
- `assets/character-sheet.jpg`: exemplo de folha de um personagem possível, não uma identidade obrigatória.
- `assets/references/`: novas imagens de referência para composição, estilo low-poly, analogias e rótulos explicativos.
- Motor Remotion em `assets/template/` e scripts de voz, música, efeitos e revisão em `scripts/`: use-os para construir e renderizar o vídeo. Consulte `references/scene-plan-contract.md`, `references/pipeline-fase2.md` e `references/diorama-3d.md` durante a implementação; confira `references/remotion/` para as APIs incluídas no pacote.
- `examples/poco-artesiano/`: projeto completo de exemplo para aprender a integrar código, narração, timing, música e composição. É referência, não modelo obrigatório de conteúdo.

## Entrada e modos de trabalho

Aceite um tema escrito no chat ou um único arquivo de briefing/pesquisa. Extraia tema, público, tom, fatos e restrições. **O padrão é produção automática completa:** escolha o formato, escreva o roteiro, construa a animação, gere voz/som e renderize. Não pare para pedir aprovação do roteiro quando o pedido for apenas um tema. Use modo etapa-aprovação somente se a pessoa pedir explicitamente revisão antes de renderizar. Se pedir apenas roteiro ou prompts, respeite esse escopo. Não faça perguntas de preferência quando os padrões forem suficientes.

Use opções gratuitas incluídas/locais por padrão. Não chame serviços pagos, use chaves secretas ou publique o vídeo sem autorização específica. Se faltarem dependências e for necessário instalar ferramentas externas, peça a autorização necessária naquele momento e depois continue do ponto salvo; não substitua silenciosamente o MP4 por um pacote de prompts.

Se o utilizador pedir uma etapa específica, faça só essa etapa. Não peça que cole novamente conteúdo já fornecido.

### Padrões

- Idioma: português do Brasil. Prompts técnicos para imagem/vídeo/música: inglês; textos renderizados no vídeo em português.
- Duração padrão: 45 segundos, ajustável entre 30–60 conforme a ideia. Escreva locução perto de 145–165 palavras por minuto e reserve respiro para ações e viradas; respeite outra duração se o utilizador pedir.
- Público: geral interessado no tema.
- Vídeo vertical 9:16, 1080×1920.
- Estética fixa: siga de perto as novas referências visuais: animação educativa 3D cartoon low-poly, facetas geométricas visíveis, formas simples, cores saturadas, iluminação colorida, nuvens geométricas grandes, paisagens/cenários low-poly e sombreamento toon em blocos. O personagem pode mudar, mas o tratamento visual, a composição vertical e a apresentação gráfica permanecem consistentes.
- Personagem: por padrão, use o protagonista da folha `assets/character-sheet.jpg`, refeito no estilo low-poly da referência: cabeça grande e redonda em tom pêssego, olhos grandes azuis, cabelo preto espetado com franja, sem nariz ou boca visíveis, pescoço e braços pretos finos, roupa azul com faixa/camiseta verde e detalhes brancos, calça cinza-escura e tênis azul e branco. Se o utilizador pedir outra personagem, adapte-a à mesma estética e preserve, quando fizer sentido, a silhueta, as cores ou outros traços que mantenham parentesco visual com o protagonista-base.
- Estrutura narrativa: gancho imediato, escalada, virada/dilema no terço final e pergunta final específica.

## Etapa 1 — Escolher formato e conceito

Escolha o formato mais apropriado sem perguntar por padrão. Informe título de trabalho, formato e três opções de gancho, marcando a recomendada.

| Formato | Estrutura |
|---|---|
| Os 5 níveis | Cada nível traz ganho e custo; o último cobra caro. Fecha com dilema. |
| E se… (hipótese/superpoder) | Três ou quatro situações progressivamente mais fortes; termina no limite ou paradoxo. |
| Quanto custa / quanto rende | Traduz valor grande em comparações cotidianas e visuais; fecha com consequência. |
| O que acontece se… | Linha do tempo com uma mudança visual em cada etapa. |
| Escolha difícil | Duas opções e consequências; deixa a decisão ao público. |
| Ranking do 5 ao 1 | Escala do menos ao mais extremo; o primeiro lugar surpreende. |
| Um dia na vida de… | Momentos do dia com um detalhe revelador em cada. |
| Mito ou verdade | Três crenças com evidência visual; a última pode surpreender. |
| Como/por que funciona por analogia | Três a cinco passos; primeiro a analogia visual familiar, depois o nome do princípio. Causa e efeito no mesmo quadro. |
| Problema → solução (explicador) | Mostre tentativa, obstáculo visível, consequência e solução. Cada solução modifica o mesmo sistema; termine revelando-o completo em funcionamento. |

Títulos e ganchos criam curiosidade sem enganar. Comece na situação, de preferência em segunda pessoa; sem saudação, vinheta, apresentação ou “neste vídeo”.

## Etapa 2 — Roteiro

- Use frases naturais, simples e curtas (idealmente até 12–15 palavras).
- Cada fala precisa virar uma imagem entendida em um segundo sem áudio. Se não for possível desenhá-la, reescreva ou corte.
- Construa progressão: cada bloco aumenta a curiosidade, risco, escala ou consequência. Use transições curtas.
- Em explicadores, faça o público perceber a necessidade antes de apresentar o nome técnico: tentativa → obstáculo visível → consequência → solução → princípio. Demonstre a solução; evite uma lista de definições.
- Quando o tema comportar, use de quatro a sete ciclos problema-solução sem inventar obstáculos só para alongar. Mantenha um cenário principal/diorama e a continuidade do mesmo sistema: peças instaladas permanecem visíveis, estado do mecanismo evolui entre cenas.
- Mude a informação visual a cada 3–8 segundos sem exigir corte a cada fala. Corte transversal, transparência, vista explodida e tela dividida são ferramentas para revelar o mecanismo, escolhidas conforme o assunto.
- Reserve a virada/dilema para o terço final. A última fala é uma pergunta direta e instigante para comentários, sem pedido genérico de curtida/compartilhamento.
- No máximo um número relevante por frase. Transforme números abstratos em comparações concretas e fáceis de visualizar.
- Evite explicações redundantes, frases de efeito vazias e conclusão óbvia.
- Fatos reais exigem fonte confiável. Não invente dados, causalidade ou precisão. Separe claramente fato, interpretação e hipótese. Para fatos atuais ou especializados, pesquise e cite fontes quando houver ferramenta disponível; sem verificação, informe a limitação ou enquadre como hipótese.
- Em explicações de mecanismos, escolha uma configuração concreta e coerente. Diferencie o que é universal do que depende de material, ambiente, tecnologia ou regra local; não misture variantes incompatíveis. Priorize fontes primárias para detalhes técnicos e de segurança.
- Use personagem fictício. Não acuse pessoas reais, não inclua violência explícita ou instruções perigosas.
- Releia como alguém sem contexto e remova qualquer trecho confuso.

Entregue três ganchos e uma tabela:

| Bloco | Fala | Duração (s) | O que aparece na tela | Número/ideia em destaque |
|---|---|---:|---|---|

Depois inclua texto corrido pronto para narrar, contagem de palavras, tempo estimado e fontes.

## Etapa 3 — Narração TTS

Na produção automática, gere o TTS depois de fechar o roteiro e preserve exatamente as falas. Só aguarde aprovação quando a pessoa pedir explicitamente o modo guiado.

- Escreva números e unidades por extenso.
- Antes de cada fala, coloque uma emoção entre colchetes: `[intenso]`, `[surpreso]`, `[tenso]`, `[suave]`, `[curioso]`, `[conspiratório]`, `[dramático]`.
- Use reticências para pausas curtas e `(PAUSA)` para meio segundo a um segundo de silêncio no momento mais impressionante.
- Não acrescente nem reescreva conteúdo narrativo.
- Sugira voz natural, clara e levemente acelerada; gênero, timbre e sotaque seguem o briefing ou ficam como opção ajustável.
- Quando o pedido for só narração, devolva apenas o texto de TTS, sem comentários.

## Etapa 4 — Bíblia visual do personagem e estilo

Antes das cenas, fixe uma **bíblia visual** em inglês para o protagonista e cada personagem recorrente. Especifique silhueta, proporções, rosto, cabelo/partes distintivas, materiais, paleta, roupa/acessórios e escala. O protagonista-base deve continuar reconhecível em relação à folha da skill, mas renderizado com a geometria facetada, proporções e materiais low-poly das referências de Reel. Se o utilizador mudar o personagem, mantenha a linguagem visual dos Reels e preserve alguns traços que o conectem ao protagonista-base, a menos que o pedido exija outra identidade.

**Bíblia-base do protagonista (inglês):**

```text
A stylized low-poly 3D cartoon version of the skill's original hero: a large smooth-rounded peach-toned head with no visible nose or mouth, oversized expressive white eyes with bright blue irises and small black pupils, messy spiky black hair with a swooping fringe, a thin black neck, very thin black cylindrical arms, wearing a vivid blue short-sleeved outer shirt over a bright green center shirt, white trim on sleeves and hem, straight dark-gray pants, blue-and-white sneakers with white laces. Preserve this recognizable silhouette and color blocking while rendering the head, hair, clothes, and body as clean faceted low-poly geometry with vivid flat colors and blocky toon shading. No photorealistic textures.
```

A identidade estética que não muda entre projetos:

- 3D cartoon educativo em low-poly, formas geométricas com facetas visíveis e proporções caricatas legíveis.
- Materiais limpos sem textura fotográfica; sombreamento toon/cel-shading em blocos. Não force contorno de tinta se a referência não tiver.
- Cores vivas, luz uniforme com acentos cinematográficos, contraste alto e cenários geométricos simples.
- Proporção vertical 9:16; objeto ou gesto da história grande e fácil de entender.
- Secundários devem contrastar com o protagonista em silhueta e cor. Criança, se houver, menor e visualmente distinguível. Sombra/entidade pode ser silhueta escura simplificada.
- Não mude roupa, rosto, proporção, material ou paleta do protagonista entre cenas, salvo se a história mostrar explicitamente a mudança.

Use `references/image_reference_workflow.md` para decidir quais referências visuais criar. Se a ferramenta aceitar referência de imagem, gere primeiro uma folha do protagonista-base reinterpretada em low-poly, com vistas ortográficas, e reutilize-a em cada cena. Use os Reels enviados pelo utilizador como referência direta e prioritária para low-poly facetado, proporções cartoon, paleta, iluminação, ritmo de enquadramento, demonstração educativa e legendas. Preserve a identidade reconhecível do protagonista desta skill e não reproduza logotipos ou elementos de marca dos Reels.

## Etapa 5 — Cenas, câmera e prompts

Decomponha cada fala em 1–2 planos focados; use mais apenas quando uma ação pedir. Cada plano mostra uma ideia e prova visualmente a fala. Mantenha a ação dentro do quadro. Siga o catálogo em `references/camera_angles.md`; cada fala deve usar o ângulo que melhor explica sua ação, com variação entre cenas.

Entregue:

| Cena | Fala sincronizada | Duração | Ângulo/enquadramento e movimento | Ação | Texto na tela |
|---|---|---:|---|---|---|

No modo de vídeo final, transforme cada plano em componentes/props e animações reais no projeto Remotion/R3F, com a bíblia do personagem, composição, cenário, luz e continuidade. Gere prompts de imagem/vídeo apenas se forem úteis como apoio ou se o utilizador pedir um pacote de prompts; nunca os entregue como substituto do render. Siga `references/video_standard.md` e `templates/prompt_templates.md` para manter a direção visual.

### Etapa 6 — Produzir, renderizar e revisar o MP4 (padrão)

O resultado final padrão é um MP4 real, não apenas prompts. Use o motor incluído em `assets/template/` com os scripts de `scripts/`. Consulte `references/pipeline-fase2.md` para comandos, `references/scene-plan-contract.md` para dados e `references/diorama-3d.md` para técnicas 3D. O template é um motor, não a animação pronta: substitua o bloco/esfera de exemplo em `src/components/World.tsx` pelo mundo e personagem do tema e crie os módulos 3D de cada cena.

- Crie uma pasta nova `output/<tema-slug>/` sem sobrescrever vídeos anteriores. Copie o template e os scripts para essa pasta. Use o `package.json` incluído e instale dependências só se ausentes; se a instalação exigir acesso externo ou aprovação, solicite-a e retome depois.
- O `pipeline-fase2.md` veio de um fluxo antigo que pausa para aprovação; nesta skill, o pedido de tema autoriza o render local completo. Respeite um pedido explícito de aprovação prévia, e mantenha a restrição de não usar serviços pagos nem publicar.
- Construa a cena em React Three Fiber com geometria procedural low-poly: protagonista da skill reconhecível, props do tema, cenário/diorama persistente, corte transversal ou analogia quando útil. Não use o exemplo do poço como conteúdo do novo vídeo.
- Preencha todas as cenas no contrato de `src/data/scenes.ts`. Atualize `src/utils/timing.ts` com uma fala por cena, duração planejada e duração total. Crie `scripts/narration.json` a partir do texto final.
- Gere voz com o provedor gratuito `edge-tts` por padrão (pt-BR-AntonioNeural ou voz pt-BR equivalente disponível), usando `scripts/voiceover.py --provider edge`; depois rode `scripts/prepare_vo.py` para obter durações e tempos por palavra. Não use ElevenLabs nem outro TTS pago sem autorização explícita.
- Depois do TTS real, confira que a soma de falas, pausas e respiros cabe na duração. Se não couber, edite o roteiro e refaça a fala; não acelere excessivamente. Use esses tempos para recalcular frames e sincronizar legendas, badges, ações e efeitos.
- Adapte `scripts/music.py` ao tema, duração e viradas do roteiro; não execute o arranjo fixo do poço sem alterar duração e marcadores. Gere trilha/efeitos procedurais com `music.py` e `sfx.py`, e ligue-os no projeto. Voz sempre clara acima da música.
- Execute a partir da pasta do projeto: `npm install`; gere voz com `python scripts/voiceover.py --lines scripts/narration.json --provider edge --voice pt-BR-AntonioNeural`; depois `python scripts/prepare_vo.py`, `python scripts/sfx.py` e `python scripts/music.py`. Atualize no código os cues para os arquivos efetivamente gerados.
- Rode `npm run typecheck`, gere e inspecione stills/folha de contato; renderize com `npm run render` (composition `ProblemResolveVideo`). Se o ambiente não tiver Node, FFmpeg, Python/dependências, Chromium/ANGLE ou acesso ao TTS gratuito, explique o requisito concreto e solicite apenas a autorização necessária, sem chamar serviços pagos por conta própria.

- Planeje cenas em segundos e depois em frames inteiros; padrão 1080×1920, 30 fps. Use intervalos `[início, fim)` contíguos, começando em zero, sem lacunas ou sobreposição; a soma precisa bater com a duração total.
- Planeje a voz primeiro. Após gerar o TTS real, use as durações/alinhamento das falas para recalcular cortes e sincronizar palavras, legendas, badges, ações e efeitos. Não acelere demais a locução para obedecer a um timing estimado.
- Mantenha IDs estáveis para objetos recorrentes. Registre estado inicial/final e animações por alvo, valores, unidade e janela temporal. Em Remotion, toda animação deve ser determinística a partir do frame atual; evite timers de parede, estado incremental e aleatoriedade não semeada.
- Prefira um mundo/diorama persistente quando a explicação construir um sistema ao longo do tempo. Use cutaway, vistas explodidas, fluxo e partículas só para mostrar estrutura ou causa e efeito, nunca como decoração. Consulte `references/diorama-3d.md` para as técnicas correspondentes.
- Renderize o MP4 completo com Remotion a 1080×1920, 30 fps e H.264/AAC. O pedido de tema autoriza a geração local completa; não publique nem envie o vídeo.
- Confira o código (`npm run lint` ou `npx tsc --noEmit`), gere stills de início/ação/fim por cena com `scripts/stills.mjs`, monte uma folha de contato com `scripts/sheet.py` e inspecione as imagens. Corrija composição, personagem, texto, cortes, objetos atravessados e continuidade antes do render final.
- Após render, use `ffprobe` para confirmar resolução, fps, frames, duração e áudio; rode `scripts/audiocheck.py` e `scripts/loudnorm.py` conforme necessário. Se o MP4 não existir ou falhar a verificação essencial, não declare conclusão: registre o erro e continue corrigindo.
- Salve `roteiro.md`, `scene-plan.ts` e `production-status.md` junto do projeto. Entregue o caminho de `output/<tema-slug>/out/video.mp4` e a pasta-fonte.

Texto na tela:

- O gerador de imagem deve produzir a arte sem texto incorporado. Adicione texto na edição para evitar letras corrompidas.
- Use somente o número relevante, grande e perto do objeto que mede.
- Legenda falada grande, em negrito, sem serifa, branca com contorno escuro, centralizada no terço inferior. Anime palavra a palavra ou em grupos de até três; realce a palavra corrente em amarelo quando fizer sentido. Não cubra rosto ou ação.
- No formato explicativo, use uma pílula branca arredondada acima da legenda, com um ponto colorido e rótulo de 2–4 palavras em maiúsculas. Um rótulo de princípio por vez; posicione-o no alto sem esconder a ação.
- Pode usar símbolos simples de edição (seta, X, círculo, linha de força) para tornar causa e efeito visíveis. Mantenha-os limpos, poucos e sincronizados com a fala/ação.

## Etapa 7 — Som e montagem

- Voz sempre clara e acima da música.
- Música deve apoiar o tom, ficar abaixo da voz e subir apenas em pausas/viradas.
- Crie um efeito para cada ação visível, sincronizado ao movimento, sem repetição desnecessária.
- No momento mais impressionante, pode usar impacto grave seguido por meio segundo de quase-silêncio.
- Entregue tabela `Tempo | Ação na tela | Efeito sonoro | Volume (baixo/médio/alto)` e prompt de música em inglês com duração total.
- Ordem sugerida: montar imagens/clipes, sincronizar narração, adicionar legendas, colocar efeitos e mixar música abaixo da voz.

## Etapa 8 — Checklist

Antes de encerrar, confira:

- O gancho aparece imediatamente e a ideia se entende sem som?
- Cada frase tem uma imagem clara? A escalada e virada funcionam?
- Personagem e estilo ficam consistentes entre todas as cenas?
- Números/fatos estão corretos e fontes foram indicadas?
- Números e legendas estão legíveis sem cobrir rostos?
- Ação cabe no quadro; nada atravessa personagens; sem morphing ou tremor?
- Fundos e chão ficam estáveis, sem piscar?
- Música está abaixo da voz e efeitos sincronizados às ações?
- A pergunta final estimula uma resposta real?
- Se houve render, os frames são contíguos e a duração/fps conferem? As legendas foram alinhadas ao áudio real e o MP4 foi inspecionado?

Não prometa viralização. Se um gerador, arquivo de referência ou ferramenta não estiver disponível, declare apenas o que falta para produzir aquele elemento.

