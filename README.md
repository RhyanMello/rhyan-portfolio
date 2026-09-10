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

### Trocar ou adicionar um projeto

O mural usa colunas com quebra natural, então cada cartaz mantém a proporção
original — não precisa recortar nada para caber.

1. Coloque a arte em `assets/` (ex: `assets/novo-projeto.jpg`), com no máximo
   1000px de largura e qualidade 80. Isso mantém o site leve.
2. No `index.html`, duplique um bloco `<button class="proj rv" data-p="N">`,
   ajuste o `data-p` para o próximo número, troque o `src`, o `alt`, o título,
   a categoria, a descrição, o ano e as tags.
3. No `js/main.js`, adicione o objeto correspondente no fim do array `P`,
   na mesma ordem do `data-p`.

Para os projetos autorais, o processo é o mesmo dentro de `<div class="rail">`.

**Peças conceituais:** SONY DUALSENSE, UTOPIA, OLISE e HEAVEN usam marcas e
pessoas reais em trabalho de fã ou exercício. Elas estão marcadas como
conceituais no site — mantenha essa marcação para ninguém confundir com
trabalho contratado pela marca.

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
