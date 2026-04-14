document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Binding Logic ---
    function renderUIFromDB() {
        if (typeof AppDB === 'undefined') return;

        // Render Profile Data
        const profile = AppDB.get(AppDB.collections.USER_PROFILE);
        if (profile) {
            const greetingName = profile.fullName ? profile.fullName.split(' ')[0] : 'User';
            const uiGreetingName = document.getElementById('uiGreetingName');
            const uiProfileName = document.getElementById('uiProfileName');
            const uiProfileTitle = document.getElementById('uiProfileTitle');
            
            if(uiGreetingName) uiGreetingName.innerText = `Hello, ${greetingName} 👋`;
            if(uiProfileName) uiProfileName.innerText = profile.fullName;
            if(uiProfileTitle) uiProfileTitle.innerText = `Level ${profile.level} ${profile.title}`;
        }

        // Render Squads
        const squads = AppDB.get(AppDB.collections.SQUADS) || [];
        const uiSquadList = document.getElementById('uiSquadList');
        if (uiSquadList) {
            uiSquadList.innerHTML = squads.map((squad, index) => {
                const isLeader = index === 0 ? 'leader' : '';
                const baseNds = 95 - (index * 5); // Mock metric calculation
                return `
                <div class="list-item ${isLeader}">
                    <div class="flex-between gap-4">
                        <span class="rank">${index + 1}</span>
                        <div><strong>${squad.name}</strong><br><span class="text-sec" style="font-size:12px;">Streak: ${squad.streak} days</span></div>
                    </div>
                    <h2>${baseNds} <span style="font-size:12px;" class="text-sec">NDS</span></h2>
                </div>`;
            }).join('');
        }

        // Render Shopping List
        const items = AppDB.get(AppDB.collections.SHOPPING_LIST) || [];
        const uiShoppingList = document.getElementById('uiShoppingList');
        if (uiShoppingList) {
            uiShoppingList.innerHTML = items.map((item, index) => {
                const checked = item.checked ? 'checked' : '';
                return `
                <div class="list-item" style="border:none; padding: 12px 16px; background: rgba(255,255,255,0.05);">
                    <div class="flex-between gap-4">
                        <input type="checkbox" id="item-${index}" ${checked} style="width:18px; height:18px; accent-color: var(--primary);">
                        <label for="item-${index}" style="margin:0; font-size:15px; color:white; flex:1;">${item.item}</label>
                    </div>
                    <strong>${item.qty}</strong>
                </div>`;
            }).join('');
        }
    }

    // Call Immediately
    renderUIFromDB();

    // --- Dashboard Initialization Animations ---
    
    // 1. Animate NDS Score Ring
    const ndsScoreTarget = 88; // Score out of 100
    const ndsCircle = document.getElementById('ndsProgress');
    const ndsText = document.getElementById('ndsScore');
    
    // Calculate the stroke dash offset based on percentage
    // Circle radius is 50, circumference is ~314 (2 * pi * 50)
    const circumference = 314;
    const offset = circumference - (ndsScoreTarget / 100) * circumference;
    
    setTimeout(() => {
        // Run animation for ring
        ndsCircle.style.strokeDashoffset = offset;
        
        // Counter animation for the text
        let currentScore = 0;
        const duration = 1500; // ms
        const intervalTime = 20; // update every 20ms
        const steps = duration / intervalTime;
        const increment = ndsScoreTarget / steps;
        
        const counter = setInterval(() => {
            currentScore += increment;
            if (currentScore >= ndsScoreTarget) {
                currentScore = ndsScoreTarget;
                clearInterval(counter);
            }
            ndsText.innerText = Math.round(currentScore);
        }, intervalTime);
        
    }, 100);

    // 2. Animate Hydration Level
    const waterLevelEl = document.getElementById('waterLevel');
    const targetHydrationPct = (1.8 / 2.5) * 100; // 72%
    
    setTimeout(() => {
        waterLevelEl.style.height = `${targetHydrationPct}%`;
    }, 300);

    // 3. Simple Interaction for Hydration Button
    const addWaterBtn = document.getElementById('addWaterBtn');
    addWaterBtn.addEventListener('click', () => {
        // Quick visual fake update
        waterLevelEl.style.height = `85%`;
        const statsHeader = document.querySelector('.hydration-stats h2');
        statsHeader.innerText = '2.05L';
        addWaterBtn.innerText = 'Added! ✓';
        addWaterBtn.style.color = '#22c55e';
        setTimeout(() => {
            addWaterBtn.innerText = '+ 250ml';
            addWaterBtn.style.color = '';
        }, 2000);
    });

    // --- Unified Modal Logic ---
    const allModals = document.querySelectorAll('.modal-overlay');
    
    window.closeAllModals = function() {
        allModals.forEach(m => m.classList.remove('active'));
    }

    function openModalById(id) {
        const m = document.getElementById(id);
        if(m) m.classList.add('active');
    }
    
    const magicLogBtn = document.getElementById('magicLogBtn');
    if(magicLogBtn) {
        magicLogBtn.addEventListener('click', () => openModalById('magicalModal'));
    }
    
    // Close on click outside
    allModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeAllModals();
        });
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') window.closeAllModals();
    });

    // --- SPA Sidebar Navigation ---
    const navItems = [
        { linkId: 'nav-dashboard', viewId: 'view-dashboard', liId: 'nav-dashboard-li' },
        { linkId: 'nav-meal-plan', viewId: 'view-meal-plan', liId: 'nav-meal-li' },
        { linkId: 'nav-groups', viewId: 'view-groups', liId: 'nav-groups-li' },
        { linkId: 'nav-profile', viewId: 'view-profile', liId: 'nav-profile-li' },
        { linkId: 'nav-settings', viewId: 'view-settings', liId: 'nav-settings-li' }
    ];

    // Give dashboard main an ID for easier toggling
    const dashboardMain = document.querySelector('main.dashboard');
    if(dashboardMain && !dashboardMain.id) dashboardMain.id = 'view-dashboard';

    navItems.forEach(item => {
        const link = document.getElementById(item.linkId);
        if(link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Hide all views
                navItems.forEach(nav => {
                    const view = document.getElementById(nav.viewId);
                    if(view) view.style.display = 'none';
                    const li = document.getElementById(nav.liId);
                    if(li) li.classList.remove('active');
                });
                
                // Show requested view
                const activeView = document.getElementById(item.viewId);
                if(activeView) activeView.style.display = 'block';
                const activeLi = document.getElementById(item.liId);
                if(activeLi) activeLi.classList.add('active');
            });
        }
    });

    // Magic Log navigation directly opens modal since it's an overlay Action
    const navMagicLog = document.getElementById('nav-magic-log');
    const navMagicLi = document.getElementById('nav-magic-li');
    if(navMagicLog) {
        navMagicLog.addEventListener('click', (e) => {
            e.preventDefault();
            // Optional: highlight momentarily or leave dashboard active
            openModalById('magicalModal');
        });
    }

    // --- Logout & Profile Actions ---
    const logoutActions = ['logoutBtn', 'profileLogoutBtn'];
    logoutActions.forEach(id => {
        const btn = document.getElementById(id);
        if(btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Simulating clearing token
                window.location.href = 'auth.html';
            });
        }
    });

    const editProfileBtn = document.getElementById('editProfileBtn');
    if(editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            const profile = AppDB.get(AppDB.collections.USER_PROFILE);
            if(profile) {
                document.getElementById('inputProfileName').value = profile.fullName;
                document.getElementById('inputProfileEmail').value = profile.email;
            }
            openModalById('editProfileModal');
        });
    }

    const saveProfileBtn = document.getElementById('saveProfileBtn');
    if(saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            const profile = AppDB.get(AppDB.collections.USER_PROFILE);
            profile.fullName = document.getElementById('inputProfileName').value;
            profile.email = document.getElementById('inputProfileEmail').value;
            AppDB.set(AppDB.collections.USER_PROFILE, profile);
            
            renderUIFromDB();
            window.closeAllModals();
            window.showToast('Profile saved successfully!', 'success');
        });
    }

    const deleteAccountBtn = document.getElementById('deleteAccountBtn');
    if(deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', () => openModalById('deleteModal'));
    }

    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    if(confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            confirmDeleteBtn.innerText = "Deleting...";
            setTimeout(() => {
                window.location.href = 'auth.html';
            }, 1000);
        });
    }

    // --- Toast Notification Engine ---
    window.showToast = function(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if(!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? '✓' : '⚠️';
        toast.innerHTML = `<span class="toast-icon">${icon}</span> <span>${message}</span>`;
        
        container.appendChild(toast);
        
        // Trigger reflow for slide in
        setTimeout(() => toast.classList.add('show'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // --- Wire Up All Remaining Buttons ---
    const attachToastToButtons = [
        { selector: 'button.btn-primary:containsText("Generate New Plan")', msg: 'Crunching 10k recipes... Weekly Plan Generated!' },
        { selector: 'button.btn-secondary:containsText("Smart Shopping List")', msg: 'Instacart/Swiggy integration queued.' },
        { selector: 'button.btn-secondary.small:containsText("Scan Pantry")', msg: 'Opening camera for pantry scan...' },
        { selector: 'button.btn-primary:containsText("Create Squad +")', action: () => openModalById('squadModal') },
        { selector: 'button.btn-secondary.small:containsText("Submit Evidence")', msg: 'Opening camera for meal verification.' },
        { selector: 'button.btn-primary.small:containsText("Save Changes")', msg: 'All settings securely saved to your profile.' },
        { selector: 'button.btn-secondary.small:containsText("Connect")', msg: 'Redirecting to Dexcom OAuth portal...' },
        { selector: '#confirmCreateSquadBtn', msg: 'Squad successfully created! Invite Link copied.', close: true }
    ];

    // Helper to find button by exact text since JS doesn't have :contains natively
    document.querySelectorAll('button').forEach(btn => {
        // Direct Action Mapping
        if (btn.innerText.includes('Create Squad +')) {
            btn.addEventListener('click', () => openModalById('squadModal'));
        } else if (btn.innerText.includes('Generate New Plan')) {
            btn.addEventListener('click', () => window.showToast('Weekly Plan Generated!'));
        } else if (btn.innerText.includes('Smart Shopping List')) {
            btn.addEventListener('click', () => openModalById('shoppingModal'));
        } else if (btn.innerText.includes('Scan Pantry')) {
            btn.addEventListener('click', () => window.showToast('Opening camera...', 'success'));
        } else if (btn.innerText.includes('Submit Evidence')) {
            btn.addEventListener('click', () => window.showToast('Waiting for photo verification...'));
        } else if (btn.innerText.includes('Save Changes')) {
            btn.addEventListener('click', () => window.showToast('Preferences updated successfully.'));
        } else if (btn.innerText.includes('Connect') && !btn.innerText.includes('Connected')) {
            btn.addEventListener('click', () => window.showToast('Connecting to Device...'));
        } else if (btn.id === 'confirmCreateSquadBtn') {
            btn.addEventListener('click', () => {
                const squadInputs = document.querySelectorAll('#squadModal input');
                const squadName = squadInputs[0].value || 'New Squad';
                
                AppDB.insert(AppDB.collections.SQUADS, {
                    id: Date.now(), name: squadName, members: 1, streak: 0
                });
                
                renderUIFromDB(); // Force UI update
                
                squadInputs[0].value = ""; // reset
                squadInputs[1].value = "";
                window.closeAllModals();
                window.showToast(`Squad "${squadName}" successfully created! Invite Link copied.`);
            });
        }
    });
    
    // Magic log buttons
    document.querySelectorAll('.interactive-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.closeAllModals();
            window.showToast('Logging entry...', 'success');
        });
    });

});
