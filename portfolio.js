function myFunction() {
    var x = document.getElementById("nav-menu");
    var y = document.getElementById("menuList");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.body.classList.add("overflow");
        y.style.display = "block";
      } 
      else {
        x.style.display = "none";
        document.body.className = document.body.className.replace("overflow","");
      }
  }
  function closeDiv(){
    var x = document.getElementById("menuList");
    if (x.style.display === "none") {
        x.style.display = "block";
      } 
      else {
        x.style.display = "none";
        document.body.className = document.body.className.replace("overflow","");
      }
  }

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


window.addEventListener('scroll', function() {
var header = document.getElementById("fixedHeader");
var mobileHeader = document.getElementById("fixedMobileHeader");
console.log(pageYOffset)
if(window.pageYOffset < 500){
header.className = header.className.replace("fix","");
mobileHeader.className = mobileHeader.className.replace("fixMobile","");
} 
else{
header.classList.add("fix");
mobileHeader.classList.add("fixMobile");
}
});