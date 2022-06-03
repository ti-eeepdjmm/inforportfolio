const btn_menu = document.querySelector(".btn-toggle");
const menu = document.querySelector(".menu")


btn_menu.onclick = function(){
  if(menu.classList.contains('menu--visivel')){
    menu.classList.remove('menu--visivel');
  }else{
    menu.classList.add('menu--visivel');  
  }
  
}