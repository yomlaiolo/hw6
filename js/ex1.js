const bodyNodes = () => {
  const body = document.body;
  const bodyNodes = body.childNodes;
  bodyNodes.forEach((node) => {
    console.log(node);
  });
};

bodyNodes();
