export function initCheckboxStep4() {
  const itens = document.querySelectorAll("#step4 .item");

  itens.forEach((item) => {
    const checkbox = item.querySelector("input[type='checkbox']");
    const img = item.querySelector("img");

    img.addEventListener("click", () => {
      checkbox.checked = !checkbox.checked;
      atualizarSelecao(itens);
    });

    checkbox.addEventListener("change", () => {
      atualizarSelecao(itens);
    });
  });
}

function atualizarSelecao(itens) {
  itens.forEach((item) => {
    const checkbox = item.querySelector("input[type='checkbox']");
    const img = item.querySelector("img");

    if (checkbox.checked) {
      img.classList.add("selecionado");
    } else {
      img.classList.remove("selecionado");
    }
  });
}
