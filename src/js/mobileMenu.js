function animateAndOpen() {

   const headerNavBox = document.querySelector('#headerNavBox')

   headerNavBox.classList.contains("onScreen") ? headerNavBox.classList.remove('onScreen') : headerNavBox.classList.add('onScreen');
}

