<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>June Lake Gallery</title>
<link href="styles/practical.css" rel="stylesheet" type="text/css" media="screen"/>

</head>
	
    <?php

$xmlfile = "practical.xml";

if (!file_exists($xmlfile)) {
   
    exit('Failed to open practical.xml.');
}
$xml =  simplexml_load_file($xmlfile);


?>
<body>
	<div id="mysite">
 <div id="overview">
 <h1>
<?php
echo $xml->title;
?> 
 </h1>
 <p>
<?php
echo $xml->overview;
?> 
</p>
</div>	
<div id="gallery">
<?php    
 $photos = $xml->xpath("//photo"); 
 $photocount = count($photos);
 $count = 0;
 while ($count < $photocount) {
	 
$htmlstring = '<div class="storybook"><div class="smallmat"><div class="simage"><a href="';
$htmlstring .= $photos[$count]->largeimg;
$htmlstring .= '"><img class="sphoto" src="';
$htmlstring .= $photos[$count]->smallimg;
$htmlstring .= '" title="';
$htmlstring .=  $photos[$count]->caption;
$htmlstring .= '"></img></a></div><div class="scaption">';
$htmlstring .=  $photos[$count]->scaption;
$htmlstring .= '</div></div><div class="story">';
$htmlstring .=  $photos[$count]->story;
$htmlstring .=  '</div></div>';
    
   
echo $htmlstring;	 
	 
	 
$count++;	 
 }
   
 ?>   
</div>    
</div>



</body>


</html>
