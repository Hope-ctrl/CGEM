let panels = document.querySelectorAll('.panel');
let newPanel = document.querySelector('div');

function remove(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        remove();
        panel.classList.add('active');

})
})

let left = document.querySelector('.scroll');

function scrollL(){
    left.scrollBy(250, 0)
}

let right = document.querySelector('.scroll');
function scrollR(){
    right.scrollBy(-250, 0)
}


let boxs = document.querySelectorAll('.box');

boxs.forEach((box)=>{
    box.addEventListener('click', ()=>{
        box.classList.toggle('active');
    })
})




