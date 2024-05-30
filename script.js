window.addEventListener('load', function() {
    var loader = document.getElementById('loader-container');
    loader.style.display = 'none';
  });


  // JavaScript to toggle the navigation links when the hamburger button is clicked
document.getElementById('hamburger').addEventListener('click', function() {
  var navbar = document.getElementById('navbar');
  var boxes = navbar.getElementsByClassName('box1-right');
  for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].style.display === 'none' || boxes[i].style.display === '') {
          boxes[i].style.display = 'block';
      } else {
          boxes[i].style.display = 'none';
      }
  }
});
