# Padrão para geração de vídeo

Use este contrato para todos os clipes do projeto. O vídeo é dividido em clipes curtos por cena e montado depois com a narração; não peça ao modelo que invente cortes de toda a história.

## Especificação padrão

- Formato: vertical 9:16, destinado a 1080×1920.
- Duração por geração: 4–6 segundos, ou o limite real do gerador. Um clipe mostra uma ação principal.
- Estética: 3D cartoon educativo low-poly, facetas geométricas visíveis, sem textura fotográfica, cores vivas, sombreamento toon em blocos, formas simples e luz clara. O personagem pode mudar; esse estilo permanece fixo.
- Movimento: lento, suave, com ease-in/ease-out. Push-in, tilt down ou orbit lento; no máximo 15–30° de órbita.
- Continuidade: anexar o keyframe e a folha do personagem quando possível. Conservar exatamente identidade, roupa, proporções, acessórios, cenário e paleta.
- Ação: começo, mudança e término claros. Incluir um sinal visual antes do evento principal quando a história permitir.
- Em explicações técnicas, revele a informação em ordem: contexto geral, corte/camada que mostra o interior e close de uma peça ou processo. Use setas, X, rótulos e destaques como elementos de edição planejados, não como texto gerado dentro do vídeo.
- Sem áudio gerado, fala, texto ou legendas, a menos que o utilizador peça explicitamente. A voz e os efeitos serão montados depois.
- Evitar: morphing, membros extras, roupa que muda, objetos que atravessam pessoas, personagens adicionais, tremores, movimento rápido, piscadas de cenário/piso, cortes internos, zoom abrupto, deformações e elementos importantes fora do quadro.

## Prompt de vídeo (inglês)

Adapte este padrão para cada cena. Descreva apenas um movimento de câmera e uma ação principal.

```text
Animate the provided scene reference as one continuous 4–6 second shot. [ONE CLEAR ACTION WITH A VISIBLE START, CHANGE, AND END]. Preserve the exact character identity, face, body proportions, outfit, colors, accessories, props, and environment from the reference image. [ONE SLOW CAMERA MOVE: push-in / tilt down / small orbit], ease-in and ease-out, stable framing, vertical 9:16, educational low-poly 3D cartoon, visible geometric facets, vivid clean colors, blocky toon shading, clear lighting. No cuts, no camera shake, no morphing, no extra people or limbs, no object intersection, no flickering background, no text, no subtitles, no watermark.
```

## Continuidade entre clipes

- Produza primeiro keyframe aprovado; use-o como início ou referência para o clipe.
- Repita a ficha visual invariável em cada prompt ou anexe a folha de modelo. Não confie apenas em “same character”.
- Não mude o eixo nem a posição de objetos entre planos de continuidade, salvo se a montagem mostrar a mudança.
- Se cada cena tiver fundo de outra cor, trate como cenários diferentes e mantenha luz/material consistentes.
- Para ação sequencial, a última pose de um clipe deve ser compatível com a primeira pose do próximo. Descreva estado inicial e final.
- Se o modelo falhar em movimento complexo, simplifique para um gesto único com o objeto visível.

## Duração e edição

O clipe de vídeo gerado é matéria-prima. Ajuste sua duração na edição para sincronizar com fala e ritmo. Use cortes secos apenas entre ações legíveis; não peça transições agressivas. Alinhe efeitos ao instante da ação, não apenas à palavra. Adicione legendas e números na edição, não na geração.

