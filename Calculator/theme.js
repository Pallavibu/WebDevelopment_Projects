
  function myFunction(){
    var element = document.querySelector('body');
    if (element.classList.contains("dark-mode")){
      element.classList.remove("dark-mode");
      element.classList.add("pink-mode");
    } else if (element.classList.contains("pink-mode")) {
      element.classList.remove("pink-mode");
    } else {
      element.classList.add("dark-mode");
    }
  }
  