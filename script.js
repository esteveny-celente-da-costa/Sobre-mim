// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
        setTimeout(() => preloader.remove(), 500);
    }, 500);
});

// Typing Effect
const typedText = document.getElementById('typed');
const phrases = ["Esteveny Sofécia", "Web Developer", "UI/UX Designer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 80);
}
typeEffect();

// Mobile Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Animate on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .skill, .about-text, .about-image');
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < window.innerHeight - 100) {
            el.classList.add('fade-in', 'visible');
        }
    });
}

// Skills Progress Animation
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// ============================================
// PROJETOS REAIS - SEUS TRABALHOS
// ============================================
const projects = [
    { 
        id: 1, 
        category: 'featured', 
        title: 'Sistema de Convites Esteveny', 
        desc: 'Plataforma completa para gerenciamento de convites com QR Code, verificação de entrada, envio por WhatsApp e email.',
        longDesc: 'Sistema completo de convites digitais com geração de QR Code único por convidado, verificação de entrada em tempo real, envio automático por WhatsApp e email. Interface moderna e responsiva. Projeto hospedado e funcionando na Netlify.',
        tech: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'QR Code API', 'WhatsApp API', 'Netlify'],
        icon: '🎫',
        link: 'https://estevenys-invite.netlify.app/',
        demoLink: 'https://estevenys-invite.netlify.app/'
    },
    { 
        id: 2, 
        category: 'featured', 
        title: 'Sistema de Gestão de Livros', 
        desc: 'Sistema para gestão de biblioteca, controle de empréstimos, devoluções e catálogo de livros com interface intuitiva.',
        longDesc: 'Sistema completo para gestão de bibliotecas, permitindo cadastro de livros, usuários, controle de empréstimos e devoluções, relatórios e dashboard administrativo.',
        tech: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL', 'jQuery'],
        icon: '📚',
        link: '#',
        demoLink: '#'
    },
    { 
        id: 3, 
        category: 'web', 
        title: 'E-commerce Moderno', 
        desc: 'Loja virtual completa com carrinho de compras, integração de pagamentos e painel administrativo.',
        longDesc: 'Plataforma de e-commerce completa com sistema de carrinho, checkout, integração com gateway de pagamento, painel administrativo para gestão de produtos e pedidos.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        icon: '🛒',
        link: '#',
        demoLink: '#'
    },
    { 
        id: 4, 
        category: 'design', 
        title: 'Dashboard Analytics', 
        desc: 'Painel administrativo com gráficos interativos e analytics em tempo real.',
        longDesc: 'Dashboard moderno para visualização de dados com gráficos interativos, relatórios personalizáveis e exportação de dados.',
        tech: ['React', 'Chart.js', 'Tailwind CSS', 'Firebase'],
        icon: '📊',
        link: '#',
        demoLink: '#'
    },
    { 
        id: 5, 
        category: 'web', 
        title: 'Landing Page Corporativa', 
        desc: 'Site institucional responsivo com foco em conversão e SEO otimizado.',
        longDesc: 'Landing page profissional para empresas, com seções de serviços, portfólio, depoimentos e formulário de contacto.',
        tech: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'AOS Animation'],
        icon: '🏢',
        link: '#',
        demoLink: '#'
    },
    { 
        id: 6, 
        category: 'design', 
        title: 'App Mobile UI', 
        desc: 'Interface de aplicativo mobile com design moderno e experiência fluida.',
        longDesc: 'Design de interface para aplicativo mobile com foco em experiência do usuário, protótipo navegável e design system completo.',
        tech: ['Figma', 'Adobe XD', 'Prototyping'],
        icon: '📱',
        link: '#',
        demoLink: '#'
    },
    { 
        id: 7, 
        category: 'web', 
        title: 'Sistema de Tarefas', 
        desc: 'Aplicação para gestão de tarefas e produtividade em equipe.',
        longDesc: 'Sistema de gestão de tarefas com kanban, atribuição de responsáveis, prazos e notificações em tempo real.',
        tech: ['Vue.js', 'Laravel', 'MySQL', 'WebSockets'],
        icon: '✅',
        link: '#',
        demoLink: '#'
    },
    { 
        id: 8, 
        category: 'design', 
        title: 'Portfólio Criativo', 
        desc: 'Design de portfólio para artistas e creativos com animações.',
        longDesc: 'Portfólio digital com design criativo, animações suaves e layout responsivo para artistas e profissionais criativos.',
        tech: ['HTML/CSS', 'GSAP', 'Three.js'],
        icon: '🎨',
        link: '#',
        demoLink: '#'
    }
];

