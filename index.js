
var notes = document.querySelector(".note");
var savednotes = document.querySelector(".savednotes");
var createbutton = document.querySelector(".add-note");

createbutton.addEventListener("click", () => {
    if (notes.value === "") {
        alert("Enter a note");
    } else {
        return createNote();
    } 

})

var createNote = function () {
    /*var inVal = notes.value;*/
    var snote = document.createElement("div");
    snote.className = "snote"
    snote.innerHTML=`
    <p>${notes.value}</p><button class="removebutton">-</button>`

    savednotes.appendChild(snote);
   notes.value = "";
   var rembtn = snote.querySelector(".removebutton");
   rembtn.addEventListener("click", () => snote.remove())

}
