export function addNode(id) {
  cy.add({ group: "nodes", data: { id: id, label: id } });
}
export function deleteNode(id) {

}
export function connect(name, source, target) {
  cy.add({
    group: "edges",
    data: { id: name, source: source, target: target },
  });
}

export function runCola() {
  cy.layout({
    name: "cola",
    fit: false,
    avoidOverlap: true,
    infinite: true,
  }).run();
}

export function parseMatrix(root) {
  const nodes = root.nodes().map((node) => node.id());
  const edges = root.edges().map((edge) => edge.data());
  const res = Array.from({ length: nodes.length }, () =>
    Array(edges.length).fill(0)
  );
  edges.forEach((edge, j) => {
    const i1 = nodes.indexOf(edge.source);
    const i2 = nodes.indexOf(edge.target);
    if (i1 !== -1) res[i1][j] = 1;
    if (i2 !== -1) res[i2][j] = 1;
  });
  return res;
}
