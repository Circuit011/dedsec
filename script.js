// DedSec Interactive Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Terminal typing effect
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize terminal typing effect
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        setTimeout(() => {
            typeWriter(typingElement, '> Ready for operations', 80);
        }, 2000);
    }
    
    // Matrix rain effect
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");
        
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(drawMatrix, 35);
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Initialize matrix rain
    createMatrixRain();
    
    // Glitch effect for headings
    function addGlitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.animation = 'glitch 0.3s infinite';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.animation = 'glitch 2s infinite';
            });
        });
    }
    
    addGlitchEffect();
    
    // Terminal window interactions
    function initTerminalEffects() {
        const terminalWindow = document.querySelector('.terminal-window');
        if (terminalWindow) {
            terminalWindow.addEventListener('click', () => {
                terminalWindow.classList.add('terminal-active');
                
                // Add more terminal lines
                const terminalContent = terminalWindow.querySelector('.terminal-content');
                const newLines = [
                    '> Scanning for vulnerabilities...',
                    '> Found 3 potential entry points',
                    '> Initiating stealth mode...',
                    '> Connection established'
                ];
                
                newLines.forEach((line, index) => {
                    setTimeout(() => {
                        const newLine = document.createElement('div');
                        newLine.className = 'terminal-line';
                        newLine.textContent = line;
                        terminalContent.appendChild(newLine);
                    }, index * 1000);
                });
            });
        }
    }
    
    initTerminalEffects();
    
    // Status panel blinking effect
    function initStatusPanel() {
        const statusValues = document.querySelectorAll('.status-value');
        statusValues.forEach(value => {
            setInterval(() => {
                value.style.opacity = '0.5';
                setTimeout(() => {
                    value.style.opacity = '1';
                }, 200);
            }, Math.random() * 3000 + 2000);
        });
    }
    
    initStatusPanel();
    
    // Exploit cards hover effects
    function initExploitCards() {
        const exploitCards = document.querySelectorAll('.exploit-card');
        exploitCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 0 30px rgba(0,255,65,0.4)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 0 20px rgba(0,255,65,0.2)';
            });
        });
    }
    
    initExploitCards();
    
    // Tool items animation
    function initToolItems() {
        const toolItems = document.querySelectorAll('.tool-item');
        toolItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('tool-animate');
        });
    }
    
    initToolItems();
    
    // Recruitment section effects
    function initRecruitmentEffects() {
        const recruitmentSection = document.querySelector('.recruitment-section');
        if (recruitmentSection) {
            // Add hover effect to recruitment GIF
            const recruitmentGif = recruitmentSection.querySelector('.recruitment-gif');
            if (recruitmentGif) {
                recruitmentGif.addEventListener('mouseenter', () => {
                    recruitmentGif.style.transform = 'scale(1.05)';
                    recruitmentGif.style.filter = 'contrast(1.4) brightness(1.1)';
                });
                
                recruitmentGif.addEventListener('mouseleave', () => {
                    recruitmentGif.style.transform = 'scale(1)';
                    recruitmentGif.style.filter = 'contrast(1.2) brightness(0.9)';
                });
            }
            
            // Animate feature items on scroll
            const featureItems = recruitmentSection.querySelectorAll('.feature-item');
            featureItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                item.style.transition = `all 0.5s ease ${index * 0.1}s`;
            });
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        featureItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateX(0)';
                            }, index * 100);
                        });
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(recruitmentSection);
        }
    }
    
    initRecruitmentEffects();
    
    // Random terminal commands
    function addRandomCommands() {
        const commands = [
            '> Scanning network...',
            '> Bypassing security protocols...',
            '> Accessing restricted files...',
            '> Encrypting communications...',
            '> Establishing secure tunnel...',
            '> Monitoring surveillance systems...',
            '> Deploying countermeasures...',
            '> Mission parameters updated...'
        ];
        
        const terminalContent = document.querySelector('.terminal-content');
        if (terminalContent) {
            setInterval(() => {
                const randomCommand = commands[Math.floor(Math.random() * commands.length)];
                const commandLine = document.createElement('div');
                commandLine.className = 'terminal-line';
                commandLine.textContent = randomCommand;
                commandLine.style.opacity = '0.7';
                terminalContent.appendChild(commandLine);
                
                // Remove old lines to prevent overflow
                const lines = terminalContent.querySelectorAll('.terminal-line');
                if (lines.length > 8) {
                    lines[0].remove();
                }
            }, 5000);
        }
    }
    
    addRandomCommands();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const terminalWindow = document.querySelector('.terminal-window');
            if (terminalWindow) {
                terminalWindow.click();
            }
        }
        
        if (e.key === 'Escape') {
            // Clear terminal
            const terminalContent = document.querySelector('.terminal-content');
            if (terminalContent) {
                terminalContent.innerHTML = `
                    <div class="terminal-line">> Initializing secure connection...</div>
                    <div class="terminal-line">> Bypassing firewalls...</div>
                    <div class="terminal-line">> Access granted to DedSec network</div>
                    <div class="terminal-line typing">> Ready for operations</div>
                `;
            }
        }
    });
    
    // Smooth scrolling for navigation
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
    
    // Add loading effect
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.exploit-card, .tool-item').forEach(el => {
            observer.observe(el);
        });
    });
    
    console.log('%cDedSec Network Initialized', 'color: #00ff41; font-size: 16px; font-weight: bold;');
    console.log('%cWelcome to the resistance...', 'color: #00ff41; font-size: 12px;');
});
