
let addbtn = document.getElementById("addbtn")
let input1 = document.getElementById("input1")
let parentList = document.getElementById("parentList")
addbtn.addEventListener("click",(e) => {

// input1.value = ""
if(input1.value == ""){
alert("Add some value")
}
else{

    let currentElement = e.currentTarget;

    let currentInput = currentElement.previousElementSibling.value

    let newLi = document.createElement("li");
newLi.className = "list-item d-flex";
newLi.innerHTML = `<h3> ${currentInput} </h3>
    <button  >Edit</button>
<button onclick = "removeElement(this)" >Delete</button>`
parentList.appendChild(newLi)
input1.value = ""


}





})


function removeElement(currentElement){

   currentElement.parentElement.remove()
    

}