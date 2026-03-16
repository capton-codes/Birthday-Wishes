
    // Confetti generator
    function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#f472b6', '#a78bfa', '#34d399', '#fbbf24', '#60a5fa', '#fb923c', '#f87171'];
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const size = 6 + Math.random() * 10;

        piece.style.left = Math.random() * 100 + '%';
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';
        piece.style.backgroundColor = color;
        piece.style.animationDuration = (3 + Math.random() * 4) + 's';
        piece.style.animationDelay = (Math.random() * 5) + 's';

        if (shape === 'circle') piece.style.borderRadius = '50%';
        else if (shape === 'triangle') {
        piece.style.backgroundColor = 'transparent';
        piece.style.width = '0';
        piece.style.height = '0';
        piece.style.borderLeft = size / 2 + 'px solid transparent';
        piece.style.borderRight = size / 2 + 'px solid transparent';
        piece.style.borderBottom = size + 'px solid ' + color;
        } else {
        piece.style.borderRadius = '2px';
          piece.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        }

        container.appendChild(piece);
    }
    }

    createConfetti();
    setInterval(createConfetti, 8000);

    // Default config
    const defaultConfig = {
    birthday_name: 'Dear Crime Partner😉🫣',
    main_wish: 'I still wonder how one person can be this entertaining and this dramatic at the same time.',
    footer_text: 'With love & sprinkles 💝',
    background_color: '#fdf2f8',
    surface_color: '#ffffff',
    text_color: '#be185d',
    primary_action_color: '#9333ea',
    secondary_action_color: '#ec4899',
    font_family: 'Baloo 2',
    font_size: 20
    };

    function applyConfig(config) {
    const c = { ...defaultConfig, ...config };
      // Text content
    document.getElementById('birthday-name').textContent = c.birthday_name;
    document.getElementById('main-wish').textContent = c.main_wish;
    document.getElementById('footer-text').textContent = c.footer_text;

      // Colors
    const wrapper = document.getElementById('app-wrapper');
    wrapper.style.background = `linear-gradient(135deg, ${c.background_color} 0%, ${c.background_color}ee 30%, ${c.secondary_action_color}33 60%, ${c.secondary_action_color}55 100%)`;

    const card = document.querySelector('.rounded-3xl');
    if (card) {
        card.style.background = `${c.surface_color}a8`;
        card.style.borderColor = `${c.secondary_action_color}33`;
    }

    document.getElementById('main-title').style.color = c.text_color;
    document.getElementById('main-wish').style.color = c.text_color;
    document.getElementById('birthday-name').style.color = c.primary_action_color;
    document.getElementById('sub-message').style.color = c.primary_action_color;
    document.getElementById('footer-text').style.color = c.secondary_action_color;

      // Fonts
    const fontStack = `'${c.font_family}', 'Baloo 2', cursive, sans-serif`;
    const caveatStack = `'Caveat', cursive, sans-serif`;
    document.getElementById('birthday-name').style.fontFamily = fontStack;
    document.getElementById('main-wish').style.fontFamily = fontStack;

      // Font size
    const base = c.font_size || defaultConfig.font_size;
      document.getElementById('main-title').style.fontSize = `${base * 2.6}px`;
      document.getElementById('birthday-name').style.fontSize = `${base * 1.6}px`;
    document.getElementById('main-wish').style.fontSize = `${base}px`;
      document.getElementById('sub-message').style.fontSize = `${base * 1.1}px`;
    document.getElementById('footer-text').style.fontSize = `${base}px`;
    }

    // Initialize Element SDK
    window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
        applyConfig(config);
    },
    mapToCapabilities: (config) => ({
        recolorables: [
        {
            get: () => config.background_color || defaultConfig.background_color,
            set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
        },
        {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
        },
        {
            get: () => config.text_color || defaultConfig.text_color,
            set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
        },
        {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }
        },
        {
            get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
            set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); }
        }
        ],
        borderables: [],
        fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
    }),
    mapToEditPanelValues: (config) => new Map([
        ['birthday_name', config.birthday_name || defaultConfig.birthday_name],
        ['main_wish', config.main_wish || defaultConfig.main_wish],
        ['footer_text', config.footer_text || defaultConfig.footer_text]
    ])
    });

    lucide.createIcons();
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9dd1570ca7b84b13',t:'MTc3MzYzODc1NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();