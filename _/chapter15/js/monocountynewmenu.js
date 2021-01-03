// JavaScript Document
$(document).ready(function(){

// Here comes the owl piece

$("#owl-feature-banner").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true

  });

	
$("#mainmenu").on("click", "a.spa", function(e){

newhtml = $(this).attr("href").split('/').pop();
newtitle = $(this).text();

e.preventDefault();
updateContent(newhtml);



});

function updateContent(newhtml) {
  // alert(newhtml); 
  var loadfile = "./foundation5/content/" + newhtml; 
  
   $('#varicontent').load(loadfile, function(data) {
  
 $(document).foundation();


});
   
   
    }

window.addEventListener('popstate', function(event) {
//alert('popstate fired!');

 if (event.state){
 updateContent(event.state.content);}
 else{

 ;
  
  }
});	



});

