// toggle senha principal
function togglePassword() {
  const pwd = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");
  if (pwd.type === "password") {
    pwd.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    pwd.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

// toggle confirmação de senha
function toggleConfirmPassword() {
  const pwd = document.getElementById("passwordConfirm");
  const icon = document.getElementById("eyeIconConfirm");
  if (pwd.type === "password") {
    pwd.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    pwd.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

const form = document.querySelector(".register_container__form");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("passwordConfirm");

// Validação ao enviar o formulário
form.addEventListener("submit", function (e) {
  const senha = passwordInput.value;
  const confirm = confirmInput.value;

  if (senha !== confirm) {
    e.preventDefault(); // Impede o envio do formulário
    showCustomAlert();  // Mostra o modal
    return;
  }

  if (senha.length > 8 || confirm.length > 8) {
    e.preventDefault();
    alert("A senha deve ter no máximo 8 caracteres!");
  }
});

// Mostrar alerta personalizado (modal)
function showCustomAlert() {
  document.getElementById("customAlert").style.display = "flex";
}

// Fechar alerta personalizado (modal)
function closeCustomAlert() {
  document.getElementById("customAlert").style.display = "none";
}

// Mostrar/ocultar senha principal
function togglePassword() {
  const password = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");
  if (password.type === "password") {
    password.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    password.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

// Mostrar/ocultar confirmação de senha
function toggleConfirmPassword() {
  const confirm = document.getElementById("passwordConfirm");
  const icon = document.getElementById("eyeIconConfirm");
  if (confirm.type === "password") {
    confirm.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    confirm.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}
