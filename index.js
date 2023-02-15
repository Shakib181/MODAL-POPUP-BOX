var Open = document.getElementById("open");
var Close = document.getElementById("close");
var MainModal = document.getElementById("mainModal");
Open.addEventListener("click", function(){
    MainModal.classList.add("show");
})

Close.addEventListener("click", function(){
    MainModal.classList.remove("show");
})