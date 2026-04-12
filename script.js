// Preloader removido para melhor performance

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

// Toast Notification System
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = `${icon} ${message}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========== FUNÇÕES DE CONTACTO REAIS ==========

// Enviar WhatsApp
function sendWhatsAppMessage() {
    const phoneNumber = "244974863712";
    const message = encodeURIComponent("Olá! Vi seu portfólio e gostaria de saber mais sobre seus serviços.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    showToast("📱 Abrindo WhatsApp...", "success");
}

// Enviar SMS (abre o app de mensagens do celular)
function sendSMS() {
    const phoneNumber = "244974863712";
    const message = encodeURIComponent("Olá Esteveny! Vi seu portfólio e gostaria de conversar sobre um projeto.");
    
    // Detecta dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.open(`sms:${phoneNumber}?body=${message}`, '_blank');
        showToast("📱 Abrindo app de SMS...", "success");
    } else {
        // Fallback: copiar o número para desktop
        navigator.clipboard.writeText("+244 974 863 712");
        showToast("📋 Número copiado! Use no seu celular", "success");
    }
}

// Fazer ligação
function callPhone() {
    const phoneNumber = "+244974863712";
    window.location.href = `tel:${phoneNumber}`;
    showToast("📞 Iniciando chamada...", "success");
}

// Download CV
function downloadCV() {
    const cvContent = `ESTEVENY SOFÉCIA - Curriculum Vitae
================================

📌 INFORMAÇÕES PESSOAIS
------------------------
Nome: Esteveny Sofécia Dacosta
Profissão: Web Developer & UI/UX Designer
Localização: Luanda, Angola
Telefone: +244 974 863 712
Email: estevenydacosta@gmail.com

🎯 PERFIL PROFISSIONAL
------------------------
Desenvolvedor web apaixonado por transformar ideias em realidade digital. 
Com mais de 5 anos de experiência, especializo-me em criar sites modernos, 
responsivos e otimizados para motores de busca.

💼 EXPERIÊNCIA PROFISSIONAL
------------------------
• Web Developer Senior - Tech Company (2022 - Presente)
• Freelance Web Developer (2019 - Presente)
• UI/UX Designer - Design Agency (2018 - 2022)

🛠️ TECNOLOGIAS
------------------------
• HTML/CSS: 95%
• JavaScript: 90%
• UI/UX Design: 88%
• React/Next.js: 85%
• PHP/Laravel: 80%
• Python: 75%

📊 ESTATÍSTICAS
------------------------
• 50+ Projetos Concluídos
• 30+ Clientes Satisfeitos
• 100+ Commits no GitHub

🚀 PROJETOS DESTAQUE
------------------------
1. Sistema de Convites com QR Code
2. Sistema de Gestão de Livros
3. E-commerce Moderno
4. Dashboard Analytics
5. Landing Pages Corporativas

📞 CONTATO
------------------------
• WhatsApp: +244 974 863 712
• Email: estevenydacosta@gmail.com
• GitHub: https://github.com/EstevenySofecia
• LinkedIn: https://www.linkedin.com/in/esteveny-dacosta-0521702a6/

---
Gerado em: ${new Date().toLocaleDateString('pt-PT')}`;
    
    // Criar blob para download
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CV_Esteveny_Sofecia.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast("📄 Download do CV iniciado!", "success");
}

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

// Active Navigation on Scroll (Otimizado)
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Back to Top Button (Corrigido)
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .skill, .about-text, .about-image, .contact-option-card');
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
// PROJETOS REAIS
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
        
        const techBadges = project.tech.slice(0, 3).map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');
        
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
    
    if (modalTech) {
        const techHtml = `
            <h4 style="margin-bottom: 10px; color: #ff4d05;">🛠️ Tecnologias utilizadas:</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${project.tech.map(tech => `<span style="background: rgba(255,77,5,0.2); padding: 5px 12px; border-radius: 20px; font-size: 12px;">${tech}</span>`).join('')}
            </div>
        `;
        modalTech.innerHTML = techHtml;
    }
    
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

// ========== FORMULÁRIOS COM ENVIO REAL ==========

// Contact Form - Envio real de email via FormSubmit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Mudar o action para enviar emails reais
    contactForm.action = "https://formsubmit.co/estevenydacosta@gmail.com";
    contactForm.method = "POST";
    
    // Adicionar campos hidden se não existirem
    if (!contactForm.querySelector('input[name="_subject"]')) {
        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = '_subject';
        subjectInput.value = 'Novo contacto do Portfólio - Esteveny';
        contactForm.appendChild(subjectInput);
    }
    
    if (!contactForm.querySelector('input[name="_captcha"]')) {
        const captchaInput = document.createElement('input');
        captchaInput.type = 'hidden';
        captchaInput.name = '_captcha';
        captchaInput.value = 'false';
        contactForm.appendChild(captchaInput);
    }
    
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        showToast("📧 Enviando mensagem...", "success");
        
        // O formulário será enviado normalmente
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Newsletter Form - Envio real
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.action = "https://formsubmit.co/estevenydacosta@gmail.com";
    newsletterForm.method = "POST";
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const submitBtn = this.querySelector('button');
        
        if (email) {
            submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i>';
            submitBtn.disabled = true;
            
            fetch('https://formsubmit.co/ajax/estevenydacosta@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: 'Nova inscrição Newsletter - Portfólio',
                    email: email,
                    _captcha: 'false'
                })
            })
            .then(response => response.json())
            .then(() => {
                showToast(`✅ Obrigado! ${email} inscrito com sucesso`, "success");
                this.reset();
                submitBtn.innerHTML = '<i class="bx bx-send"></i>';
                submitBtn.disabled = false;
            })
            .catch(() => {
                showToast("📧 Newsletter registrada! Obrigado", "success");
                this.reset();
                submitBtn.innerHTML = '<i class="bx bx-send"></i>';
                submitBtn.disabled = false;
            });
        }
        return false;
    });
}

// Download CV Button
const downloadBtn = document.getElementById('downloadCV');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadCV();
    });
}

// Initialize
window.addEventListener('load', () => {
    renderPortfolio();
    animateSkills();
    animateOnScroll();
    
    window.addEventListener('scroll', () => {
        animateOnScroll();
    });
    
    // Verificar se veio de redirecionamento do form
    if (window.location.hash === '#enviado' || window.location.search.includes('success')) {
        showToast("✅ Mensagem enviada com sucesso! Responderei em breve.", "success");
    }
    
    console.log('✅ Portfólio carregado com ' + projects.length + ' projetos!');
    console.log('📧 Formulário configurado para enviar emails para estevenydacosta@gmail.com');
    console.log('📱 WhatsApp/SMS: +244 974 863 712');
});

// Smooth Scroll for all anchor links (Corrigido)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            // Fechar menu mobile se estiver aberto
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Tornar funções globais para acesso no HTML
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.sendSMS = sendSMS;
window.callPhone = callPhone;
window.downloadCV = downloadCV;
window.showModal = showModal;
window.closeModal = closeModal;