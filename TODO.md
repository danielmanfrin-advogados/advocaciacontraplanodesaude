# TODO do site — Dr. Daniel Manfrin

## 1. Conteúdo e rotas — concluído
- [x] Criar sete páginas HTML reais com texto indexável: início, três serviços, sobre, perguntas frequentes e política de privacidade. Não criar páginas nem referências a bairros; informar atendimento para todo o Brasil.
- [x] Cobrir negativa de cobertura assistencial, tratamentos/terapias/medicamentos e reajuste/cancelamento contratual, com linguagem informativa e contextual.
- [x] Usar contato direto pelo telefone/WhatsApp +55 16 99323-4658; mensagens pré-preenchidas genéricas orientam a não enviar dados médicos na primeira mensagem.
- [x] Na página Sobre, substituir a foto genérica pelo retrato de Dr. Daniel Manfrin da página oficial indicada pelo usuário, mantendo o restante do layout.
- [x] Manter a inscrição informada OAB/SP 215.246 nos rodapés das sete páginas; por solicitação, esvaziar todo o texto da faixa superior de identificação; incluir a inscrição nos textos do hero e do item “Contato direto” da página inicial conforme solicitado.
- [x] Completar a seção de identificação profissional em “Sobre” com “Dr. Daniel Manfrin — advogado inscrito na OAB/SP sob o nº 215.246”, removendo o texto de preenchimento pendente.
- [x] Não incluir promessas de preço, resultado, prazo ou garantia, depoimentos, avaliações, endereço, CNPJ ou sociedade. Não usar “especialista” como título pessoal sem comprovação.
- [x] Não incluir revenda, redistribuição ou intermediação de leads.

## 2. Design e navegação — concluído
- [x] Implementar experiência mobile-first, navegação móvel, fotografia original no hero, botões arredondados, cards e paleta azul sóbria.
- [x] Incluir contraste, foco visível, alvos de toque adequados e suporte a `prefers-reduced-motion`.
- [x] Fornecer `style.css`, `config.js`, `tracker.js` e `favicon.svg`.
- [x] Aplicar no cabeçalho das sete páginas o texto solicitado: “Advocacia Especializada” e “Ações contra planos de saúde”, preservando os demais elementos repetidos.

## 3. SEO e arquivos de indexação — parcialmente concluído
- [x] Incluir title e description por página, Open Graph/Twitter metadata e image, `lang="pt-BR"`, meta robots, `theme-color`, favicon, um H1 por página e JSON-LD válido.
- [x] Incluir `sitemap.xml`, `robots.txt`, `llms.txt`, links internos e `manus-routes.json` com sete páginas; usar `WebSite` na inicial, `Service` nas páginas de serviço, `FAQPage` na inicial/FAQ e `BreadcrumbList` nas internas.
- [x] Usar o domínio informado `https://advociaciacontraplanodesaude.vercel.app/` nos canonicals e `og:url` das sete páginas, nas sete URLs absolutas do sitemap e na linha `Sitemap` de `robots.txt`.
- [ ] Após implantação autorizada, verificar respostas públicas 200 para a home, uma página interna, `sitemap.xml` e `robots.txt`; a origem retornou 404 antes desta edição.

## 4. Contato, rastreamento e privacidade — revisão pendente
- [x] Incluir botões de WhatsApp/telefone no cabeçalho, corpo, faixa final e barra fixa móvel.
- [x] Remover o banner de mensagens/métricas opcionais.
- [x] Registrar automaticamente na planilha os cliques em WhatsApp/telefone, enviando ação, posição, página, origem/referrer, UTM (meio/campanha/termo), presença de gclid, tipo de dispositivo, resolução, idioma, sessão aleatória e mensagem genérica pré-preenchida.
- [x] Gravar o identificador do site como `advociaciacontraplanodesaude` no campo `site` da planilha e usar “Advocacia especializada contra planos de saúde” como title/H1 principal da inicial.
- [x] Atualizar a política de privacidade para descrever o rastreamento e o Apps Script; não solicitar documentos médicos/dados de saúde em formulário; não há formulário de contato.
- [x] Manter `apps-script/Code.gs` como cópia do material fornecido. Nenhum evento de teste foi enviado à planilha.
- [ ] Confirmar identidade formal do controlador, canal dedicado para privacidade, base legal, retenção, titulares/acesso à planilha e política de terceiros.
- [ ] Proteger o Apps Script antes de uso público: o `doGet` aceita parâmetros sem autenticação ou validação de origem e pode receber eventos falsos.

## 5. Entrega técnica — concluída como projeto não publicado
- [x] Usar HTML, CSS e JavaScript puros, sem framework e sem dependências npm; cada rota é um arquivo HTML real.
- [x] Incluir `package.json` sem dependências, `build.js` com Node nativo e `vercel.json` com `npm run build`, `dist`, `cleanUrls: true` e `trailingSlash: true`; excluir documentação interna e config da saída pública.
- [x] Incluir instruções de build/deploy Vercel, uso do Apps Script, Search Console e perfil local condicionado a endereço real e elegibilidade.
- [x] Incluir `LEIA-ME.txt`, `README.md`, `NICHO.md`, `CONFORMIDADE-ETICA.md`, cinco imagens locais e configuração `app.config.ts`.
- [x] Verificar rotas, links internos, título/description, JSON-LD, imagens, XML, manifesto de rotas e respostas HTTP da prévia; executar o build estático.
- [x] Não publicar o site.

## 6. Revisão obrigatória antes de publicação — pendente
- [ ] Confirmar que nome profissional e OAB/SP 215.246 correspondem aos dados do advogado responsável.
- [ ] Revisar se “Advocacia Especializada” é uma descrição demonstrável e adequada às regras de publicidade da OAB; se não for, substituir por uma formulação neutra.
- [ ] Confirmar telefone, domínio, identidade formal do controlador, política/retenção, proteção do endpoint e base legal do rastreamento contínuo.
- [ ] Completar canonicals, `og:url`, sitemap e linha Sitemap em robots após definir o domínio público real.
- [ ] Só publicar depois de completar e revisar as pendências anteriores.
