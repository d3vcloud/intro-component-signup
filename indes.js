const formContact = document.querySelector('#formSignUp')

formContact.addEventListener('submit', e => {
  e.preventDefault()
  formContact.classList.add('form-errors')
})