// JavaScript Document
$(document).ready(function(){

// Here comes the owl piece

$('#monotitle').css("color","#999");

alert("enhancetest.js");
	
$("#main-menu").on("click", "a.spa", function(e){
	




updateContent(newhtml);

history.pushState({content:newhtml}, newtitle, "#"+ newhtml);


});

function updateContent(newhtml) {
  // alert(newhtml); 
  var loadfile = "./foundation5/content/" + newhtml; 
//  alert(loadfile);
   $('#varicontent').load(loadfile, function(data) {
  //alert(data );
 
// history.pushState(data, e.target.textContent, topic);

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

