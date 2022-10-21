


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
/** 
function contraseña_igual() {
  const password1 = document.getElementById(`password1`)
  const password2 = document.getElementById(`password2`)

  if (password1.value !== password2.value) {
    password1.classList.add('is-invalid');
    password2.classList.add('is-invalid');
    password1.classList.remove('is-valid')
    password2.classList.remove('is-valid')
  } else {
    password1.classList.add('is-valid');
    password2.classList.add('is-valid');
    password1.classList.remove('is-invalid')
    password2.classList.remove('is-invalid')
  }

}
*/
function contraseña_igual() {
  const pass1 = document.getElementById("password1").value;
  const pass2 = document.getElementById("password2").value;

  if (pass1 !== pass2) {
    document.getElementById("password2").setCustomValidity("true")
  } else {
    document.getElementById("password2").setCustomValidity('');
  }
}

function checkbox_1() {
  const valorcheck = document.getElementById("terminos").checked

  if (valorcheck) {
    document.getElementById("terminos").classList.add('is-valid');
    document.getElementById("terminos").classList.remove('is-invalid');
    console.log("primer if")
  } else {
    document.getElementById("terminos").classList.add('is-invalid');
    document.getElementById("terminos").classList.remove('is-valid');
    console.log("segundo if")
  }
}