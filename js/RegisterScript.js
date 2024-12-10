document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirm_password.value.trim();
    const gender = form.gender.value;
    const dob = form.dob.value;
    const agreement = form.agreement.checked;

    if (username === "") {
      return alert("Username is required");
    }
    
    if (email === "") {
      return alert("Invalid email address.");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters long.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    if (!gender) {
      return alert("Please select your gender.");
    }

    if (!dob) {
      return alert("Date of Birth is required.");
    }

    if (!agreement) {
      return alert("You must agree to the terms and conditions.");
    }

    return alert("Register Successful");
  });
});

function handleHamburger() {
  var navmenu = document.getElementById("navmenu");

  if (navmenu.style.display === "none") {
    navmenu.style.display = "flex";
  } else {
    navmenu.style.display = "none";
  }
}
