window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })


  function toggleMenu(){
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  }

  function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
