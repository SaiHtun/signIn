let btnUp = document.querySelector(".btn-up");
let btnIn = document.querySelector(".btn-in");
let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");
let name = document.querySelector("#name");
//text
let title = document.querySelector(".signin h2");
let upTitle = document.querySelector(".signup h2");

btnUp.addEventListener("click", () => {
  console.log("hi");

  signIn.classList.toggle("active-signIn");
  signUp.classList.toggle("active-signUp");
  //   form added element
  setTimeout(() => {
    // change text
    if (title.textContent === "Sign In") {
      title.textContent = "Sign Up";
    } else {
      title.textContent = "Sign In";
    }
    if (upTitle.textContent === "Create Account here !") {
      upTitle.textContent = "Welcome back guys !";
    } else {
      upTitle.textContent = "Create Account here !";
    }
    //
    if (btnIn.textContent === "Sign In" && btnUp.textContent == "Sign Up") {
      btnIn.textContent = "Sign Up";
      btnUp.textContent = "Sign In";
    } else {
      btnIn.textContent = "Sign In";
      btnUp.textContent = "Sign Up";
    }
    //
    if (name.dataset.name === "true") {
      name.style.display = "block";
      name.dataset.name = "false";
    } else {
      name.style.display = "none";
      name.dataset.name = "true";
    }
  }, 400);
  // name input
});
