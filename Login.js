const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");
  let userContainer = document.querySelector(".user");
let quitButton = document.querySelector(".quitSite");
let manageAccounts = document.querySelector(".manageAccountsButton");
var windowIndex = JSON.parse(localStorage.getItem("windowIndex")) || ""; ;
if(windowIndex=="LogIn"){
  document.querySelector(".music").style.display = "none";
  manageAccounts.addEventListener("click",function(){
  document.querySelector(".music").style.display = "block";
});
}

document.getElementById("container").style.display ="none";
document.addEventListener("DOMContentLoaded", function() {
    let adminPassButton = document.querySelector(".imNotIn");
    quitButton.addEventListener("click" ,function(){
      document.querySelector(".music").style.display = "none";
    });
    quitButton.addEventListener("mouseover",function(){
      quitButton.style.cursor="pointer";
    });
    quitButton.addEventListener("mouseout",function(){
      quitButton.style.cursor="none";
    });

    adminPassButton.addEventListener("click", function() {
        var adminPassword = document.getElementById("adminPassword"); 
        if (adminPassword && adminPassword.value === "0000") { 
            document.querySelector(".music").style.display = "none";
            document.getElementById("container").style.display ="flex";
            getUsers();
        }
        else {
          alert("Wrong password!");
        }
    });
});

signupButton.addEventListener(
  "click",
  ()=>{
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);

const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordInput = document.getElementById("password-input");
const emailInput = document.getElementById("email-input");
const tableBody = document.getElementById("table-body");
const signupEmail = document.getElementById("signUpEmail");
const signupName = document.getElementById("signUpName");
const signUpPassword = document.getElementById("signUpPassword");
const loginEmail = document.getElementById("loginEmail");
const loginPassword =document.getElementById("loginPassword");
let SignUpButton = document.getElementById("signUpButton");
let currentUserIndex = null;
let users = JSON.parse(localStorage.getItem("users")) || [];
let updateBtn = document.getElementById("update-btn");
let cancelBtn = document.getElementById("cancel-btn");
let LoginButton = document.getElementById("loginButton");
var loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false; ;
let foundAccount =false ;
if(loggedIn==true){userContainer.style.display="none";}
else {userContainer.style.display="flex";}
function loginUser () {
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();
  users.forEach(function(u){
    if (u.email==email && u.password==password) {
      loggedIn=true;
      localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
      signInNav.textContent="Sign out ";
      foundAccount = true ;
      userContainer.style.display ="none";
    }
  });
  if (foundAccount==false)
  {alert("account not found!");}
}

function createUser() {
  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signUpPassword.value;
  let validUser = true;
  if (name.length < 3) {
    signupName.style.borderColor = "red";
    alert("name too short!");
    validUser = false;
  }
  if (!validRegex.test(email)) {
    signupEmail.style.borderColor = "red";
    alert("enter a valid email!");
    validUser = false;
  }
  if (password.length<8) {
    signUpPassword.style.borderColor = "red";
    alert("password must at least be 8  characters!");
    validUser = false;
  }
  let id = findId();
  if (validUser==true) {
    const newUser = {
      password,
      email,
      id,
    };
    users.push(newUser);
    saveData();
    resetSignup();
    signUpPassword.style.borderColor = "#FFB547";
    signupEmail.style.borderColor = "#FFB547";
    signupName.style.borderColor = "#FFB547";
  }
}
function findId() {
  let id = 1;
  val = users.map((user) => user.id).indexOf(id);
  while (val != -1) {
    id++;
    val = users.map((user) => user.id).indexOf(id);
  }
  return id;
}
function getUsers() {
  tableBody.innerHTML = "";
  users.forEach((user, index) => {
    console.log(index);
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const actionTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.innerText = " edit";
    editBtn.addEventListener("click", () => showUpdateUser(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = " delete";
    deleteBtn.addEventListener("click", () => deleteUser(index));
    idTd.innerText = user.id;
    passwordTd.innerText = user.password;
    emailTd.innerText = user.email;

    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(emailTd);
    tr.appendChild(passwordTd);
    tr.appendChild(actionTd);
    tableBody.appendChild(tr);
  });
}
function updateUser() {
  users[currentUserIndex].pass = passwordInput.value;
  users[currentUserIndex].email = emailInput.value;
  saveData();
  cancelUpdate();
}
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
function cancelUpdate() {
  resetForm();
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
}

function showUpdateUser(index) {
  currentUserIndex = index;
  passwordInput.value = users[index].password;
  emailInput.value = users[index].email;
  updateBtn.style.display = "inline";
  cancelBtn.style.display = "inline";
}
function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  getUsers();
}

function deleteUser(index) {
  users.splice(index, 1);
  saveData();
}
function resetForm() {
  emailInput.value = "";
  passwordInput.value = "";
}

function resetSignup() {
  signupName.value ="";
  signupEmail.value ="";
  signUpPassword.value ="";
}
signUpButton.addEventListener("click",function(event){
  event.preventDefault();
  createUser();
  

});
cancelBtn.addEventListener("click", cancelUpdate);
updateBtn.addEventListener("click", updateUser);
LoginButton.addEventListener("click",function(event){
  event.preventDefault();
  loginUser();
  

});