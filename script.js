document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // 2. 5 Funcionalidades Básicas (Exemplos de aula)
    // =================================================================

    // 1. Alternância de Menu Responsivo (Manipulação de Classes)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        // Adiciona/Remove a classe 'active' para exibir ou ocultar o menu
        mainNav.classList.toggle('active');

        // Altera o ícone do menu (opcional)
        if (mainNav.classList.contains('active')) {
            menuToggle.innerHTML = '✕'; // Ícone de fechar
        } else {
            menuToggle.innerHTML = '☰'; // Ícone de menu
        }
    });

    // 2. Destaque de Notícia ao Passar o Mouse (Manipulação de Estilos)
    const newsCards = document.querySelectorAll('.news-card');

    newsCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            // Aplica um estilo temporário (borda)
            card.style.border = '2px solid var(--color-accent)';
            card.querySelector('h3').style.color = 'var(--color-primary)';
        });
        card.addEventListener('mouseout', () => {
            // Remove o estilo
            card.style.border = 'none';
            card.querySelector('h3').style.color = 'var(--color-secondary)';
        });
    });

    // 3. Exibição de Alerta ao Clicar em 'Leia Mais' (Evento de Clique Simples)
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede a navegação
            const newsTitle = link.closest('.news-card-content').querySelector('h3').textContent;
            alert(`Você clicou para ler mais sobre: "${newsTitle}". Funcionalidade em desenvolvimento!`);
        });
    });

    // 4. Validação Básica de Formulário de Contato (DOM e Condicionais)
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (emailValue === "" || messageValue === "") {
            alert("Por favor, preencha todos os campos obrigatórios (E-mail e Mensagem).");
        } else if (!emailValue.includes('@')) {
             alert("Por favor, insira um endereço de e-mail válido.");
        } else {
            alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
            contactForm.reset(); // Limpa o formulário
        }
    });

    // 5. Ocultar/Exibir Seção (Manipulação de Propriedades CSS)
    const tableMessage = document.getElementById('table-message');
    const standingsTable = document.querySelector('.standings-table');
    let tableIsVisible = true;

    standingsTable.addEventListener('dblclick', () => {
        if (tableIsVisible) {
            standingsTable.style.opacity = '0';
            standingsTable.style.height = '0';
            tableMessage.textContent = 'Tabela de classificação oculta. Dê um duplo clique para mostrar.';
            tableIsVisible = false;
        } else {
            standingsTable.style.opacity = '1';
            standingsTable.style.height = 'auto';
            tableMessage.textContent = '';
            tableIsVisible = true;
        }
    });


    // =================================================================
    // 3. 5 Funcionalidades Extras
    // =================================================================

    // 6. Contador de Caracteres no Formulário (Eventos de Input e Manipulação de Texto)
    const messageTextarea = document.getElementById('message');
    const maxChars = 300; // Limite fictício

    // Cria um elemento para exibir a contagem
    const counterElement = document.createElement('p');
    counterElement.textContent = `0/${maxChars} caracteres`;
    counterElement.style.color = 'white';
    counterElement.style.marginTop = '-10px';
    counterElement.style.textAlign = 'right';
    contactForm.insertBefore(counterElement, contactForm.querySelector('.submit-button'));

    messageTextarea.addEventListener('input', () => {
        const currentLength = messageTextarea.value.length;
        counterElement.textContent = `${currentLength}/${maxChars} caracteres`;

        if (currentLength > maxChars) {
            counterElement.style.color = '#e74c3c'; // Vermelho se exceder
            messageTextarea.value = messageTextarea.value.substring(0, maxChars);
        } else if (currentLength > maxChars * 0.8) {
             counterElement.style.color = 'var(--color-accent)'; // Laranja se estiver perto
        } else {
            counterElement.style.color = 'white';
        }
    });

    // 7. Filtragem de Notícias por Modalidade (Data Attributes e Loop)
    const modalityCards = document.querySelectorAll('.modality-card');

    modalityCards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault();
            const filterCategory = card.getAttribute('data-modality'); // Ex: 'Futebol'

            newsCards.forEach(newsCard => {
                const newsCategory = newsCard.getAttribute('data-category');

                if (newsCategory === filterCategory) {
                    newsCard.style.display = 'block'; // Exibe a notícia
                } else {
                    newsCard.style.display = 'none'; // Oculta as outras
                }
            });

            // Alerta o usuário do filtro ativo
            alert(`Filtro ativo: Exibindo apenas notícias de ${filterCategory}. Atualize a página ou clique em outro esporte para reverter.`);
        });
    });

    // 8. Efeito ScrollSpy/Destaque de Seção Ativa (Eventos de Scroll)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset para a altura do header
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-nav'); // Adiciona a classe 'active-nav' ao link
            }
        });
    });
    // OBS: Você precisaria adicionar um CSS para '.active-nav' (ex: background: var(--color-accent); color: var(--color-dark-text);)

    // 9. Ordenação da Tabela por Coluna de Pontos (Manipulação do DOM e Arrays)
    const sortPtsHeader = document.getElementById('sort-pts');
    const tableBody = standingsTable.querySelector('tbody');
    let sortDirection = 1; // 1 para decrescente (padrão), -1 para crescente

    sortPtsHeader.addEventListener('click', () => {
        const rows = Array.from(tableBody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            const ptsA = parseInt(a.getAttribute('data-pts'));
            const ptsB = parseInt(b.getAttribute('data-pts'));
            return (ptsA - ptsB) * sortDirection;
        });

        // Remove as linhas existentes e insere as ordenadas
        rows.forEach(row => tableBody.appendChild(row));

        // Inverte a direção para o próximo clique
        sortDirection = sortDirection * -1;
        sortPtsHeader.querySelector('.arrow').textContent = sortDirection === 1 ? '↓' : '↑';
    });

    // 10. Destaque do Evento 'Ao Vivo' (Alteração de Classe Dinâmica)
    const liveEvent = document.querySelector('.schedule-event[data-status="live"]');

    if (liveEvent) {
        // Adiciona uma classe de animação ou destaque ao vivo
        liveEvent.classList.add('event-live-pulse');
    }
    // OBS: Você precisaria adicionar o CSS para a animação 'event-live-pulse'
});
