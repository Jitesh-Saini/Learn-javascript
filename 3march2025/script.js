function inputt1(){

    let a = document.getElementById("input").value

    if (isNaN(a) || a <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    let output = document.getElementById("result")
    output.innerHTML = '';

    output.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`;


    for (let i = 0; i < a * a; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }



}
function inputt2(){
    alert(`You Checked the Printed Value ${input.value}`)

}

