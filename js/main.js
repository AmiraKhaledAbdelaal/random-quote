var data1=[
    '"Be yourself; everyone else is already taken."',
    '"Im selfish, impatient and a little insecure."',
    '"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',
    '"So many books, so little time."',
    '"A room without books is like a body without a soul"',
    '"Be who you are and say what you feel, because those who mind dont matter"',
    '"You ve gotta dance like there s nobody watching Love like you ll never be hurt"',
    '"You know youre in love when you canot fall asleep because reality is finally better than your dreams"',
    '"You only live once, but if you do it right, once is enough."',
    '"Be the change that you wish to see in the world."'
]

var data2=[
    "  --Oscar Wilde",
    "  --Marilyn Monroe",
    "  --Albert Einstein",
    "  --Frank Zappa",
    "  --Marcus Tullius Cicero",
    "  --Bernard M. Baruch",
    "  --William W. Purkey",
    "  --Dr. Seuss",
    "  --Mae West",
    "  --Mahatma Gandhi",
]
var imgran=[
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.webp",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
]
function gettext1(){
    var random = Math.floor(Math.random() * (data1.length))
    document.getElementById('randomimg').innerHTML=
    `
        <img src="${imgran[random]}" alt="" class="w-100 h-100 m-3">
    `
    document.getElementById('text1').innerHTML=data1[random];
    document.getElementById('text2').innerHTML=data2[random];
}