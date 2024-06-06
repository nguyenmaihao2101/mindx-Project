// Get the modal
var modal = document.getElementById("myModal");
var layer =document.getElementById("myLayer");

// Get the button that opens the modal
var btn = document.getElementById("NoDelete1");

// Get the <span> element that closes the modal
var next = document.getElementById("next");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
  document.body.classList.add("blurred")
}


// When the user clicks on <TiepTuc>, close the modal
next.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("blurred")
}

// Get the button that opens the modal
var btn2 = document.getElementById("NoDelete2");

// Get the <span> element that closes the modal
var next = document.getElementById("next");

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal.style.display = "flex";
    document.body.classList.add("blurred");
}




