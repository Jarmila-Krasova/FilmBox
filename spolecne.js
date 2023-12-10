const menuTlacitko = document.querySelector('#menu-tlacitko')


menuTlacitko.addEventListener('click', () => {
  const menuPolozky = document.querySelector('#menu-polozky')
  menuPolozky.classList.toggle('show')

  const ikonka = menuTlacitko.querySelector('.fas')
  ikonka.classList.toggle('fa-xmark')
  ikonka.classList.toggle('fa-bars')
})

