const loading = document.createElement("div");
const imgLoad = document.createElement("div");
const body = document.querySelector("body");
loading.classList.add("load");
imgLoad.classList.add("imgLoad");
body.appendChild(loading);
loading.appendChild(imgLoad);

window.addEventListener("load", () => {
  loading.style.display = "none";
});
