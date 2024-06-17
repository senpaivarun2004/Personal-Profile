// Navigation event handling
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const activePage = document.querySelector('.page.active');
        
        if (activePage) {
            activePage.classList.add('fade-out');
            activePage.addEventListener('animationend', () => {
                activePage.classList.remove('active', 'fade-out');
                activePage.style.display = 'none';
                
                const target = document.querySelector(this.getAttribute('href'));
                target.style.display = 'block';
                target.classList.add('active');
            }, { once: true });
        } else {
            const target = document.querySelector(this.getAttribute('href'));
            target.style.display = 'block';
            target.classList.add('active');
        }
    });
});

// Profile photo fullscreen toggle
const profilePhoto = document.querySelector('.profile-photo');
profilePhoto.addEventListener('click', function() {
    this.classList.toggle('fullscreen');
});

// Double-tap event handling for drop-down effect
document.querySelectorAll('.layout-box').forEach(box => {
    let tapCount = 0;
    box.addEventListener('click', function() {
        tapCount++;
        setTimeout(() => {
            if (tapCount === 2) {
                const content = this.querySelector('.hidden');
                if (content) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                }
            }
            tapCount = 0;
        }, 300);
    });
});