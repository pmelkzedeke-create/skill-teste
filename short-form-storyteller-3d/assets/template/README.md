# Template — motor do vídeo problema → solução

Copie esta pasta para uma nova pasta de projeto, copie `scripts/` da raiz da skill para o projeto e rode
`npm install`. O `package.json`, `tsconfig.json` e `remotion.config.ts` estão incluídos. O projeto abre
com duas cenas demonstrativas de 10 s; substitua `src/components/World.tsx`, `src/data/scenes.ts`,
`src/utils/timing.ts` e `src/scenes/ExampleScenes.tsx` pelo vídeo do tema antes de renderizar.

| Arquivo | Papel | O que editar |
| --- | --- | --- |
| `src/utils/timing.ts` | Cortes das cenas: planejados antes do TTS, derivados da voz depois | `SECONDS`, `VO_KEYS`, `PLANNED_SECONDS`, `GAPS` |
| `src/data/scenes.ts` | Contrato `VideoConfig`/`ScenePlan` + cenas + `track()` + checagem de integridade | As cenas (vem do `scene-plan.ts` aprovado) |
| `src/data/vo.json` | Falas medidas (gerado por `scripts/prepare_vo.py`) | Não edite à mão |
| `src/theme.ts` | Paleta, materiais, luz, câmera, áreas seguras, cores de palavras-chave | Paleta do tema, `KEYWORD_COLOR` |
| `src/components/World.tsx` | Cenário persistente (exemplo: bloco + objeto) | Substituir pelo sistema do tema |
| `src/scenes/*.tsx` | Extras por cena: `Stage` (3D) e `Overlay` (2D) | Um módulo por cena; registre em `MainSequence.tsx` |
| `src/components/CameraController.tsx` | Câmera por chaves orbitais + `projectPoint` + `usePose` | Normalmente nada |
| `src/components/TechnicalBadge.tsx` | Badges ✔/✖/i/? com spring e empilhamento | Normalmente nada |
| `src/components/AnimatedCaptions.tsx` | Legendas palavra a palavra (ou provisórias) | Normalmente nada |
| `src/components/WorldLabel.tsx` | Rótulo 2D ancorado em ponto 3D | — |
| `src/components/Arrow3D.tsx`, `Lighting.tsx`, `Background.tsx` | Seta 3D, luz central, fundo por altura da câmera | — |
| `src/audio/Soundtrack.tsx` | Narração/efeitos "ready" + trilha com ducking | `HAS_MUSIC` após gerar a trilha |
| `src/Root.tsx` | Registro da composição | `id`; duração/fps vêm de `src/utils/timing.ts` |
