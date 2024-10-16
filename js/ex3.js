const changeParagraphs = () => {
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((para) => {
    para.style.backgroundColor = "yellow";
    para.style.fontWeight = "bold";
  });
};

changeParagraphs();
