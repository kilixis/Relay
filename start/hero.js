document.addEventListener('DOMContentLoaded', function() {
    const scrollingBackground = document.getElementById('scrolling-background');
    const numRows = 9;
    const duplications = 20;
    const speed = 40;
    
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.className = 'scrolling-row';
        
        const content = document.createElement('div');
        content.className = 'scrolling-content';
        
        for (let j = 0; j < duplications; j++) {
            const textSpan = document.createElement('span');
            textSpan.textContent = 'EvenZa';
            content.appendChild(textSpan);
        }
        
        content.style.animationDuration = `${speed}s`;
        row.appendChild(content);
        scrollingBackground.appendChild(row);
    }

    const hero = document.getElementById('hero');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const signupBtn = document.getElementById('button2');
    const loginBtn = document.getElementById('button1');
    const closeSignup = document.getElementById('close-signup');
    const closeLogin = document.getElementById('close-login');

    signupBtn.addEventListener('click', function() {
        hero.classList.add('slide-right');
        signupForm.classList.add('active');
    });

    loginBtn.addEventListener('click', function() {
        hero.classList.add('slide-left');
        loginForm.classList.add('active');
    });

    closeSignup.addEventListener('click', function() {
        hero.classList.remove('slide-right');
        signupForm.classList.remove('active');
    });

    closeLogin.addEventListener('click', function() {
        hero.classList.remove('slide-left');
        loginForm.classList.remove('active');
    });

    document.querySelector('#signup-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const phone = document.getElementById('signup-phone').value;
        const password = document.getElementById('signup-password').value;
        
        console.log('Signup data:', { name, email, phone, password });

        alert('Signup form submitted!');
        
        this.reset();
    });

    document.querySelector('#login-form form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        
        console.log('Login data:', { email, password, rememberMe });
        alert('Login form submitted! Check console for data.');
        
        this.reset();
    });

    document.addEventListener('click', function(e) {
        if (signupForm.classList.contains('active') && 
            !signupForm.contains(e.target) && 
            e.target !== signupBtn && 
            !signupBtn.contains(e.target)) {
            hero.classList.remove('slide-right');
            signupForm.classList.remove('active');
        }
        
        if (loginForm.classList.contains('active') && 
            !loginForm.contains(e.target) && 
            e.target !== loginBtn && 
            !loginBtn.contains(e.target)) {
            hero.classList.remove('slide-left');
            loginForm.classList.remove('active');
        }
    });

    signupForm.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    loginForm.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});