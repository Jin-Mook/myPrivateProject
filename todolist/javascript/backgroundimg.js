// 랜덤으로 백그라운드 이미지 설정하기

const imgDiv = document.querySelector("#img");
const imgArray = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
]

const indexImg = Math.floor(Math.random()*imgArray.length);

const imgTag = document.createElement("img");
imgTag.setAttribute("src", imgArray[indexImg]);

imgDiv.append(imgTag);