<?xml version="1.0"?><!-- DWXMLSource="tiogapass.xml" -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:output method="html"/>
          
  <xsl:template match="/">
  <div id="overview">
   		<xsl:apply-templates select="/photocollection"/>
   </div>
   <div id="gallery">
  
   <xsl:apply-templates select="/photocollection/photo"/>
    </div>
  </xsl:template>
  
  <xsl:template match="photocollection">
  <h1>
  <xsl:value-of select="title"/>
  </h1>
  <p>
  <xsl:value-of select="overview"/>
  </p>
  </xsl:template>
  
  <xsl:template match="photo">
  	<div class="storybook">
    <div class="smallmat">
    <div class="simage">
    <a>
    <xsl:attribute name="href">
    <xsl:value-of select="largeimg"/>
    </xsl:attribute>
    <img class="sphoto">
    <xsl:attribute name="src">
    <xsl:value-of select="smallimg"/>
    </xsl:attribute>
    
    <xsl:attribute name="title">
    <xsl:value-of select="caption"/>
    </xsl:attribute>
    </img>
    </a>
    </div>
    <div class="scaption">
    <xsl:value-of select="scaption"/>
    </div>
    </div>
    <div class="story">
    <xsl:value-of select="story"/>
    </div>
    </div>
  </xsl:template>
</xsl:stylesheet>
