import { addNode, runCola, connect } from "./moduls.js";

const inputId = document.getElementById("idIn");
const buttonId = document.getElementById("addId");
buttonId.addEventListener("click", () => {
  const value = inputId.value;

  addNode(value);
  runCola();
});

const formConnect = document.getElementById("connect");

formConnect.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formConnect);
  const name = formData.get("name");
  const source = formData.get("source");
  const target = formData.get("target");
  connect(name, source.toString(), target.toString());
  runCola();
});
