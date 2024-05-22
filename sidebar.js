function sidebarLogic() {
    let menu = document.querySelector(".sidebar-menu");
    let icon = document.querySelector(".sidebar-icon");
  
    function toggleMenu() {
      menu.classList.toggle("active");
    }
  
    icon.addEventListener("click", toggleMenu);
  
    let sidebarItems = document.querySelectorAll(".sidebar-menu .rem");
  
    sidebarItems.forEach(function(item) {
      item.addEventListener("click", function() {
        menu.classList.remove("active");
      });
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        document.querySelector(".sidebar-menu").classList.remove("active");
      } else {
        document.querySelector(".sidebar-menu").classList.remove("active");
      }
      prevScrollpos = currentScrollPos;
    }
  }
  
  export default sidebarLogic;
  