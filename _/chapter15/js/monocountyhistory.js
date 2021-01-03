// JavaScript Document
$(document).ready(function(){

// Here comes the owl piece

$("#owl-feature-banner").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

	
$("#mainmenu").on("click", "a.spa", function(e){
	
	
	
//var topic = $(this).parent().attr("id");
//alert($(this).parent().html());	
//alert($(this).attr("class"));
//alert($(this).attr("href"));

newhtml = $(this).attr("href").split('/').pop();
newtitle = $(this).text();

e.preventDefault();




updateContent(newhtml);

history.pushState({content:newhtml}, newtitle, "#"+ newhtml);


});

function updateContent(newhtml) {
  // alert(newhtml); 
  var loadfile = "./foundation5/content/" + newhtml; 
  
   $('#varicontent').load(loadfile, function(data) {
  //alert(data );
 
// history.pushState(data, e.target.textContent, topic);
 $(document).foundation();
//Holder.run();
// 
 

});
   
   
    }

window.addEventListener('popstate', function(event) {
//alert('popstate fired!');

 if (event.state){
 updateContent(event.state.content);}
 else{
// alert("stack empty");}
 //alert(location.pathname);
// oldhtml = location.pathname;
// alert(oldhtml);
// if (oldhtml == "/")
 //{
//updateContent("home.html");
 //else {


 //alert(oldhtml.split('/').pop());
//alert(location.parhname.split('/').pop());
 // updateContent(oldhtml.split('/').pop());
 ;
  
  }
});	



});

