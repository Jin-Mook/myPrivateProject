// make todo list

const inputText = document.querySelector("#list-input input");
const todoList = document.querySelector("#todo-list");


// 삭제기능 추가하기
function deleteList(event) {
    const deleteId = event.target.parentNode.id
    event.target.parentNode.remove()
    parsedList = JSON.parse(localStorage.getItem("todo"))
    let newDelList = parsedList.filter((el) => {
        return (el.id != deleteId)
    })
    console.log(newDelList)
    newDelList = JSON.stringify(newDelList);
    localStorage.setItem("todo", newDelList);

}


function showToDoText(event) {
    if (event.key === "Enter") {
        const date = new Date();
        event.preventDefault();
        const textValue = inputText.value;
        inputText.value = "";
        const listDiv = document.createElement("div")
        const span = document.createElement("span");
        const button = document.createElement("button")
        button.innerText = '❌'
        span.innerText = textValue;
        listDiv.appendChild(span)
        listDiv.appendChild(button)
        todoList.append(listDiv)
        button.addEventListener('click', deleteList)
        

        // localstorage에 추가하기
        const newObj = {};
        const time = date.getTime()
        listDiv.setAttribute("id", time);
        newObj["text"] = textValue;
        newObj["id"] = time;

        savedList = localStorage.getItem("todo")
        if (savedList) {
            parsedList = JSON.parse(localStorage.getItem("todo"))
        } else {
            parsedList = []
        }
        parsedList.push(newObj);
        const jsonToStr = JSON.stringify(parsedList);
        localStorage.setItem("todo", jsonToStr);
    }
}




inputText.addEventListener("keydown", showToDoText);

let savedList = localStorage.getItem("todo")

if (savedList) {
    let parsedList = JSON.parse(localStorage.getItem("todo"))
    parsedList.forEach((el) => {
        const pastDiv = document.createElement("div");
        const pastSpan = document.createElement("span");
        const pastButton = document.createElement("button");
        pastSpan.innerText = el.text
        pastButton.innerText = '❌'
        pastDiv.appendChild(pastSpan)
        pastDiv.appendChild(pastButton)
        todoList.append(pastDiv)
        pastDiv.setAttribute("id", el.id)
        pastButton.addEventListener('click', deleteList)
    })
} else {
    parsedList = []
}


