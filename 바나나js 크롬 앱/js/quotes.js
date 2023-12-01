const quotes = [
  {
    quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기다워 지는 것이다.",
    author: "린 홀",
  },
  {
    quote: "집중력은 자신감과 갈망이 결합하여 생긴다.",
    author: "아놀드 파머",
  },
  {
    quote:
      "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 당신은 아무런 위험도 감수하지 않은 것이다.",
    author: "줄리아 소렐",
  },
  {
    quote: "그 여정이 바로 보상이다.",
    author: "스티브 잡스",
  },
  {
    quote: "기회는 없어지지 않는다. 당신이 놓친 것은 다른 사람이 잡는다.",
    author: "Unknown",
  },
  {
    quote: "자유롭게 피어나기. 이것이 내가 내린 성공의 정의다.",
    author: "게리 스펜스",
  },
  {
    quote: "아이들은 우리가 확실할 수 있는 유일한 형태의 영원이다.",
    author: "해브록 엘리스",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
