const input = document.getElementById("pesquisa");
let list = document.querySelectorAll(".produto");
function pesquisar() {
  let pesquisa = input.value.toLowerCase();
  if (pesquisa == "") list.forEach((e) => e.classList.remove());
  try {
    for (let i = 0; i <= list.length; i++) {
      if (
        !list[i].children[1].children[0].innerHTML
          .toLowerCase()
          .includes(pesquisa)
      ) {
        list[i].classList.add("invisivel");
      } else {
        list[i].classList.remove("invisivel");
      }
    }
  } catch {}
}
