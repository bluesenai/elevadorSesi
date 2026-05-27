let carga = 0;

const peso = document.getElementById("peso");
const alerta = document.getElementById("alerta");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const resetBtn = document.getElementById("resetBtn");


function atualizarSistema(){

  peso.textContent = carga;

  
  if(carga >= 400){

    alerta.style.display = "flex";

    addBtn.disabled = true;

  } else {

    alerta.style.display = "none";

    addBtn.disabled = false;
  }
}

addBtn.addEventListener("click", () => {

  carga += 100;

  atualizarSistema();

});


removeBtn.addEventListener("click", () => {

  if(carga > 0){

    carga -= 100;
  }

  atualizarSistema();

});


resetBtn.addEventListener("click", () => {

  carga = 0;

  atualizarSistema();

});