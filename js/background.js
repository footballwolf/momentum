const images =[
    {name:"1.jpg", title:"The Elderscroll Online"}, 
    {name:"2.jpg", title:"Little Nightmare2"}, 
    {name:"3.jpg", title:"The Elderscroll V: Skyrim"},
    {name:"4.jpg", title:"MonsterHunter:World"},
    {name:"5.jpg", title:"CounterStrike:Global Offensive"},
    {name:"6.jpg", title:"Stardew Valley"}
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src =`img/${chosenImage.name}`;
document.body.appendChild(bgImage);
const bgTitle = document.createElement("p");
bgTitle.innerText = chosenImage.title;
document.body.prepend(bgTitle);