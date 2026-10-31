# Referências de imagem a gerar

Este documento define as imagens auxiliares que devem ser preparadas antes dos quadros de cena. Elas fixam o desenho e o estilo; não substituem os prompts de cada plano.

## Referências visuais fornecidas

Use os exemplos visuais já incluídos na pasta `assets/references/` como guia de produção:

- `camera-composition-gallery.png`: abertura, close no gesto, sinal antes da ação, ponto de vista, comparação limpa e prova visual junto ao objeto.
- `rocket-thrust-label.png`: objeto central grande e rótulo curto do princípio acima da legenda.
- `chocolate-dog-analogy.png`: analogia cotidiana com personagem e objeto no mesmo plano.
- `balloon-action-analogy.png`: causa e efeito claros, ação dentro do quadro e rótulo de princípio.
- `lowpoly-rocket-launch.png`: paleta externa low-poly, formas facetadas, cenário geométrico e escala do objeto.

Essas imagens são referências de composição e acabamento; a imagem do protagonista da skill continua sendo a base da identidade do personagem.

## 1. Folha de modelo do personagem

Gere uma folha para cada protagonista e para cada personagem recorrente que precise manter continuidade. Para o protagonista padrão, redesenhe o personagem da folha `assets/character-sheet.jpg` na linguagem low-poly dos Reels, mantendo seus traços reconhecíveis: cabeça pêssego redonda, olhos azuis, cabelo preto espetado, roupa azul com detalhe verde e branco, braços pretos finos e calça/tênis escuros e azuis. Se o utilizador escolher outra personagem, adapte-a ao mesmo estilo visual.

**Composição da folha:** uma única imagem limpa, fundo neutro sólido, corpo inteiro, personagem centralizado e com espaço entre as vistas. Mostrar frente, três quartos, perfil e costas. Mesma altura, escala, pose neutra, roupa, cores, cabelo, acessórios e iluminação em todas as vistas. Evite perspectiva dramática, objetos, cenário, texto ou poses que escondam a silhueta. A imagem serve como referência de identidade, não como keyframe do vídeo.

**Prompt-base (inglês):**

```text
Create a clean low-poly 3D cartoon character model sheet, vertical or landscape canvas with four equally sized full-body views in one row: front view, three-quarter view, side profile, and back view. [FULL CHARACTER BIBLE]. For the skill's default hero, preserve the recognizable peach round head, large blue eyes, spiky black hair, blue-and-green shirt with white trim, thin black arms, dark pants, and blue-and-white sneakers. Keep the exact same proportions, face, silhouette, outfit, colors, materials, and accessories in all four views. Neutral relaxed standing pose, arms slightly separated from the body, feet visible, orthographic studio camera, plain neutral solid background, soft even lighting, clearly visible low-poly facets, simple geometric forms, clean flat-color surfaces, consistent toon shading. No props, no environment, no labels, no text, no watermark.
```

Se o gerador não conseguir compor quatro vistas confiáveis numa imagem, crie quatro imagens separadas com a mesma ficha e depois monte-as numa folha. Não deixe o gerador inventar mudanças entre as vistas. Se o utilizador já forneceu uma imagem oficial, use-a como base em vez de redesenhar.

## 2. Folha de estilo e materiais (opcional)

Crie uma imagem de referência separada para estilo quando houver vários cenários ou ferramentas que variem o visual: amostras de formas low-poly facetadas, paleta viva, blocos de cel-shading, luz e formas geométricas do ambiente. Não inclua novos personagens nem texto. Use os Reels enviados pelo utilizador como referência visual direta e prioritária, reproduzindo a linguagem low-poly, o tratamento das cores, a iluminação, a composição, os enquadramentos e o acabamento. Aplique essa identidade visual ao protagonista reconhecível da skill, sem usar logotipos ou elementos de marca do criador.

**Prompt-base da folha de estilo (inglês):**

```text
Create a visual style reference board for an educational vertical 3D cartoon series. Show geometric low-poly environments and props, visibly faceted models, saturated clean colors, blocky toon shading, pink or purple gradient skies, large faceted clouds, simple green hills, geometric trees, red/orange structures, clear soft lighting, simple readable shapes, and one example technical cutaway with layered cross-section. Include one blank rounded white label pill with a small colored dot and one sample lower caption area, both empty with no letters. Keep the same stylized low-poly rendering throughout. No main character, no readable text, no logos, no watermark.
```

## 3. Referências de enquadramento (opcionais)

Gere um pequeno storyboard sem texto para demonstrar ângulos difíceis ou uma ação importante. Pode incluir abertura, close no gesto, prova/medição, virada e dilema. Use miniaturas independentes; não use uma montagem como imagem de referência para gerar cada cena se isso misturar ações.

## 4. Imagem de referência por cena

Para cada plano final, produza um keyframe estático próprio antes do vídeo:

- Um único instante legível que corresponda à fala.
- Protagonista com a folha de modelo anexada como referência.
- Cenário e paleta da folha de estilo, se existir.
- Ação, objeto e enquadramento iguais aos planejados no storyboard.
- Sem letras, legendas, números falsos ou marca d’água gerados dentro da imagem. Adicione texto na edição.
- Use os elementos de HUD das referências como guia de edição: cápsula branca curta com ponto colorido para o princípio; legenda grande branca, palavra corrente amarela, contorno escuro no terço inferior. A folha de estilo pode mostrar apenas moldes vazios desses elementos.
- Não reutilize o mesmo quadro para ações ou momentos diferentes.

Aplique 9:16 e mantenha o foco principal grande. O objeto/gesto em primeiro plano pode ocupar cerca de 40–60% da área útil quando isso ajudar a leitura.

## 5. Regras de continuidade

- Reutilize a folha de modelo em todos os prompts que mostram o personagem.
- Reforce invariantes no texto: roupa, cores, formato do rosto, proporções, acessórios e material.
- Para uma mudança intencional (ex.: roupa rasgada), declare quando acontece e mantenha o estado posterior nas cenas seguintes.
- Se personagem e folha entrarem em conflito, a folha aprovada prevalece; peça nova aprovação apenas se a contradição inviabilizar a cena.
- A folha existente em `assets/character-sheet.jpg` é uma referência de exemplo. Ela nunca obriga um projeto a usar aquele personagem.

