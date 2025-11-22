

let addbtn = document.getElementById("add_btn");
let parentList = document.querySelector("#unorder")
addbtn.addEventListener("click",(e) =>{
   

   
if(parentList.children[0].className == "empty-message"){

   parentList.children[0].remove()

}

   let currentBtn = e.currentTarget;
let currentInput = currentBtn.previousElementSibling.value;

let input = document.querySelector("#input-1")


if(input.value === ""){

   alert("Enter a value")

}

else{
input.value = "";
   let newLi = document.createElement("li")
newLi.className = "list-group-item d-flex justify-content-between";

newLi.innerHTML = `<h4>${currentInput}</h4>
<button class="btn btn-warning ms-auto me-2" onclick = "editElement(this)"  >Edit</button>
<button class="btn btn-danger" onclick = "removeElement(this)" >Remove</button>`;

// let parentList = document.querySelector("#unorder")
parentList.appendChild(newLi) 
   
}


})

function removeElement(currentElement){

   currentElement.parentElement.remove() 
   
   if(parentList.children.length <= 0){

      let newEmptyMessage = document.createElement("h3")
      newEmptyMessage.textContent = "The todo list is empty"

      newEmptyMessage.classList.add("empty-message")
      parentList.appendChild(newEmptyMessage)
   }

   
   
}

function editElement(currentElement){
if(currentElement.textContent === "Done"){
   currentElement.textContent = "Edit";

   let currentChapter = currentElement.previousElementSibling.value
   let currentHeading = document.createElement("h3")
   currentHeading.textContent = currentChapter;
   
   currentElement.parentElement.replaceChild(currentHeading, currentElement.previousElementSibling)

}
else{



   currentElement.textContent = "Done"
  let currentChapter = currentElement.previousElementSibling.textContent;
// console.log(currentElement.previousElementSibling.textContent)
let currentInput = document.createElement("input");

   currentInput.type = "text"
   
   currentInput.className = "form-control"

   currentInput.value  = currentChapter;
   // console.log(currentInput.value)

   currentElement.parentElement.replaceChild(currentInput , currentElement.previousElementSibling)


}



}