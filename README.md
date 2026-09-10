# Rhyan Smello — Portfólio

Site de portfólio pessoal. HTML, CSS e JavaScript puros, sem build, sem dependência.
Única coisa que vem de fora são as fontes do Google Fonts.

## Como rodar

Abra a pasta no VS Code e use a extensão **Live Server** (botão "Go Live" no canto inferior direito).
Ou simplesmente abra o `index.html` no navegador — funciona igual.

## Estrutura

```
rhyan-portfolio/
├─ index.html          → todo o conteúdo e os SVGs dos stickers
├─ css/style.css       → sistema visual completo
├─ js/main.js          → interações (modal, cursor, reveal)
└─ assets/foto.jpg     → retrato da seção Sobre
```

## Onde mexer

| O que você quer mudar | Onde |
|---|---|
| Cores do site | `css/style.css`, bloco `:root` no topo |
| Fontes | `css/style.css`, variáveis `--f-*` + o `<link>` no `index.html` |
| Textos das seções | `index.html` |
| Imagens dos projetos | `index.html`, dentro de cada `<span class="p-art">` |
| Descrição dos projetos no modal | `js/main.js`, array `P` |
| Habilidades | `js/main.js`, array `SK` |
| Telefone e e-mail | `index.html`, seção `#contato` (aparece 2× cada) |

### Trocar a arte dos projetos por imagens reais

Cada projeto tem hoje um SVG provisório. Para usar um arquivo real:

1. Coloque a imagem em `assets/` (ex: `assets/festa-neon.jpg`).
2. No `index.html`, dentro do `<span class="p-art">` daquele projeto, troque o
   `<svg>...</svg>` inteiro por:

```html
<img src="assets/festa-neon.jpg" alt="Peças da identidade da Festa Neon" loading="lazy">
```

3. No `css/style.css`, a regra `.p-art svg` também vale para `img` —
   adicione `img` no seletor: `.p-art svg, .p-art img { ... }`.

⚠️ **Enquanto os projetos forem placeholders, mantenha o aviso "ARTE PROVISÓRIA"
no `index.html` (`<p class="wip">`).** Só remova depois de colocar trabalho real.

## Publicar no GitHub Pages

Depois que o repositório estiver no GitHub:

1. Repositório → **Settings** → **Pages**
2. Em *Source*, escolha **Deploy from a branch**
3. Branch: `main`, pasta: `/ (root)` → **Save**

Em ~1 minuto o site fica no ar em `https://SEU-USUARIO.github.io/rhyan-portfolio/`.

## Acessibilidade e desempenho

- Funciona em desktop, tablet e celular (testado a partir de 400px).
- Respeita tema claro e escuro do sistema.
- Respeita `prefers-reduced-motion`: quem desativou animações no sistema vê o site parado.
- Navegável por teclado, com foco visível.
- O cursor customizado é desativado em telas de toque.

---

© 2026 Rhyan Smello
