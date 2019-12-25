const animation = document.querySelectorAll(".section__svg");
animation.forEach(item => {
  item.onmouseout = function(event) {
    item.classList.add("mouseout");
  }
})
