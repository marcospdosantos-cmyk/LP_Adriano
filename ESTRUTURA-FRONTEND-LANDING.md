# Estrutura front-end da landing page - Adriano Silva

Arquivos criados:

- `index.html`
- `styles.css`
- `script.js`

Objetivo: landing page responsiva, premium, escura, persuasiva e focada em conversao para Adriano Silva.

## 1. Arquitetura completa da pagina

1. `site-header`
   - Navegacao principal.
   - CTA persistente para orcamento.
   - Menu mobile.

2. `hero`
   - Primeira dobra com headline forte, subheadline, provas rapidas e CTA.
   - Funcao: comunicar posicionamento e gerar acao imediata.

3. `value-section`
   - Proposta de valor.
   - Funcao: explicar por que a experiencia de Adriano e diferente de uma palestra comum.

4. `audience-section`
   - Publicos atendidos.
   - Funcao: fazer o visitante se reconhecer rapidamente.

5. `problems-section`
   - Dores do publico.
   - Funcao: conectar com problemas reais de empresas, equipes, eventos e instituicoes.

6. `solutions-section`
   - Palestras, treinamentos, assessoria e experiencias com musica.
   - Funcao: organizar a oferta em caminhos claros de contratacao.

7. `themes-section`
   - Temas mais contratados.
   - Funcao: facilitar a escolha de quem ja sabe que tipo de evento ou capacitacao precisa.

8. `music-section`
   - Diferencial da musica.
   - Funcao: transformar musica em vantagem competitiva e nao apenas informacao biografica.

9. `about-section`
   - Biografia de Adriano.
   - Funcao: construir autoridade pessoal.

10. `authority-section`
    - Numeros e marcas.
    - Funcao: reforcar credibilidade e reduzir risco percebido.

11. `health-section`
    - Assessoria em Humanizacao no Atendimento em Saude.
    - Funcao: destacar a oferta mais tecnica e diferenciada.

12. `testimonials-section`
    - Depoimentos editados.
    - Funcao: validar a promessa com prova social.

13. `faq-section`
    - Perguntas frequentes.
    - Funcao: remover objecoes antes do contato.

14. `final-cta`
    - Chamada final.
    - Funcao: concentrar a decisao em falar pelo WhatsApp.

15. `site-footer`
    - Links, servicos e contato.
    - Funcao: fechamento institucional e acesso rapido.

## 2. Descricao visual por secao

### Header

Visual escuro com efeito de vidro, borda fina e logo textual. Mantem a referencia premium sem pesar a primeira dobra.

### Hero

Fundo escuro cinematografico com imagem grande, overlay forte, headline ampla e CTA laranja. A composicao segue a referencia: presenca forte, pouca poluicao e hierarquia clara.

### Proposta de valor

Layout em duas colunas: imagem de evento e texto editorial. Usa espacamento amplo e texto mais persuasivo.

### Publicos

Grid de chips com borda sutil e marcadores laranja. Serve para leitura rapida.

### Problemas

Texto estrategico fixo no desktop e cards de dores na lateral. No mobile, tudo empilha para leitura direta.

### Solucoes

Quatro cards principais com numeros em laranja. A assessoria recebe destaque visual leve.

### Temas

Lista em grid, com leitura objetiva. Evita excesso de texto e facilita escaneamento.

### Diferencial com musica

Secao escura com foto de palco e lista de beneficios. A atmosfera reforca performance, emocao e memorabilidade.

### Sobre

Bloco editorial com imagem grande e bio ao lado. A ideia e parecer premium, nao curriculo frio.

### Autoridade

Numeros grandes e grid de marcas/instituicoes. Ajuda a construir confianca antes da prova social.

### Humanizacao em saude

Secao clara para quebrar ritmo visual e destacar uma oferta tecnica. Usa texto escuro e lista de resultados.

### Depoimentos

Cards escuros com estrelas em laranja. Depoimentos foram editados para manter forca e leitura rapida.

### FAQ

Acordeoes com botoes laranja. Reduz objecoes sem alongar demais a pagina.

### CTA final

Bloco escuro com luz laranja. Centraliza a decisao em falar pelo WhatsApp.

### Rodape

Estrutura simples em colunas com links, servicos e contato.

## 3. Orientacao responsiva por breakpoint

### Desktop - acima de 1080px

- Header completo com navegacao horizontal.
- Hero em duas colunas: copy principal e painel de autoridade.
- Secoes com espacamento amplo.
- Grids de 4 colunas em publicos, solucoes e metricas.
- Proposta de valor, diferencial e sobre com composicao lateral.
- FAQ em duas colunas.

### Tablet - ate 1080px

- Header vira menu colapsavel.
- Hero empilha com painel abaixo da copy.
- Grids passam para 2 colunas.
- Secoes laterais viram blocos empilhados.
- Depoimentos passam para uma coluna para manter legibilidade.

### Mobile - ate 720px

- Hero prioriza headline, subheadline, CTA e provas rapidas.
- Todos os grids passam para 1 coluna.
- Botoes ocupam largura total.
- Tabelas/listas viram blocos escaneaveis.
- Imagens reduzem altura.
- Espacamento vertical fica mais compacto.
- FAQ e depoimentos ficam em leitura linear.

## 4. Estrutura pronta para desenvolvimento

### Tokens visuais

- `--orange: #f66301`
- `--brick: #c94001`
- `--night: #12100d`
- `--white: #f3f3f1`
- `--radius: 8px`
- Fonte de corpo: `Manrope`
- Fonte de display: `Space Grotesk`

### Conversao

CTAs principais:

- Quero uma proposta
- Falar com Adriano pelo WhatsApp
- Solicitar orcamento

Pontos de conversao:

- Header
- Hero
- Cards de servico
- CTA final
- Rodape

### Observacoes para evolucao

- Substituir as imagens de banco por fotos reais de Adriano em palco, treinamentos, eventos e retratos profissionais.
- Conferir links reais de redes sociais.
- Validar se o WhatsApp deve usar mensagem pre-preenchida.
- Acrescentar logos reais quando disponiveis.
- Ajustar depoimentos com autorizacao e nomes/cargos finais.

