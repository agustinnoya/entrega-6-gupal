


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


function contraseña_igual() {
  const pass1 = document.getElementById("password1").value;
  const pass2 = document.getElementById("password2").value;

  if (pass1 !== pass2) {
    document.getElementById("password2").setCustomValidity("true")
  } else {
    document.getElementById("password2").setCustomValidity('');
  }
}


function terminos_error() {

  const valorcheck = document.getElementById("terminos").checked
  const terminos_boton = document.getElementById("terminos_boton")

  if (valorcheck) {

    terminos_boton.classList.add('is-valid');
    terminos_boton.classList.remove('is-invalid');
  } else {

    terminos_boton.classList.remove('is-valid');
    terminos_boton.classList.add('is-invalid');
  }
}

function checkbox_2() {
  const valorcheck = document.getElementById("terminos").checked

  if (localStorage.getItem('checkcomprobacion')) {
    if (valorcheck) {
      document.getElementById("terminos").classList.add('is-valid');
      document.getElementById("terminos").classList.remove('is-invalid');

    } else {
      document.getElementById("terminos").classList.add('is-invalid');
      document.getElementById("terminos").classList.remove('is-valid');

    }
  }
}

function comprobarcheck() {
  localStorage.setItem('checkcomprobacion', true)
}


function checkbox_1() {
  const valorcheck = document.getElementById("terminos").checked



  if (valorcheck) {
    document.getElementById("terminos").classList.add('is-valid');
    document.getElementById("terminos").classList.remove('is-invalid');

  } else {
    document.getElementById("terminos").classList.add('is-invalid');
    document.getElementById("terminos").classList.remove('is-valid');

  }
}

document.addEventListener("DOMContentLoaded", () => {

  localStorage.removeItem('checkcomprobacion')

})

