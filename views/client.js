function runCode(id, input) {
    document.getElementById(id).innerHTML = document.getElementById(input).value;
  }
  
  
  function runCode2(id, input) {
    document.getElementById(id).innerHTML = "Hi " + document.getElementById(input).value;
  }
  function show_hide (id) {
    document.getElementById(id).style.display;
    if(document.getElementById(id).style.display == "none") {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none"
    }
  }