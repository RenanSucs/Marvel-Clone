(function(){
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slides");
      var slice = document.getElementsByClassName("slice");

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

var marvel = {
  render:function(){
    var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=06c09e8167a2cb86ee2c7eca9a45ce1f&hash=9da92116e899fdefa953696380d6db51";
    var marvelCharacter = document.getElementById('featured-characters');
    $.ajax({
      url: url,
      type: "GET",
     success: function(data){
      var string = "";
      

        for(var i = 0; i<data.data.results.length;i++){
          var element = data.data.results[i];
          console.log(element.name);
          string += "<a href='#'>";
          string += "<div class='card-thumb-caracters'>";
          string += "<figure class='img-wrapper'>";
          string += "<img src='img/character_captain.jpg'>";
          string += "</figure>";
          string += "</div>";
          string += "<div class='is-sliding-caracters'>";
          string += "<p class='card-headline'>"+element.name+"</p>";
          string += "</div>";
        }
        marvelCharacter.innerHTML = string;
     },
     error: function(){
      console.log("So sorry!");
     }
    });
  }
};
marvel.render();