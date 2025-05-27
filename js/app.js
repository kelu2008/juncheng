function toggleChat(){
    const win = document.getElementById('chat-window');
    win.classList.toggle('hidden');
}
function sendMessage(event){
    if(event.key==='Enter'){
        const input = document.getElementById('chat-input');
        const msg = document.createElement('div');
        msg.textContent = input.value;
        document.getElementById('chat-messages').appendChild(msg);
        input.value='';
    }
}
function updatePrice(){
    const val = document.getElementById('module-select').value;
    const price = val==='2'?200:100;
    document.getElementById('price').textContent = 'Price: $'+price;
}
function toggleIndustry(id){
    document.querySelectorAll('.industry-detail').forEach(el=>el.classList.add('hidden'));
    document.getElementById(id).classList.toggle('hidden');
}
function filterCases(){
    const q = document.getElementById('case-search').value.toLowerCase();
    document.querySelectorAll('.case').forEach(c=>{
        c.style.display = c.textContent.toLowerCase().includes(q)?'block':'none';
    });
}

const translations = {
    en: {
        heroTitle: 'AI Reshapes Efficiency for the Future',
        heroSubtitle: 'Shanghai Juncheng Information Technology Co., Ltd',
        explore: 'Explore Our Solutions',
        productsHeader: 'Our Products',
        profile: 'Company Profile',
        culture: 'Corporate Culture',
        productsLink: 'Company Products',
        contact: 'Contact Us'
    },
    zh: {
        heroTitle: '\u4eba\u5de5\u667a\u80fd\u91cd\u5851\u672a\u6765\u6548\u7387',
        heroSubtitle: '\u4e0a\u6d77\u4fca\u6210\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8',
        explore: '\u63a2\u7d22\u6211\u4eec\u7684\u89e3\u51b3\u65b9\u6848',
        productsHeader: '\u6211\u4eec\u7684\u4ea7\u54c1',
        profile: '\u516c\u53f8\u7b80\u4ecb',
        culture: '\u516c\u53f8\u6587\u5316',
        productsLink: '\u516c\u53f8\u4ea7\u54c1',
        contact: '\u8054\u7cfb\u6211\u4eec'
    }
};

function setLang(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]){
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLang('en');
});
