let logo = document.querySelector(".logo");
let menu = document.querySelector(".menu3");
let hamburger = document.querySelector('#openmenu');
let closeHamburger = document.querySelector('#closemenu');
let links= document.querySelector(".nav_items");
let navLinks = document.querySelectorAll(".nav_items li");
let about = document.querySelector(".infos");
let lis = Array.from(navLinks);

function toggler(){
    logo.classList.toggle("hide");
    hamburger.classList.toggle('remove');
    document.body.classList.toggle("no-scroll");
    
  }

menu.addEventListener("click", function(){
    toggler();  
    links.classList.toggle("hide");
    closeHamburger.classList.toggle('remove')
    about.classList.toggle("blur")
  })

  for (let i = 0; i<lis.length; i += 1){
    lis[i].addEventListener("click", function(){
        toggler();
    links.classList.add("hide");  
    closeHamburger.classList.add('remove');
    about.classList.add("remove")
   

    })
  }
