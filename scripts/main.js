// Fecha para el título

let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

// Variables
const form = document.querySelector("form");
let entry = document.getElementById("entry");
const taskscontent = document.getElementById("incompletetasks-content");
const comptaskscontent = document.getElementById("completetasks-content");

// Función principal

form.addEventListener("submit", function() {
  event.preventDefault();
  let task = document.createElement("article");
  task.innerHTML = `<div class='wrap'>
                      <div class="checkytexto">
                          <i class='fas fa-check-circle'></i>
                               <span class="texto">${entry.value}</span>
                      </div>
                      <div><span class="editar">editar</span>
                          <i class="far fa-trash-alt"></i>
                      </div>
                    </div>`;
  taskscontent.appendChild(task);

  let editar = task.querySelector(".editar");
  editar.addEventListener("click", function() {
    let newedit = prompt("Ingrese el nuevo nombre de la tarea");

    if (newedit == null) {
       return;
    } 

    function hasWhiteSpace(newedit) {
      return /^\s+$/.test(newedit);
    }

    if (hasWhiteSpace(newedit) == false && newedit !== "") {
      task.querySelector(".texto").textContent = newedit;
    } 
             
    else {
      alert("Error: Formato incorrecto");
    }
    console.log (newedit)
  });

  let trash = task.querySelector(".fa-trash-alt");
  trash.addEventListener("click", function() {
    event.preventDefault();
    confirm("¿Está seguro que quiere borrar la tarea?")
      ? this.parentNode.parentNode.parentNode.remove()
      : "";
  });

  let completed = task.querySelector(".fa-check-circle");
  completed.addEventListener("click", function() {
    event.preventDefault();
    let resul = confirm("¿Está seguro de haber completado la tarea?");
    if (resul == true) {
      let task2 = document.createElement("article");
      task2.innerHTML = `<div class='wrap'>
    <div class="checkytexto">
        <i class='fas fa-check-circle'></i>
             <span class="texto">${
               task.querySelector(".texto").textContent
             }</span>
    </div>
    <div>
        <i class="far fa-trash-alt"></i>
    </div>
  </div>`;
      comptaskscontent.appendChild(task2);
      this.parentNode.parentNode.parentNode.remove();

      let trash2 = task2.querySelector(".fa-trash-alt");
      trash2.addEventListener("click", function() {
        event.preventDefault();
        confirm("¿Está seguro que quiere borrar la tarea?")
          ? this.parentNode.parentNode.parentNode.remove()
          : "";
      });
    } else {
      ("");
    }
  });

  form.reset();
});

// Botones de tareas completas e incompletas

let botoncompletados = document.getElementById("botoncompletados");
botoncompletados.addEventListener("click", function() {
  event.preventDefault();
  taskscontent.style.display = "none";
  comptaskscontent.style.display = "block";
  botoncompletados.classList.add("isactive");
  botonincompletos.classList.remove("isactive");
});

let botonincompletos = document.getElementById("botonincompletos");
botonincompletos.addEventListener("click", function() {
  event.preventDefault();
  taskscontent.style.display = "block";
  comptaskscontent.style.display = "none";
  botonincompletos.classList.toggle("isactive");
  botoncompletados.classList.remove("isactive");
});
