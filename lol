var cs = document.querySelectorAll("input[type]");
cs.forEach(
  function(c){
    if (c.getAttribute("type") == "checkbox") {
      console.log(c.getAttribute("value"));
    }
  }
);
