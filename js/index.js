(function(){
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slides");
      var slice = document.getElementsByClassName("slice");
      var sectionSlide = document.getElementById("sectionSlide");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
    
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < slice.length; i++) {
        slice[i].className = slice[i].className.replace(" active-slice", "");
      }
      
      
      slides[slideIndex-1].style.display = "block";  
      slice[slideIndex-1].className += " active-slice";
      setTimeout(showSlides, 5000);
    }
})();

/* <style type="text/css">
#d {
    height: 100px;
    width: 100px;
    border: 1px solid red;
    margin-top: -200px;
    transition: margin-top 2s;
}

#d.shown {
    margin-top: 100px;
}
  </style>
</head>
<body>
  <button id="b">Toggle slide</button>
  <div id="d">Weeeeeeee</div>

  <script type="text/javascript">
  var b = document.getElementById('b');
  var d = document.getElementById('d');
  b.addEventListener('click', function() {
      d.classList.toggle('shown');
  });
  </script>*/