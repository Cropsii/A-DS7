import cytoscape from "https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.33.1/cytoscape.esm.mjs";

import cytoscapeCola from "https://cdn.jsdelivr.net/npm/cytoscape-cola@2.5.1/+esm";

cytoscape.use(cytoscapeCola);
import { runCola } from "./moduls.js";

console.log((82 % 24) + 1);
window.cy = cytoscape({
  container: document.getElementById("cy"),
  style: [
    {
      selector: "node",
      style: {
        label: "data(label)",
      },
    },
    {
      selector: "edge",
      style: {
        label: "data(id)",
      },
    },
  ],
});
cy.add([
  {
    data: { id: "0", label: "0" },
  },
  {
    data: { id: "1", label: "1" },
  },
  {
    data: { id: "2", label: "2" },
  },
  {
    data: { id: "3", label: "3" },
  },
  {
    data: { id: "4", label: "4" },
  },
  {
    data: { id: "5", label: "5" },
  },
  {
    data: { id: "6", label: "6" },
  },
  {
    data: { id: "7", label: "7" },
  },

  { data: { id: "e0", target: "0", source: "1" } },
  { data: { id: "e1", target: "2", source: "0" } },
  { data: { id: "e2", target: "3", source: "1" } },
  { data: { id: "e3", target: "2", source: "4" } },
  { data: { id: "e4", target: "3", source: "4" } },
  { data: { id: "e5", target: "4", source: "5" } },
  { data: { id: "e6", target: "5", source: "6" } },
  { data: { id: "e7", target: "0", source: "6" } },
  { data: { id: "e8", target: "1", source: "7" } },
  { data: { id: "e9", target: "2", source: "6" } },
]);
setTimeout(() => cy.fit(), 1100);
const fitBtn = document.getElementById("fitBtn");
if (fitBtn) {
  fitBtn.onclick = () => cy.fit(10);
}

runCola();
