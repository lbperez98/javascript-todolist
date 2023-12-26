const input = document.getElementById("input-box")
const btn = document.querySelector(".btn-box")
const list = document.querySelector(".list")
const cont = document.querySelector(".count")

let countTask = 0

const displayCount = (count) => {
    cont.innerText = count;
}

const capitalizarPrimera = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const evento = () => {
    if (input.value === ''){
        alert("El campo está vacío")
    }
    else{
        countTask += 1
        let li = document.createElement("LI")
        let span = document.createElement("SPAN")
        li.innerHTML = capitalizarPrimera(input.value);
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        list.appendChild(li)
        displayCount(countTask)

    }
    input.value = ""
}

input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        evento();
    }
})


btn.addEventListener("click", () => {
    evento();
})

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        console.log(e.target.className)
        if(e.target.className === "checked"){
            countTask -=1
            displayCount(countTask)
        }else if(e.target.className === ''){
            countTask += 1
            displayCount(countTask)
        }
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        countTask -=1
        displayCount(countTask)
    }
    
})
