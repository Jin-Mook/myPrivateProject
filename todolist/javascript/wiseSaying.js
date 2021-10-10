// 랜덤으로 명언 선택해주는 파일
const wiseSayingDiv = document.querySelector("#wise-saying");

const wiseSaying = [
    {
        saying: "Be gentle with the young.",
        name: "Juvenal"
    },
    {
        saying: "Life is just one damned thing after another",
        name: "Elbert Hubbard"
    },
    {
        saying: "Wish not so much to live long as to live well.",
        name: "Benjamin Franklin"
    },
    {
        saying: "Life is a long lesson in humility.",
        name: "James M. Barrie"
    },
    {
        saying: "The unexamined life is not worth living.",
        name: "Socrates"
    }
]

const indexWise = Math.floor(Math.random() * wiseSaying.length)

const pSaying = document.createElement("p");
pSaying.textContent = wiseSaying[indexWise].saying;
const pName = document.createElement("p");
pName.textContent = `- ${wiseSaying[indexWise].name} -`;

wiseSayingDiv.append(pSaying);
wiseSayingDiv.append(pName);


