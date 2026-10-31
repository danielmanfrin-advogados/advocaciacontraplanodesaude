SITE_URL="PREENCHER_COM_O_DOMINIO_PUBLICO_REAL"

# Site estático — Dr. Daniel Manfrin

Projeto multipágina em português do Brasil, feito com HTML, CSS e JavaScript puros, sem framework e sem dependências npm. O build opcional da Vercel apenas copia os arquivos estáticos para `dist/`. Não há formulário de dados médicos, revenda ou intermediação de contatos. O escopo atende à instrução final do usuário: remover páginas de bairros e informar atendimento para todo o Brasil. O bloco de conteúdo e paleta está em `NICHO.md`.

**Esta versão não foi publicada e não está pronta para publicação.** Há dados profissionais e de privacidade pendentes e o domínio público definitivo não foi informado.

## Rotas

- `/` — início
- `/servicos/negativa-de-cobertura/`
- `/servicos/tratamentos-e-medicamentos/`
- `/servicos/reajuste-ou-cancelamento/`
- `/sobre/`
- `/perguntas-frequentes/`
- `/politica-de-privacidade/`

Cada rota é um arquivo HTML real e contém conteúdo indexável sem depender de JavaScript. `manus-routes.json` lista as sete rotas da prévia.

## Arquivos e tecnologia

`style.css` contém o visual responsivo; `config.js` reúne telefone, WhatsApp, mensagens e endpoint; `tracker.js` controla os links e as preferências do banner; `favicon.svg` é o ícone do site; `app.config.ts` contém o logo do projeto WebDev e fica fora da saída Vercel. As cinco imagens fotográficas estão em `img/` e têm menos de 150 KB cada. `package.json` não tem dependências; `build.js` usa Node nativo e exclui documentos internos/configuração de projeto de `dist/`. `apps-script/Code.gs` foi copiado do texto fornecido e também não é publicado em `dist/`.

## Domínio e SEO — concluir antes de publicar

A linha `SITE_URL` acima é apenas um campo documental para preencher com o domínio público real, depois de confirmadas a disponibilidade e a configuração do deploy. Não há canonical nem `og:url` nas páginas, e o `sitemap.xml` está sem entradas absolutas intencionalmente; não foi inventado um host Vercel. `robots.txt` não inclui uma linha `Sitemap` até haver domínio definitivo. Depois de defini-lo, adicionar `<link rel="canonical">` e `og:url` corretos em cada página, preencher com URLs absolutas as sete entradas do sitemap e acrescentar `Sitemap: https://DOMÍNIO-REAL/sitemap.xml` ao `robots.txt`. Os metadados de título, descrição e prévias sociais já existem; as imagens Open Graph usam URLs CDN públicas.

`llms.txt` usa caminhos relativos enquanto o domínio não está definido. Antes do deploy, confirmar que `SITE_URL` coincide exatamente com a origem pública real.

## Pendências profissionais e de conteúdo

Não publicar enquanto permanecer o marcador visível `OAB/[UF] nº [inserir antes da publicação]`. Inserir o nome profissional confirmado, Seccional e número de inscrição nas páginas pertinentes. Confirmar o telefone `+55 16 99323-4658`, revisar os textos e completar o canal de privacidade, identidade do controlador, retenção, fluxo de direitos dos titulares e fornecedores. A expressão “especialista” não foi usada; só deve ser acrescentada após confirmação de título ou qualificação que possa ser demonstrada. Consulte `CONFORMIDADE-ETICA.md` para as fontes oficiais usadas como cautela editorial; este arquivo não substitui a revisão do advogado nem a validação da Seccional.

## Rastreamento e segurança

O banner oferece consentimento opcional; somente após “Permitir” o código envia eventos genéricos de clique. Não envia texto de mensagem, assunto específico, URL completa, referrer, UTM, gclid, dados médicos, tela, idioma ou sessão. O endpoint do Apps Script fornecido é público: a função `doGet` aceita parâmetros de clique sem autenticar origem ou exigir token. Terceiros podem enviar eventos falsos e contaminar as métricas. O site estático não pode guardar segredo no JavaScript. Não use o endpoint como registro confiável antes de proteger a entrada com uma solução server-side adequada ou de desativar o rastreador; para desativar no rascunho, defina `endpoint: ""` em `config.js`. O endpoint não foi testado nesta entrega.

O site usa Fira Sans pelo Google Fonts. Revise se deseja manter a requisição externa ou hospedar a fonte localmente antes de finalizar a política de privacidade.

## Execução e build local

Para testar os arquivos-fonte sem build, execute na raiz:

```sh
python3 -m http.server 3000
```

Para gerar a saída estática da Vercel, use Node e npm:

```sh
npm install --package-lock=false
npm run build
python3 -m http.server 3000 --directory dist
```

O build não instala bibliotecas e copia os arquivos para `dist/`. Não crie `package-lock.json`.

## Vercel

Use Framework Preset `Other`, Build Command `npm run build` e Output Directory `dist`. `vercel.json` também configura `cleanUrls: true` e `trailingSlash: true`. Complete as pendências acima antes de publicar ou habilitar métricas.
