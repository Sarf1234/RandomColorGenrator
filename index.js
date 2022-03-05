let colorArray = ["green", "yellow", "pink", "silver", '#FFC0CB', '#FFA07A', '#FF4500','#FFA500','#E6E6FA'  ];
const buttonClick = document.getElementById("btn");
const color = document.querySelector(".color");


buttonClick.addEventListener("click", () =>{
    const randomNumber = randomNumbers();
    document.body.style.background = colorArray[randomNumber];
    color.textContent = colorArray[randomNumber];
});

function randomNumbers(){
    return Math.floor(Math.random() * colorArray.length);
}