document.addEventListener('DOMContentLoaded', () => {
    
    // Initial State
    const authModule = document.getElementById('authModule');
    authModule.classList.add('show-login');

    // Toggle Links
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    
    showSignupBtn.addEventListener('click', () => {
        authModule.classList.remove('show-login');
        authModule.classList.add('show-signup');
        // adjust height if needed based on fields
        authModule.style.minHeight = '520px';
    });

    showLoginBtn.addEventListener('click', () => {
        authModule.classList.remove('show-signup');
        authModule.classList.add('show-login');
        authModule.style.minHeight = '480px';
    });
});

// Simulation Function called by the form onsubmit
function simulateAuth(type) {
    const btn = type === 'login' ? document.getElementById('loginSubmitBtn') : document.getElementById('signupSubmitBtn');
    const originalText = btn.innerText;
    
    // SVG Spinner String
    const spinnerSvg = `<svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>`;
    
    btn.innerHTML = `${spinnerSvg} Authenticating...`;
    btn.disabled = true;

    // Simulate Network Request
    setTimeout(() => {
        btn.innerHTML = 'Success!';
        btn.style.background = 'var(--success)';
        
        // Grab data and store in DB if valid
        if (typeof AppDB !== 'undefined') {
            let user = AppDB.get(AppDB.collections.USER_PROFILE) || {};
            
            if (type === 'signup') {
                const name = document.getElementById('signupName').value;
                const email = document.getElementById('signupEmail').value;
                if (name) user.fullName = name;
                if (email) user.email = email;
            } else if (type === 'login') {
                const email = document.getElementById('loginEmail').value;
                if (email) user.email = email;
                // For login mock, let's derive a mock name from email if name is unset
                if (!user.fullName) user.fullName = email.split('@')[0];
            }
            
            // Just ensure it has minimal structure
            if(!user.level) user.level = 1;
            if(!user.title) user.title = 'Newbie 🌱';
            
            AppDB.set(AppDB.collections.USER_PROFILE, user);
        }

        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
        
    }, 1500);
}
