SITE_URL="https://advociaciacontraplanodesaude.vercel.app/"

# Site estático — Dr. Daniel Manfrin

Projeto multipágina em português do Brasil, feito com HTML, CSS e JavaScript puros, sem framework e sem dependências npm. O build opcional da Vercel apenas copia os arquivos estáticos para `dist/`. Não há formulário de dados médicos, revenda ou intermediação de contatos. O escopo atende à instrução final do usuário: remover páginas de bairros e informar atendimento para todo o Brasil. O bloco de conteúdo e paleta está em `NICHO.md`.

**Esta versão não foi publicada.** O domínio informado foi usado nos metadados SEO, mas a origem respondeu HTTP 404 na verificação; a implantação e a confirmação de respostas públicas ficam pendentes. A inscrição OAB/SP 215.246 foi informada e sua exatidão, além dos dados formais de privacidade, ainda deve ser confirmada.

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

`style.css` contém o visual responsivo; `config.js` reúne o identificador da planilha (`advociaciacontraplanodesaude`), telefone, WhatsApp, mensagens e endpoint; `tracker.js` atualiza links e registra automaticamente os cliques na planilha; `favicon.svg` é o ícone do site; `app.config.ts` contém o logo do projeto WebDev e fica fora da saída Vercel. As cinco imagens fotográficas estão em `img/` e têm menos de 150 KB cada. `package.json` não tem dependências; `build.js` usa Node nativo e exclui documentos internos/configuração de projeto de `dist/`. `apps-script/Code.gs` foi copiado do texto fornecido e também não é publicado em `dist/`.

## Domínio e SEO

O domínio fornecido pelo usuário está registrado em `SITE_URL`. O título e H1 da inicial são “Advocacia especializada contra planos de saúde”. As sete páginas têm canonical e `og:url` com URLs absolutas; `sitemap.xml` lista as sete rotas, e `robots.txt` aponta para esse sitemap. O domínio retornou HTTP 404 na verificação anterior à edição; após uma implantação autorizada, confirme que as páginas e os dois arquivos de indexação respondem publicamente com sucesso. Os metadados de título, descrição e prévias sociais já existem; as imagens Open Graph usam URLs CDN públicas.

`llms.txt` mantém links relativos; o domínio absoluto foi aplicado às URLs canônicas, sociais, ao sitemap e ao `robots.txt`.

## Pendências profissionais e de conteúdo

A inscrição informada, `OAB/SP 215.246`, permanece no rodapé das sete páginas. Por solicitação, todo o texto da faixa superior de identificação foi esvaziado. Na inicial, a descrição do hero e o item “Contato direto” incluem a inscrição; a página “Sobre” identifica o profissional como Dr. Daniel Manfrin, advogado inscrito na OAB/SP sob o nº 215.246. O cabeçalho agora usa a marca solicitada “Advocacia Especializada” e a linha “Ações contra planos de saúde”; o responsável deve confirmar antes da publicação que a descrição é demonstrável e adequada às regras profissionais. A expressão “especialista” não foi usada como título pessoal. Também é necessário confirmar nome, inscrição e telefone `+55 16 99323-4658`, completar identidade formal do controlador, canal de privacidade, retenção, fluxo de direitos dos titulares e fornecedores, e revisar os textos. Consulte `CONFORMIDADE-ETICA.md`; este arquivo não substitui a revisão do advogado nem a validação da Seccional.

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
