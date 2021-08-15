const quotes = [
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author: "엘버트 허버드",
    },    {
        quote: "피할수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드",
    },    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
        author: "제임스 딘",
    },    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
        author: "톨스토이",
    },    {
        quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
        author: "알랭",
    },    {
        quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "하버트 개서",
    },
];


function setQuote(){
    const quote = document.querySelector("#quotes span:first-child");
    const author = document.querySelector("#quotes span:last-child");
    
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = "-" + todaysQuote.author + "-";
}



setQuote();
setInterval(setQuote, 10000);