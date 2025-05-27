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
        contact: 'Contact Us',
        backHome: 'Back to Home',
        profileHeading: 'Company Profile',
        profileP1: 'As a company specializing in the field of financial technology, Juncheng Information Technology provides customers with one-stop transaction management solutions in traditional finance, big data analysis, blockchain development, and other areas. At the same time, we have an advisory team consisting mainly of members from multinational financial groups such as UBS, JPMorgan Chase, and Baring Group.',
        profileP2: "In terms of technology, all members of Mingjie Technology's technical team have a master's degree or above and have worked for technology giants such as JPMorgan Chase, Nomura Securities, and Microsoft. There are numerous successful cases from the early stage of technical research and development to the later stage of functional expansion.",
        profileP3: 'We currently have offices in Shanghai, Hong Kong, and Singapore. Since its establishment, it has provided technical services for multiple financial projects worldwide, helping businesses grow beyond millions of dollars.',
        cultureHeading: 'Corporate Culture',
        cultureText: 'As a company specializing in the field of financial technology, Juncheng Information Technology provides customers with one-stop transaction management solutions in traditional finance, big data analysis, software development, and other areas.',
        productsHeading: 'We are committed to providing "one-stop" solutions for financial enterprises',
        prod1Title: 'Customized solutions',
        prod1Body: 'Tailored with independent intellectual property rights for financial enterprises',
        prod2Title: 'Agile development',
        prod2Body: 'Quickly meet user needs through agile models',
        prod3Title: 'Data visualization',
        prod3Body: 'Make data interpretation and analysis more direct and effective',
        prod4Title: 'Performance optimization',
        prod4Body: 'Optimize configuration to cope with the instantaneous concurrency of market data',
        prod5Title: 'Team management',
        prod5Body: 'Multi task management improves team distributed office efficiency',
        prod6Title: 'Assist in development',
        prod6Body: 'Breaking the bottleneck of enterprise development through technological research and development',
        contactHeading: 'Contact Us',
        contactEmail: 'You can reach us via email at '
    },
    zh: {
        heroTitle: '\u4eba\u5de5\u667a\u80fd\u91cd\u5851\u672a\u6765\u6548\u7387',
        heroSubtitle: '\u4e0a\u6d77\u4fca\u6210\u4fe1\u606f\u6280\u672f\u6709\u9650\u516c\u53f8',
        explore: '\u63a2\u7d22\u6211\u4eec\u7684\u89e3\u51b3\u65b9\u6848',
        productsHeader: '\u6211\u4eec\u7684\u4ea7\u54c1',
        profile: '\u516c\u53f8\u7b80\u4ecb',
        culture: '\u516c\u53f8\u6587\u5316',
        productsLink: '\u516c\u53f8\u4ea7\u54c1',
        contact: '\u8054\u7cfb\u6211\u4eec',
        backHome: '\u8fd4\u56de\u9996\u9875',
        profileHeading: '\u516c\u53f8\u7b80\u4ecb',
        profileP1: '\u4f5c\u4e3a\u4e00\u5bb6\u4e13\u6ce8\u91d1\u878d\u79d1\u6280\u9886\u57df\u7684\u516c\u53f8\uff0c\u4e0a\u6d77\u96bd\u57d5\u4fe1\u606f\u79d1\u6280\u6709\u9650\u8d23\u4efb\u516c\u53f8\u5728\u4f20\u7edf\u91d1\u878d\u3001\u5927\u6570\u636e\u5206\u6790\u3001\u533a\u5757\u94fe\u5f00\u53d1\u7b49\u9886\u57df\u4e3a\u5ba2\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u4ea4\u6613\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u540c\u65f6\u6211\u4eec\u62e5\u6709\u7531\u745e\u94f6\u3001\u6469\u6839\u5927\u901a\u3001\u9738\u83b1\u96c6\u56e2\u7b49\u56fd\u9645\u91d1\u878d\u96c6\u56e2\u6210\u5458\u4e3b\u8981\u7ec4\u6210\u7684\u987e\u95ee\u56e2\u961f\u3002',
        profileP2: '\u5728\u6280\u672f\u65b9\u9762\uff0c\u660e\u6377\u79d1\u6280\u7684\u6280\u672f\u56e2\u961f\u6210\u5458\u5747\u62e5\u6709\u7855\u58eb\u53ca\u4ee5\u4e0a\u5b66\u5386\uff0c\u66fe\u4efb\u804c\u4e8e\u6469\u6839\u5927\u901a\u3001\u91ce\u6751\u8bc1\u5238\u3001\u5fae\u8f6f\u7b49\u79d1\u6280\u5de8\u5934\u3002\u4ece\u65e9\u671f\u6280\u672f\u7814\u53d1\u5230\u540e\u671f\u529f\u80fd\u6269\u5c55\u5177\u6709\u4f17\u591a\u6210\u529f\u6848\u4f8b\u3002',
        profileP3: '\u6211\u4eec\u76ee\u524d\u5728\u4e0a\u6d77\u3001\u9999\u6e2f\u548c\u65b0\u52a0\u5761\u8bbe\u6709\u529e\u4e8b\u5904\u3002\u81ea\u6210\u7acb\u4ee5\u6765\uff0c\u5df2\u4e3a\u5168\u7403\u591a\u4e2a\u91d1\u878d\u9879\u76ee\u63d0\u4f9b\u6280\u672f\u670d\u52a1\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5b9e\u73b0\u8d85\u8fc7\u767e\u4e07\u7f8e\u5143\u7684\u589e\u957f\u3002',
        cultureHeading: '\u516c\u53f8\u6587\u5316',
        cultureText: '\u4f5c\u4e3a\u4e00\u5bb6\u4e13\u6ce8\u91d1\u878d\u79d1\u6280\u9886\u57df\u7684\u516c\u53f8\uff0c\u4e0a\u6d77\u96bd\u57d5\u4fe1\u606f\u79d1\u6280\u6709\u9650\u8d23\u4efb\u516c\u53f8\u5728\u4f20\u7edf\u91d1\u878d\u3001\u5927\u6570\u636e\u5206\u6790\u3001\u8f6f\u4ef6\u5f00\u53d1\u7b49\u9886\u57df\u4e3a\u5ba2\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u4ea4\u6613\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u3002',
        productsHeading: '\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u91d1\u878d\u4f01\u4e1a\u63d0\u4f9b\u201c\u4e00\u7ad9\u5f0f\u201d\u89e3\u51b3\u65b9\u6848',
        prod1Title: '\u5b9a\u5236\u5316\u65b9\u6848',
        prod1Body: '\u62e5\u6709\u81ea\u4e3b\u77e5\u8bc6\u4ea7\u6743\uff0c\u4e3a\u91d1\u878d\u4f01\u4e1a\u91cd\u5b9a\u6253\u9020',
        prod2Title: '\u654f\u6377\u5f00\u53d1',
        prod2Body: '\u901a\u8fc7\u654f\u6377\u6a21\u5f0f\u5feb\u901f\u6ee1\u8db3\u7528\u6237\u9700\u6c42',
        prod3Title: '\u6570\u636e\u53ef\u89c6\u5316',
        prod3Body: '\u8ba9\u6570\u636e\u89e3\u8bfb\u4e0e\u5206\u6790\u66f4\u52a0\u76f4\u63a5\u6709\u6548',
        prod4Title: '\u6027\u80fd\u4f18\u5316',
        prod4Body: '\u4f18\u5316\u914d\u7f6e\u5e94\u5bf9\u5e02\u573a\u6570\u636e\u77ac\u65f6\u5e76\u53d1',
        prod5Title: '\u56e2\u961f\u7ba1\u7406',
        prod5Body: '\u591a\u4efb\u52a1\u7ba1\u7406\u63d0\u5347\u56e2\u961f\u5206\u5e03\u5f0f\u529e\u516c\u6548\u7387',
        prod6Title: '\u52a9\u529b\u53d1\u5c55',
        prod6Body: '\u901a\u8fc7\u6280\u672f\u7814\u53d1\u6253\u7834\u4f01\u4e1a\u53d1\u5c55\u74f6\u9888',
        contactHeading: '\u8054\u7cfb\u6211\u4eec',
        contactEmail: '\u60a8\u53ef\u4ee5\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u8054\u7cfb\u6211\u4eec\uff1a'
    }
};

function setLang(lang){
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]){
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('lang') || 'en';
    setLang(saved);
});
