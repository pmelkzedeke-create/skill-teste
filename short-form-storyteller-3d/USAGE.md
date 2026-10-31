# Usar a skill

## No Codex

Instale a pasta `short-form-storyteller-3d` em `$CODEX_HOME/skills/` (ou `~/.codex/skills/`) e reinicie/atualize a lista de skills. Depois envie somente:

```text
$short-form-storyteller-3d Faça um vídeo sobre: [TEMA]
```

A skill escolhe o recorte, cria roteiro e animação 3D, gera narração/sons, renderiza e entrega o MP4 junto do projeto-fonte.

## Em outra IA

Envie o ZIP completo e peça: “Leia a skill incluída e gere/renderize um vídeo sobre: [TEMA]”. A IA precisa conseguir ler os arquivos, criar e executar código, usar Node/npm, Python e FFmpeg, e renderizar Remotion/Three.js. Um chat sem execução de código pode planejar o vídeo, mas não produzir o MP4 final.

## Padrões da skill

Português do Brasil, 45 segundos, vertical 9:16 (1080×1920), 30 fps, personagem padrão da folha incluída em estilo educativo 3D low-poly, narração pt-BR e trilha/efeitos procedurais gratuitos. O vídeo e o projeto ficam em `output/<tema>/`. A skill não publica o vídeo e não usa serviços pagos sem autorização.

Se houver fatos técnicos, científicos ou atuais, a skill verifica fontes confiáveis antes de roteirizar. Se uma dependência ausente exigir instalação externa, a IA pode precisar solicitar autorização para instalar e então continuar.

