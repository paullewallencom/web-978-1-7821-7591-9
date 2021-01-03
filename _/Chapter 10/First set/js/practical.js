// JavaScript Document
$(document).ready (function () {
							 
 alert("jQuery");
$.post( "./practicalajaxfetchXML.php", { xmlfile: "practical" }, function( data ) {
alert(data);
var dummy = '<div id="overview"><h1>June Lake</h1></div>';
var xml = $(data);
alert (xml);
var overview = xml.find("overview");
alert(overview);
alert(overview.text);
alert("switching gears");
var overview = data.find("overview");
alert(overview);
alert(overview.text);
$('#mysite').html(dummy);
}, "xml");
});