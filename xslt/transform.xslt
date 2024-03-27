<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
  <xsl:template match="/">
    <html>
      <head>
      </head>
      <body>
        <div class="opcions">
          <label for="selectDiv">Previsió del temps de: </label>
          <select id="selectDiv" onchange="mostrarDivSeleccionado()">
            <!-- Opciones del menú se generarán dinámicamente en el script -->
          </select>
        </div>        
        <xsl:apply-templates select="//comarca"/>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="comarca">
    <div id="{@id}" class="hidden comarca">
      <h2 class="hidden"><xsl:value-of select="@nomCOMARCA"/></h2>
      <table>
        <tr>
          <th>Data</th>
          <th class="ico">Matí</th>
          <th class="ico">Tarda</th>
          <th>Temp. Max.</th>
          <th>Temp. Min.</th>
          <th>Prob. calamarsa mati</th>
          <th>Prob. calamarsa tarda</th>
          <th>Prob. plujes mati</th>
          <th>Prob. plujes tarda</th>
          <th>Intensidat plujes mati</th>
          <th>Intensidat plujes tarda</th>
          <th>Precipitació acumulada mati</th>
          <th>Precipitació acumulada tarda</th>
        </tr>
        <xsl:for-each select="../prediccio[@idcomarca = current()/@id]">
          <xsl:apply-templates select="variable"/>
        </xsl:for-each>
      </table>
      <br/>
    </div>        
  </xsl:template>
  
  <xsl:template match="variable">
    <tr>
      <td class="arreglar"><xsl:value-of select="@data"/></td>
      <td class="ico"><xsl:value-of select="/smc/simbol[concat(@id, '.png') = current()/@simbolmati]/@nomsimbol"/>
      </td>
      <td class="ico"><xsl:value-of select="/smc/simbol[concat(@id, '.png') = current()/@simboltarda]/@nomsimbol"/></td>
      <td><xsl:value-of select="@tempmax"/>º</td>
      <td><xsl:value-of select="@tempmin"/>º</td>
      <td><xsl:value-of select="/smc/calamarsa[@id = current()/@probcalamati]/@nomprobcalamati"/></td>
      <td><xsl:value-of select="/smc/calamarsa[@id = current()/@probcalatarda]/@nomprobcalatarda"/></td>
      <td><xsl:value-of select="/smc/precipitacio[@id = current()/@probprecipitaciomati]/@nomprobprecipitaciomati"/></td>
      <td><xsl:value-of select="/smc/precipitacio[@id = current()/@probprecipitaciotarda]/@nomprobprecipitaciotarda"/></td>
      <td><xsl:value-of select="/smc/intensitat[@id = current()/@intensitatprecimati]/@nomintensitatprecimati"/></td>
      <td><xsl:value-of select="/smc/intensitat[@id = current()/@intensitatprecitarda]/@nomintensitatprecitarda"/></td>
      <td><xsl:value-of select="/smc/acumulacio[@id = current()/@precipitacioacumuladamati]/@nomprecipitacioacumuladamati"/></td>
      <td class="arreglar"><xsl:value-of select="/smc/acumulacio[@id = current()/@precipitacioacumuladatarda]/@nomprecipitacioacumuladatarda"/></td>
    </tr>
  </xsl:template>
  
</xsl:stylesheet>
