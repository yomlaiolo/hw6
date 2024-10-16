const addTable = () => {
  const table = document.createElement("table");
  table.border = "1";

  for (let i = 1; i <= 12; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = i;
    tr.style.textAlign = "center";
    tr.appendChild(td);
    table.appendChild(tr);
  }

  const div = document.getElementById("output");
  div.appendChild(table);
};

addTable();
