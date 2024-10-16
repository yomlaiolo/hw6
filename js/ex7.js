const sum = () => {
  const output = document.getElementById("content");
  const a = prompt("Enter a number");
  const b = prompt("Enter another number");

  if (isNaN(a) || isNaN(b)) {
    output.innerHTML = `<b style="color: red;">Error!</b> You must enter integers. You entered "${a}" and "${b}". Try again.`;
    return;
  }

  const sum = parseInt(a) + parseInt(b);
  output.innerHTML = `${a} + ${b} = <b style="color: red;">${sum}</b>`;
};

sum();
