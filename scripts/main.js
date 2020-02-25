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

  setTimeout(function() {
    task.querySelector(".wrap").className = "fade2";
  }, 200);

  // Haciendo clic en el botón de edición de la tarea agregada

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
    } else {
      alert("Error: Formato incorrecto");
    }
  });

  // Haciendo clic en el ícono del cesto de basura para borrar una tarea

  let trash = task.querySelector(".fa-trash-alt");
  trash.addEventListener("click", function() {
    event.preventDefault();
    let conf = confirm("¿Está seguro de que quiere borrar la tarea?");
    if (conf == true) {
      task.classList.add("fade");
      setTimeout(function() {
        task.remove();
      }, 1000);
    } else {
      ("");
    }
  });

  // Haciendo clic en el ícono del check para declarar completa una tarea

  let completed = task.querySelector(".fa-check-circle");
  completed.addEventListener("click", function() {
    event.preventDefault();
    let resul = confirm("¿Está seguro de haber completado la tarea?");
    if (resul == true) {
      let task2 = document.createElement("article");
      task2.innerHTML = `<div class='fade2'>
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
      task.classList.add("fade");
      setTimeout(function() {
        task.remove();
      }, 1000);

      let trash2 = task2.querySelector(".fa-trash-alt");
      trash2.addEventListener("click", function() {
        event.preventDefault();
        let conf = confirm("¿Está seguro de que quiere borrar la tarea?");
        if (conf == true) {
          task2.classList.add("fade");
          setTimeout(function() {
            task2.remove();
          }, 1000);
        } else {
          ("");
        }
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
  botonincompletos.classList.add("isactive");
  botoncompletados.classList.remove("isactive");
});
