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
