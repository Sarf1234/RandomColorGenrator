const arrayColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F'];
let buttonClick = document.getElementById('btn');
let color = document.querySelector('.color');

buttonClick.addEventListener('click', ()=>{
    let hexcolor = "#";
    for(let i = 0; i < 6; i++){
         hexcolor += arrayColors[randomNumber()];   
    }
    document.body.style.background = hexcolor;
    color.textContent = hexcolor;
});

function randomNumber(){
    return Math.floor(Math.random() * arrayColors.length);
}
