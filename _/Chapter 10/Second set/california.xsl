<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" encoding="UTF-8"/>
<xsl:template match="/">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet  [
	<!ENTITY nbsp   "&#160;">
	<!ENTITY copy   "&#169;">
	<!ENTITY reg    "&#174;">
	<!ENTITY trade  "&#8482;">
	<!ENTITY mdash  "&#8212;">
	<!ENTITY ldquo  "&#8220;">
	<!ENTITY rdquo  "&#8221;"> 
	<!ENTITY pound  "&#163;">
	<!ENTITY yen    "&#165;">
	<!ENTITY euro   "&#8364;">
]>
<?xml-stylesheet type="text/css" href="california.css"?>
<californiapeople>
	<person id="1">
		<name>Adams</name>
		<first>Ansel</first>
		<profession>photographer</profession>
		<born>San Francisco</born>
		<photograph/>
	</person>
	<person>
		<name>Muir</name
		><first>John</first>
		<profession>photographer</profession>
		<born>Scotland</born>
	</person>
	<person>
		<name>Schwarzenegger</name>
		<first>Arnold</first>
		<profession>governator</profession>
		<born>Germany</born>
	</person>
	<person>
		<name>Rowell</name>
		<first>Galen</first>
		<profession>photographer</profession>
		<born>Oakland CA</born>
	</person>
	<person>
		<name>Wellens</name>
		<first>Paul</first>
		<profession>author</profession>
		<born>Antwerp            Belgium</born>
	</person>
</californiapeople>
</xsl:template>
</xsl:stylesheet>