function showmodel(identity){
    var modal=document.getElementById(identity);
    modal.classList.add("modal-open");
    modal.classList.remove("modal-close");
    modal.style.display="block";
    modal.src="others/1.jpg";
}
function onClosedImagModal(){
    var modal=document.getElementById(identity);
    modal.classList.add("modal-close");
    modal.classList.remove("modal-open");
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
    
}