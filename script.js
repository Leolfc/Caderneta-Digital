const form = document.querySelector("form");
const inputNameClient = document.querySelector("#client");
const valorCliente = document.querySelector("#value");
const section = document.querySelector(".container_value");
const buttonSearch = document.querySelector(".search");
const inputSearch = document.querySelector("#search_input");
const buttonEdit = document.querySelector(".edit");
const containerDadosClient = document.querySelector(".container_dados_client");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const div = document.createElement("div");
  div.classList.add("container_dados_client");
  const numberFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(valorCliente.value);

  div.innerHTML = `
 
            <h3>${inputNameClient.value}</h3>
            <span>Valor a ser pago: ${numberFormat}</span>
            <button class="edit">Editar</button>
        
  `;
  containerDadosClient.style.display = "none";

  if (inputNameClient.value === "" || valorCliente.value === "") {
    return alert("Digite nome ou valor😉");
  }

  section.appendChild(div);
  inputNameClient.value = "";
  valorCliente.value = "";
});

buttonSearch.addEventListener("click", () => {
  const termoBusca = inputSearch.value.toLowerCase();
  const clientes = document.querySelectorAll("h3");
  clientes.forEach((cliente) => {
    if (cliente.textContent.includes(termoBusca)) {
      cliente.parentElement.style.display = "flex";
      containerDadosClient.style.display = "none";
    } else {
      cliente.parentElement.style.display = "none";
    }
  });
});
function clock() {
  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();
  const day = data.toLocaleString("pt-BR", {
    dateStyle: "short",
  });

  const divClock = document.querySelector(".clock");
  divClock.textContent = `
  ${day}
  ${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
  clock();
}, 1000);

buttonEdit.addEventListener("click", (event) => {
  alert("Você clicou no botão Editar!");
});
