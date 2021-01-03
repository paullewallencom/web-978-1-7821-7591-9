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

// This part takes care of loading the alternate HTML in the pseudo-dynamic site
$("#mainmenu").on("click", "a.spa", function(e){


newhtml = $(this).attr("href").split('/').pop();
newtitle = $(this).text();
// This is to not go to the static site
e.preventDefault();

updateContent(newhtml);

history.pushState({content:newhtml}, newtitle, "#"+ newhtml);


});


$("#offcanvasmenu").on("click", "a.spa", function(e){

// This is in case we want to load content for the offcanvas menu
// Right now we used static links to useful sites
newhtml = $(this).attr("href").split('/').pop();
newtitle = $(this).text();
// This is to not go to the static site
e.preventDefault();

updateContent(newhtml);

history.pushState({content:newhtml}, newtitle, "#"+ newhtml);


});


function updateContent(newhtml) {
  
  var loadfile = "./foundation5/content/" + newhtml; 

   $('#varicontent').load(loadfile, function(data) {
  

 $(document).foundation();

});
   
   
    }

window.addEventListener('popstate', function(event) {


 if (event.state){
 updateContent(event.state.content);}
 else{

  
  }
});	



});

