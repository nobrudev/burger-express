import { initCheckboxStep4 } from "./checkbox-step4.js";

function nextStep(step) {
  document.querySelectorAll("div[id^='step']").forEach((div) => {
    div.classList.remove("show");
    div.classList.add("hidden");
  });

  const atual = document.getElementById("step" + step);
  atual.classList.remove("hidden");

  setTimeout(() => {
    atual.classList.add("show");
  }, 10);
}

function validarNome() {
  const nome = document.getElementById("nomeCliente").value.trim();
  if (nome.length > 0) {
    window.nomeCliente = nome;
    nextStep(3);
  } else {
    alert("Por favor, digite seu nome.");
  }
}

function finalizarPedido() {
  const itens = Array.from(
    document.querySelectorAll("#step4 input:checked"),
  ).map((el) => el.value);

  const entrega = document.querySelector(
    "#step3 input[name='receber']:checked",
  );
  const formaEntrega = entrega
    ? entrega.value
    : "Nenhuma forma de entrega selecionada";

  const pedidoResumo = document.getElementById("pedidoResumo");
  pedidoResumo.innerHTML = "";
  if (itens.length) {
    itens.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      pedidoResumo.appendChild(li);
    });
  } else {
    pedidoResumo.innerHTML = "<li>Nada selecionado</li>";
  }

  document.getElementById("entregaResumo").innerText =
    `${window.nomeCliente} - ${formaEntrega}`;

  nextStep(5);
}

function confirmarPedido() {
  alert(
    `Pedido confirmado! Obrigado, ${window.nomeCliente}, por comprar no Burguer Express.`,
  );
  nextStep(1);
}

document.addEventListener("DOMContentLoaded", () => {
  initCheckboxStep4();
});
