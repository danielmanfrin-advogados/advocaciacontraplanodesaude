SITE_URL="PREENCHER_COM_O_DOMINIO_PUBLICO_REAL"

# Site estático — Dr. Daniel Manfrin

Projeto multipágina em português do Brasil, feito com HTML, CSS e JavaScript puros, sem framework e sem dependências npm. O build opcional da Vercel apenas copia os arquivos estáticos para `dist/`. Não há formulário de dados médicos, revenda ou intermediação de contatos. O escopo atende à instrução final do usuário: remover páginas de bairros e informar atendimento para todo o Brasil. O bloco de conteúdo e paleta está em `NICHO.md`.

**Esta versão não foi publicada e não está pronta para publicação.** A inscrição OAB/SP 215.246 foi informada e inserida; confirmar sua exatidão. Ainda faltam o domínio público definitivo e dados formais de privacidade.

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

`style.css` contém o visual responsivo; `config.js` reúne telefone, WhatsApp, mensagens e endpoint; `tracker.js` atualiza links e registra automaticamente os cliques na planilha; `favicon.svg` é o ícone do site; `app.config.ts` contém o logo do projeto WebDev e fica fora da saída Vercel. As cinco imagens fotográficas estão em `img/` e têm menos de 150 KB cada. `package.json` não tem dependências; `build.js` usa Node nativo e exclui documentos internos/configuração de projeto de `dist/`. `apps-script/Code.gs` foi copiado do texto fornecido e também não é publicado em `dist/`.

## Domínio e SEO — concluir antes de publicar

A linha `SITE_URL` acima é apenas um campo documental para preencher com o domínio público real, depois de confirmadas a disponibilidade e a configuração do deploy. Não há canonical nem `og:url` nas páginas, e o `sitemap.xml` está sem entradas absolutas intencionalmente; não foi inventado um host Vercel. `robots.txt` não inclui uma linha `Sitemap` até haver domínio definitivo. Depois de defini-lo, adicionar `<link rel="canonical">` e `og:url` corretos em cada página, preencher com URLs absolutas as sete entradas do sitemap e acrescentar `Sitemap: https://DOMÍNIO-REAL/sitemap.xml` ao `robots.txt`. Os metadados de título, descrição e prévias sociais já existem; as imagens Open Graph usam URLs CDN públicas.

`llms.txt` usa caminhos relativos enquanto o domínio não está definido. Antes do deploy, confirmar que `SITE_URL` coincide exatamente com a origem pública real.

## Pendências profissionais e de conteúdo

A inscrição informada, `OAB/SP 215.246`, foi inserida no cabeçalho e no rodapé de todas as páginas. Antes da publicação, o responsável deve confirmar que nome, inscrição e telefone `+55 16 99323-4658` estão corretos, completar identidade formal do controlador, canal de privacidade, retenção, fluxo de direitos dos titulares e fornecedores, e revisar os textos. A expressão “especialista” não foi usada; só deve ser acrescentada se houver qualificação demonstrável. Consulte `CONFORMIDADE-ETICA.md`; este arquivo não substitui a revisão do advogado nem a validação da Seccional.

## Rastreamento e segurança

Por solicitação do responsável, não há banner de consentimento e cada clique em WhatsApp/telefone é enviado automaticamente ao Apps Script. O registro inclui ação, posição, página, origem/referrer, UTM (meio/campanha/termo), presença de gclid, tipo de dispositivo, resolução, idioma, identificador aleatório em `sessionStorage` e a mensagem genérica pré-preenchida. Não coleta nome, e-mail, CPF nem documentos médicos pelo rastreador. A política de privacidade descreve os campos. O endpoint de GET é público, sem autenticação/origem validada, e pode receber registros falsos; o site estático não oculta segredos. Antes de publicar, confirmar base legal, retenção, acesso à planilha e proteger o endpoint server-side. Nenhum evento de teste foi enviado à planilha.

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

Use Framework Preset `Other`, Build Command `npm run build` e Output Directory `dist`. `vercel.json` também configura `cleanUrls: true` e `trailingSlash: true`. Complete as pendências de domínio e privacidade acima antes de publicar; a métrica de cliques está habilitada no rascunho conforme solicitado, mas o endpoint precisa de revisão de segurança.
