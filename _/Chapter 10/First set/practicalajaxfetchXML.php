<?php

$xmlfile = $_POST['xmlfile'].'.xml';
//echo $xmlfile;
$xml =  simplexml_load_file($xmlfile);
echo $xml->asXML();
?>