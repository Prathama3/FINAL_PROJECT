function toggleMode(){
  document.body.classList.toggle("light");
}

function validateForm(){
  const email = document.getElementById("email").value;

  if(!email.includes("@")){
    alert("Please enter a valid email");
    return false;
  }

  alert("Message sent successfully!");
  return false;
}
