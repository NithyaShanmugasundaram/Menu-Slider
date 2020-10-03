/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function open() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".main").style.marginLeft = "0";
  }
   const openNav = document.getElementById("openNav");
   openNav.addEventListener('click',open)