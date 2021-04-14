function animateAndOpen() {

   const menuButton = document.getElementById('menuButton')
   const navBar = document.querySelector('nav')

   if (navBar.classList.contains("onScreen") && menuButton.classList.contains("closeButton")) {

      menuButton.classList.remove('closeButton')
      navBar.classList.remove('onScreen')

      console.log('nao tem mais');
   } else {

      menuButton.classList.add('closeButton')
      navBar.classList.add('onScreen')

      console.log('agr tem');
   }
}