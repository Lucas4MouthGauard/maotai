// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    initSmoothScroll();
    
    // 分享功能
    initShareFunction();
    
    // 按钮交互效果
    initButtonEffects();
    
    // 浮动金币动画
    initFloatingCoins();
    
    // 导航栏高亮
    initNavigationHighlight();
    
    // 社交媒体链接功能
    initSocialLinks();
});

// 平滑滚动功能
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 分享功能
function initShareFunction() {
    const shareBtn = document.getElementById('shareBtn');
    const shareText = `A sip of tradition, a shot of speculation. 中国茅台 让年轻人也能买得起茅台！\n关注 @ChineseMoutai\n#MOUTAI #茅台 #Web3 #Meme \nmaotai.app`;
    
    shareBtn.addEventListener('click', function() {
        const tweetText = encodeURIComponent(shareText);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        
        window.open(twitterUrl, '_blank', 'width=600,height=400');
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// 社交媒体链接功能
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link, .official-btn');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 添加点击效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // 如果是茅台官方链接，添加特殊效果
            if (this.href.includes('maotai600519')) {
                console.log('🍶 访问茅台官方Twitter！');
            }
        });
    });
}

// 按钮交互效果
function initButtonEffects() {
    const buttons = document.querySelectorAll('.pixel-btn');
    
    buttons.forEach(button => {
        // 鼠标悬停效果
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        // 点击效果
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// 浮动金币动画增强
function initFloatingCoins() {
    const coins = document.querySelectorAll('.coin');
    
    coins.forEach((coin, index) => {
        // 添加随机移动
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            coin.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
        }, 3000 + index * 1000);
        
        // 添加点击效果
        coin.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.color = '#ffed4e';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.color = '#ffd700';
            }, 500);
        });
    });
}

// 导航栏高亮
function initNavigationHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
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
}

// 添加一些有趣的交互效果
function addFunEffects() {
    // 茅台瓶点击效果
    const bottle = document.querySelector('.pixel-bottle');
    if (bottle) {
        bottle.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1.5)';
            }, 200);
            
            // 添加音效提示（如果有的话）
            console.log('🍶 茅台瓶被点击了！');
        });
    }
    
    // 价格数字跳动效果
    const priceElement = document.querySelector('.chart-price');
    if (priceElement) {
        setInterval(() => {
            priceElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                priceElement.style.transform = 'scale(1)';
            }, 200);
        }, 5000);
    }
}

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case '1':
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
            break;
        case '2':
            document.querySelector('#chart').scrollIntoView({ behavior: 'smooth' });
            break;
        case '3':
            document.querySelector('#share').scrollIntoView({ behavior: 'smooth' });
            break;
        case 's':
        case 'S':
            document.getElementById('shareBtn').click();
            break;
    }
});

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 添加加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // 初始化所有效果
    addFunEffects();
    
    // 显示欢迎消息
    setTimeout(() => {
        console.log('🚀 $MOUTAI 网站加载完成！');
        console.log('💡 提示：按 1,2,3 键快速导航，按 S 键分享');
    }, 1000);
});

// 添加一些有趣的鼠标跟随效果
document.addEventListener('mousemove', function(e) {
    // 创建跟随光点
    if (Math.random() < 0.1) {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.backgroundColor = '#ffd700';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.animation = 'fadeOut 1s ease-out forwards';
        
        document.body.appendChild(dot);
        
        setTimeout(() => {
            document.body.removeChild(dot);
        }, 1000);
    }
});

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0); }
    }
    
    .nav-links a.active {
        border-color: #ffd700 !important;
        background: rgba(255, 215, 0, 0.2) !important;
        color: #ffd700 !important;
    }
    
    .pixel-bottle {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .coin {
        cursor: pointer;
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style); 