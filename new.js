let panels = document.querySelectorAll('.panel');
let newPanel = document.querySelector('div');
let flow1 = documnet.querySelector('.pic');
panels.forEach((panel)=>{
    panel.addEventListener('mouseover', ()=>{
        remove();
        panel.classList.add('active');

})
})

function remove(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}