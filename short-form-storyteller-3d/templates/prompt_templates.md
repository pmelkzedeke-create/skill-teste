# Modelos de prompts

Use os moldes como estrutura, preenchendo todos os campos para cada cena. Prompts de geração em inglês. Anexe a folha do personagem quando a ferramenta aceitar referência. Adicione legendas, números e rótulos na edição, não dentro da imagem.

## Imagem de referência do personagem

Gere antes das cenas. Consulte `../references/image_reference_workflow.md` para o prompt completo da folha de modelo de quatro vistas. A ficha do personagem é escolhida para cada história; o estilo 3D permanece o mesmo.

## Prompt de imagem / keyframe

```text
Educational low-poly 3D cartoon render, vertical 9:16, [FULL CHARACTER BIBLE FOR EACH VISIBLE CHARACTER], [ONE CLEAR STORY ACTION frozen at its most readable moment], [large focal object], [minimal geometric setting with vivid contrasting solid colors; for outdoor scenes use pink-purple gradient sky, large faceted clouds, green geometric hills/trees, and red/orange structures only when they suit the scene], [camera angle and framing from camera_angles.md], wide-angle perspective only if useful, visibly faceted geometry, clean surfaces without photorealistic textures, blocky toon shading, clear soft lighting, high contrast, clean composition, no text, no subtitles, no watermark.
```

## Prompt de vídeo

```text
Animate the provided scene reference as one continuous 4–6 second shot. [ONE CLEAR ACTION WITH A VISIBLE START, CHANGE, AND END]. Preserve the exact character identity, face, body proportions, outfit, colors, accessories, props, and environment from the reference image. [ONE SLOW CAMERA MOVE: push-in / tilt down / small orbit], ease-in and ease-out, stable framing, vertical 9:16, educational low-poly 3D cartoon, visible geometric facets, vivid clean colors, blocky toon shading, clear lighting. No cuts, no camera shake, no morphing, no extra people or limbs, no object intersection, no flickering background, no text, no subtitles, no watermark.
```

## Prompt de música

```text
Instrumental [MOOD/GENRE] underscore for a [DURATION] vertical short video, supports a clear narration, restrained under the voice, builds gradually toward [TURNING POINT], brief low-impact accent and near-silence after the main reveal, clean ending, no vocals, no sound effects.
```

## Prompt de efeito sonoro

```text
Create one concise [SOUND TYPE] for [VISIBLE ACTION], timed to the exact moment [ACTION CUE], stylized and clean, [INTENSITY], no voice, no music, [DURATION].
```

O prompt deve ser específico à ação. Não devolva moldes com campos em aberto como se fossem prompts finalizados.

