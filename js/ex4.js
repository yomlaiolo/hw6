const addLink = () => {
  const link = document.createElement("a");
  link.href = "https://www.csulb.edu/college-of-business";
  link.textContent = "College Of Business";

  const li = document.createElement("li");
  li.appendChild(link);

  const csulb = document.getElementById("csulb");
  csulb.after(li);
};

addLink();
