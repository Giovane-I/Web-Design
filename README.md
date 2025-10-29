# ⚽ Mundo Esportivo | Portal de Notícias Esportivas Puras

![Screenshot ilustrativo de um site de notícias esportivas com layout limpo e cores vibrantes, focando em usabilidade e responsividade.]

## 💡 Visão Geral do Projeto

O **Mundo Esportivo** é um protótipo de portal de notícias focado em demonstrar o uso eficiente das tecnologias fundamentais do desenvolvimento web: **HTML5, CSS3 e Vanilla JavaScript**. O projeto simula um site completo e interativo sem a necessidade de frameworks ou bibliotecas externas.

### Princípios de Desenvolvimento:
1.  **Semântica Forte:** A estrutura HTML (`html.txt`) utiliza tags semânticas para melhor SEO e acessibilidade.
2.  **Performance:** Toda a interatividade é controlada por **JavaScript Puro** (`java.txt`), garantindo leveza e carregamento rápido.
3.  **Responsividade:** O design é adaptável a qualquer dispositivo (desktop, tablet e mobile) através de **Media Queries** e **Flexbox** (`style.css`).

---

## 🛠️ Tecnologias e Arquivos Fonte

| Arquivo | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **`html.txt`** | HTML5 | Estrutura semântica e conteúdo da página. **(DEVE SER RENOMEADO PARA `index.html`)** |
| **`style.css`** | CSS3 | Estilização completa, tema de cores, variáveis CSS e layout responsivo. |
| **`java.txt`** | Vanilla JavaScript | Implementação de todas as funcionalidades dinâmicas e manipulação do DOM. **(DEVE SER RENOMEADO PARA `script.js`)** |

---

## 🎨 Paleta de Cores e Tipografia (Design System)

O design segue um tema vibrante e esportivo, definido por **Variáveis CSS** (`:root`) em `style.css`.

### Paleta de Cores

| Variável CSS | Código Hex | Descrição | Uso Principal |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#00A878` | **Verde Esportivo** | Botões, destaques e links ativos. |
| `--color-accent` | `#F2A057` | **Laranja Destaque** | Efeitos de hover e elementos de ênfase (ex: ícones). |
| `--color-dark-bg` | `#102326` | **Azul Marinho Escuro** | Background do Header e Footer, fornecendo contraste. |
| `--color-light-bg` | `#F2F2F2` | **Cinza Claro** | Background principal do corpo do site. |

### Tipografia

* **Títulos:** `font-family: 'Oswald', sans-serif;` (Impacto e Esporte)
* **Corpo de Texto:** `font-family: 'Roboto', sans-serif;` (Legibilidade e Limpeza)

---

## ⚡ Funcionalidades JavaScript em Destaque

O arquivo `java.txt` (que se tornará `script.js`) é o motor de interatividade do portal, implementando lógicas complexas de manipulação do DOM.

### I. Navegação e UX
* **Menu Responsivo (`.menu-toggle`):** Alternância do menu de navegação em mobile, mudando o ícone de **☰** para **✕** e vice-versa.
* **Scroll Spy:** O código monitora a rolagem da página para aplicar a classe **`.active-nav`** ao link do menu correspondente à seção visível no viewport (ex: `#news`, `#standings`).
* **Destaque de Conteúdo (Hover):** Ao passar o mouse sobre os cards (`.news-card`), o JS manipula o estilo (`card.style.border`) para aplicar um destaque visual dinâmico com a cor de ênfase.
* **Scroll Suave:** Habilitado via CSS (`scroll-behavior: smooth;`) no elemento `html`.

### II. Lógica de Dados (Tabela de Classificação)
* **Ordenação Dinâmica de Tabela:**
    * O clique no cabeçalho "Pts" (`#sort-pts`) dispara uma função de ordenação.
    * As linhas (`<tr>`) são ordenadas (`Array.from(rows).sort(...)`) usando o valor do atributo **`data-pts`** para reverter a ordem (crescente ou decrescente).
* **Ocultar/Exibir Tabela (Toggle):** Um evento de **duplo clique** (`dblclick`) na tabela de classificação oculta ou exibe o contêiner, mostrando o controle avançado de eventos.

### III. Formulário de Contato (`#contact-form`)
* **Validação de Envio:** O script impede o envio do formulário se o campo **E-mail** não contiver `@` ou se a **Mensagem** estiver vazia, exibindo `alert`s informativos.
* **Contador de Caracteres:** No evento `input` do campo de mensagem, o código atualiza o `textContent` do elemento **`#char-count`**, mostrando ao usuário a contagem de caracteres em tempo real e o limite de 300.

### IV. Destaques Visuais
* **Evento Ao Vivo:** O script busca um evento no calendário que possua o atributo **`data-status="live"`** e aplica um destaque (simulado por mudança de classe) para garantir visibilidade imediata.
* **Alerta "Leia Mais":** O clique nos links de detalhe dispara um `alert()` informando que o recurso de artigo completo está em desenvolvimento, uma prática comum em protótipos.

---

## 🚀 Como Preparar e Executar

Para rodar este projeto em seu ambiente local, siga as instruções:

1.  **Criação do Diretório:** Crie uma pasta para o projeto, por exemplo, `mundo-esportivo/`.
2.  **Renomear e Salvar:**
    * Salve o conteúdo de **`html.txt`** como **`index.html`** dentro da pasta.
    * Salve o conteúdo de **`java.txt`** como **`script.js`** dentro da pasta.
    * Salve o conteúdo de **`style.css`** como **`style.css`** dentro da pasta.
3.  **Estrutura Final:**
    ```
    /mundo-esportivo/
    ├── index.html        (HTML5)
    ├── style.css         (CSS3)
    └── script.js         (Vanilla JS)
    ```
4.  **Execução:** Abra o arquivo **`index.html`** em qualquer navegador moderno (Chrome, Firefox, Edge). É recomendado usar uma extensão como **Live Server** (VS Code) para visualização em tempo real.

---

## 📜 Licença

Este projeto é disponibilizado sob a licença **MIT**. Você pode usar, copiar, modificar e distribuir livremente para fins educacionais ou comerciais, mantendo a atribuição original.
