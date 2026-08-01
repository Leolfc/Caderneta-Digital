const form = document.querySelector("form");
const inputNameClient = document.querySelector("#client");
const valorCliente = document.querySelector("#value");
const section = document.querySelector(".container_value");
const buttonSearch = document.querySelector(".search");
const inputSearch = document.querySelector("#search_input");
const buttonEdit = document.querySelector(".edit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const div = document.createElement("div");
  div.classList.add("container_dados_client");
  div.innerHTML = `
 
            <h3>${inputNameClient.value}</h3>
            <span>Valor a ser pago: R$ ${valorCliente.value}</span>
            <button class="edit">Editar</button>
        
  `;

  if (inputNameClient.value === "" || valorCliente.value === "") {
    return alert("Digite nome ou valor😉");
  }

  section.appendChild(div);
  inputNameClient.value = "";
  valorCliente.value = "";
});

buttonSearch.addEventListener("click", () => {
  const termoBusca = inputSearch.value.toLowerCase().trim();
  const clientes = document.querySelectorAll("h3");
  clientes.forEach((cliente) => {
    if (cliente.textContent.includes(termoBusca)) {
      cliente.parentElement.style.display = "flex";
    } else {
      cliente.parentElement.style.display = "none";
    }
  });
});
function clock() {
  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes()
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

console.log(buttonEdit);
