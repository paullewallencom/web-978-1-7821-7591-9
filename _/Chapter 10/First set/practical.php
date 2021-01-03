<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>June Lake Gallery</title>
<link href="styles/practical.css" rel="stylesheet" type="text/css" media="screen"/>
</head>
<body>
<div id="mysite">
<?php
$xslt = new XSLTProcessor;
$xmlfile = "practical.xml";
$xslfile = "practical.xsl";
if (!file_exists($xmlfile)) {
   
    exit('Failed to open practical.xml.');
}

$xml = new DOMdocument;
$xml->load($xmlfile);
$xsl = new DOMdocument;
$xsl->load($xslfile);
$xslt->importStyleSheet($xsl);
printf("%s",$xslt->transformToXML($xml));
?>
</div>
</body>
</html>
