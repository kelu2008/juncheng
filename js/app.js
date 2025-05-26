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
