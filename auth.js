import supabase from "./supabaseClient.js";

// Handle Sign Up
window.handleSignup = async (event) => {
  event.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  if (password !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
    },
  });

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Account created successfully! Please verify your email before signing in.");
    window.location.href = "signin.html";
  }
};

// Handle Sign In
window.handleSignin = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Login successful!");
    console.log("User data:", data.user);
    window.location.href = "dashboard.html"; // change to your home page
  }
};