// Render Portfolio
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    projects.forEach(project => {
        if (filter !== 'all' && project.category !== filter) return;
        
        const item = document.createElement('div');
        item.className = 'portfolio-item fade-in';
        
        // Criar badges de tecnologias
        const techBadges = project.tech.slice(0, 3).map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');
        
        // Verificar se tem link real
        const hasLiveLink = project.link && project.link !== '#';
        
        item.innerHTML = `
            <div class="portfolio-img-placeholder">
                ${project.icon}
                <span>${project.title.substring(0, 20)}</span>
            </div>
            <div class="portfolio-overlay">
                <h3>${project.title}</h3>
                <p>${project.desc.substring(0, 80)}${project.desc.length > 80 ? '...' : ''}</p>
                <div class="project-tech">${techBadges}</div>
                ${hasLiveLink ? `<a href="${project.link}" target="_blank" class="project-link" onclick="event.stopPropagation();">🔗 Ver projeto ao vivo <i class='bx bx-link-external'></i></a>` : ''}
                <a href="#" class="project-link" onclick="event.stopPropagation(); showModal(${JSON.stringify(project).replace(/"/g, '&quot;')}); return false;">Ver detalhes <i class='bx bx-right-arrow-alt'></i></a>
            </div>
        `;
        item.addEventListener('click', () => showModal(project));
        grid.appendChild(item);
    });
    
    setTimeout(() => {
        document.querySelectorAll('.portfolio-item').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Modal Functions
const modal = document.getElementById('portfolio-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');
const modalLinks = document.getElementById('modal-links');

function showModal(project) {
    if (modalImg) {
        modalImg.innerHTML = project.icon;
        modalImg.style.background = 'linear-gradient(135deg, #ff4d05, #ff8a3d)';
        modalImg.style.display = 'flex';
        modalImg.style.alignItems = 'center';
        modalImg.style.justifyContent = 'center';
        modalImg.style.fontSize = '80px';
    }
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDesc) modalDesc.textContent = project.longDesc || project.desc;
    
    // Adicionar tecnologias
    if (modalTech) {
        const techHtml = `
            <h4 style="margin-bottom: 10px; color: #ff4d05;">🛠️ Tecnologias utilizadas:</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${project.tech.map(tech => `<span style="background: rgba(255,77,5,0.2); padding: 5px 12px; border-radius: 20px; font-size: 12px;">${tech}</span>`).join('')}
            </div>
        `;
        modalTech.innerHTML = techHtml;
    }
    
    // Adicionar links
    if (modalLinks) {
        const hasLiveLink = project.link && project.link !== '#';
        const linksHtml = `
            <div style="display: flex; gap: 15px; margin-top: 15px; flex-wrap: wrap;">
                ${hasLiveLink ? `<a href="${project.link}" target="_blank" style="background: #ff4d05; color: white; padding: 10px 24px; border-radius: 30px; text-decoration: none; font-size: 14px; display: inline-flex; align-items: center; gap: 8px;"><i class='bx bx-link-external'></i> Ver Projeto Online</a>` : ''}
                <button onclick="closeModal()" style="background: transparent; border: 1px solid #ff4d05; color: #ff4d05; padding: 10px 24px; border-radius: 30px; cursor: pointer; font-size: 14px;">Fechar</button>
            </div>
        `;
        modalLinks.innerHTML = linksHtml;
    }
    
    if (modal) modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.getAttribute('data-filter'));
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[placeholder="Seu nome"]').value;
        alert(`✅ Olá ${name}! Mensagem enviada com sucesso!\n\nEntrarei em contacto em breve pelo WhatsApp ou email.`);
        this.reset();
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`✅ Obrigado! Enviaremos novidades para ${email}`);
        this.reset();
    });
}

// Initialize
window.addEventListener('load', () => {
    renderPortfolio();
    
    setTimeout(() => {
        animateOnScroll();
        animateSkills();
    }, 500);
    
    window.addEventListener('scroll', () => {
        animateOnScroll();
    });
});

// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('🚀 Portfólio carregado com ' + projects.length + ' projetos!');
console.log('🔗 Link do projeto de convites: https://estevenys-invite.netlify.app/');