function myFunction(){
    var element = document.body;
    if (element.classList.contains("dark-mode")){
      element.classList.remove("dark-mode");
      element.classList.add("pink-mode");
    } else if (element.classList.contains("pink-mode")) {
      element.classList.remove("pink-mode");
      // add any other classes you want to toggle
    } else {
      element.classList.add("dark-mode");
    }
  }
  