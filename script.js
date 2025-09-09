// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Destacar link ativo na navegação
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação de entrada para projetos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos projetos
document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.querySelectorAll('.projeto');
    
    projetos.forEach(projeto => {
        projeto.style.opacity = '0';
        projeto.style.transform = 'translateY(20px)';
        projeto.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(projeto);
    });
});

// Adicionar classe active ao CSS
const style = document.createElement('style');
style.textContent = `
    nav ul li a.active {
        color: #3498db;
        font-weight: bold;
    }
`;
document.head.appendChild(style);