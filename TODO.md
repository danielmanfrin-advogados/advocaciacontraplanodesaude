# TODO do site — Dr. Daniel Manfrin

## 1. Conteúdo e rotas — concluído
- [x] Criar sete páginas HTML reais com texto indexável no HTML: início, três serviços, sobre, perguntas frequentes e política de privacidade. Não criar páginas nem referências a bairros; informar atendimento para todo o Brasil.
- [x] Cobrir negativa de cobertura assistencial, tratamentos/terapias/medicamentos e reajuste/cancelamento contratual, com linguagem informativa e contextual.
- [x] Usar contato direto pelo telefone/WhatsApp +55 16 99323-4658; mensagens pré-preenchidas genéricas orientam a não enviar dados médicos na primeira mensagem.
- [x] Não incluir promessas de preço, resultado, prazo ou garantia, depoimentos, avaliações, endereço, CNPJ, sociedade ou dado profissional inventado. Não afirmar título de especialista sem comprovação.
- [x] Não incluir revenda, redistribuição ou intermediação de leads.

## 2. Design e navegação — concluído
- [x] Implementar experiência mobile-first, navegação móvel, fotografia original no hero, botões arredondados, cards e paleta azul sóbria.
- [x] Incluir contraste, foco visível, alvos de toque adequados e suporte a `prefers-reduced-motion`.
- [x] Fornecer `style.css`, `config.js`, `tracker.js` e `favicon.svg`.

## 3. SEO e arquivos de indexação — parcialmente concluído
- [x] Incluir title e description por página, Open Graph/Twitter metadata e image, `lang="pt-BR"`, meta robots, `theme-color`, favicon, um H1 por página e JSON-LD válido.
- [x] Incluir `sitemap.xml`, `robots.txt`, `llms.txt`, links internos e `manus-routes.json` com sete páginas; usar `WebSite` na inicial, `Service` nas páginas de serviço, `FAQPage` na inicial/FAQ e `BreadcrumbList` nas internas.
- [ ] Domínio público definitivo não informado: adicionar canonical e `og:url`, preencher as sete URLs absolutas no sitemap e adicionar a linha `Sitemap` em robots somente depois de confirmar a origem pública real. Nenhum host presumido foi colocado nas páginas.

## 4. Contato, rastreamento e privacidade — revisão pendente
- [x] Incluir botões de WhatsApp/telefone no cabeçalho, corpo, faixa final e barra fixa móvel.
- [x] Implementar consentimento opcional para registrar cliques genéricos sem texto de mensagem, assunto específico, URL completa, referrer, UTMs, gclid, tela, idioma, sessão ou dados de saúde.
- [x] Centralizar os números em `config.js`; os HTML usam número provisório e o rastreador troca os links após carregar.
- [x] Não solicitar documentos médicos/dados de saúde em formulário; não há formulário de contato.
- [ ] Confirmar controlador, canal de privacidade, retenção, titularidade/acesso e política de terceiros.
- [ ] Endurecer o Apps Script antes de usar em produção: o `doGet` público aceita parâmetros sem validar origem ou token e pode receber eventos falsos. Alternativamente, desativar o tracker (definir `endpoint: ""` em `config.js`).

## 5. Entrega técnica — concluída como projeto não publicado
- [x] Usar HTML, CSS e JavaScript puros, sem framework e sem dependências npm; cada rota é um arquivo HTML real.
- [x] Incluir `package.json` sem dependências, `build.js` com Node nativo e `vercel.json` com `npm run build`, `dist`, `cleanUrls: true` e `trailingSlash: true`.
- [x] Incluir instruções de build/deploy Vercel, uso do Apps Script, Search Console e perfil local condicionado a endereço real e elegibilidade.
- [x] Incluir `LEIA-ME.txt`, `README.md`, `NICHO.md`, `CONFORMIDADE-ETICA.md`, `apps-script/Code.gs` copiado do material enviado, cinco imagens locais e configuração `app.config.ts`.
- [x] Verificar rotas, links internos, título/description, JSON-LD, imagens, XML, manifesto de rotas e respostas HTTP da prévia; executar o build estático.
- [x] Não publicar o site.

## 6. Revisão obrigatória antes de publicação — pendente
- [ ] Inserir nome profissional confirmado, Seccional e inscrição OAB em todas as páginas pertinentes. O marcador visível atual é intencional; não publicar enquanto estiver presente.
- [ ] Confirmar se a expressão “especialista” pode ser sustentada; por ora, manter somente descrição objetiva da atuação.
- [ ] Confirmar domínio, telefone, dados de privacidade, política e endpoint de métricas, e revisar todo o conteúdo como responsável.
- [ ] Só publicar depois de completar e revisar as pendências anteriores.
