const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
const validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let currentUserIndex = null;
let users = JSON.parse(localStorage.getItem("users")) || [];
getUsers();

function createUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  let validUser = true;
  if (name.length < 3) {
    nameInput.style.borderColor = "red";
    validUser = false;
  }
  if (!validRegex.test(email)) {
    emailInput.style.borderColor = "red";
    validUser = false;
  }
  let id = findId();
  if (validUser) {
    const newUser = {
      name,
      email,
      id,
    };
    users.push(newUser);
    resetForm();
    saveData();
  }
}


// pour générer un identifiant unique pour les utilisateurs.
// Elle commence avec une valeur initiale id de 1 et
// vérifie si cet id existe déjà dans le tableau users.
// Si c'est le cas, elle incrémente id et vérifie à nouveau jusqu'à ce qu'elle trouve un id non utilisé,
//  puis renvoie cet id.

// Voici une explication de son fonctionnement :
// Initialise id à 1.
// Utilise la méthode map() pour créer un tableau de valeurs id à partir du tableau users, puis utilise indexOf() pour vérifier si l'id actuel existe dans ce tableau.
// Si l'id est trouvé dans le tableau (indexOf() renvoie une valeur différente de -1), incrémente id et répète l'étape 2 jusqu'à ce qu'un id unique soit trouvé.
// Renvoie l'id unique.

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
    const nameTd = document.createElement("td");
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
    nameTd.innerText = user.name;
    emailTd.innerText = user.email;

    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(actionTd);
    tableBody.appendChild(tr);
  });
}

function updateUser() {
  users[currentUserIndex].name = nameInput.value;
  users[currentUserIndex].email = emailInput.value;
  saveData();
  cancelUpdate();
}

function cancelUpdate() {
  resetForm();
  addBtn.style.display = " inline";
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
}

function showUpdateUser(index) {
  currentUserIndex = index;
  nameInput.value = users[index].name;
  emailInput.value = users[index].email;
  addBtn.style.display = " none";
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
  nameInput.value = "";
}
addBtn.addEventListener("click", createUser);
cancelBtn.addEventListener("click", cancelUpdate);
updateBtn.addEventListener("click", updateUser);
