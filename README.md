# CARLÃO | Baús e Caminhões

Site institucional da CARLÃO, empresa especializada em carrocerias e baús para caminhões. A página apresenta os produtos e serviços, informações da empresa, localização e canais de atendimento para compra, venda, troca e consignação.

## Recursos

- Apresentação da empresa e de seus produtos.
- Galeria de imagens dos baús disponíveis.
- Atalhos para contato via WhatsApp.
- Informações de endereço e mapa.
- Layout responsivo para dispositivos móveis e computadores.

## Tecnologias

- React 19 e TypeScript
- TanStack Start e TanStack Router
- Vite
- Tailwind CSS
- Bun para gerenciamento de dependências e execução de scripts

## Requisitos

- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/)

## Instalação e execução

Na raiz do projeto, instale as dependências:

```bash
bun install
```

Inicie o servidor de desenvolvimento:

```bash
bun run dev
```

Abra no navegador o endereço informado no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `bun run dev` | Inicia o servidor de desenvolvimento. |
| `bun run build` | Gera a versão de produção. |
| `bun run build:dev` | Gera a versão em modo de desenvolvimento. |
| `bun run preview` | Pré-visualiza a versão de produção. |
| `bun run lint` | Executa as verificações de código com ESLint. |
| `bun run format` | Formata os arquivos com Prettier. |
| `bun run test` | Executa os testes uma vez. |
| `bun run test:watch` | Executa os testes em modo de observação. |

## Estrutura do projeto

```text
src/
├── assets/       # Logotipo e imagens utilizadas no site
├── components/   # Componentes reutilizáveis
├── lib/          # Utilitários compartilhados
├── routes/       # Páginas e rotas da aplicação
└── styles.css    # Estilos globais
```

## Build de produção

Para gerar os arquivos de produção:

```bash
bun run build
```

Os artefatos são gerados no diretório `.output/`.

## Publicação

Cada atualização enviada à branch `main` inicia automaticamente a publicação no GitHub Pages. O workflow gera uma versão estática compatível com o endereço do projeto e publica o conteúdo de `dist/client`.

Na primeira publicação, configure o repositório em **Settings → Pages → Build and deployment → Source: GitHub Actions**. O endereço esperado do site é:

`https://cargnieli2016.github.io/carlao-bau-e-caminhoes/`

A configuração padrão continua usando Nitro para builds destinados ao Cloudflare. A geração estática é ativada somente pelo workflow do GitHub Pages.
