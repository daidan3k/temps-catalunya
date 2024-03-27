// URL del documento XML externo
var xmlUrl = 'https://static-m.meteo.cat/content/opendata/ctermini_comarcal.xml';

// Crear una nueva instancia de XMLHttpRequest para cargar el documento XML
var xmlRequest = new XMLHttpRequest();
xmlRequest.open('GET', xmlUrl, true);

// Configurar el tipo de respuesta esperado
xmlRequest.responseType = 'document';

// Manejar la carga del documento XML
xmlRequest.onload = function () {
  if (xmlRequest.status >= 200 && xmlRequest.status < 400) {
    // Éxito al cargar el documento XML
    var xmlDoc = xmlRequest.response;

    // Cargar el archivo XSLT local
    var xsltUrl = 'xslt/transform.xslt';
    var xsltRequest = new XMLHttpRequest();
    xsltRequest.open('GET', xsltUrl, true);

    // Configurar el tipo de respuesta esperado
    xsltRequest.responseType = 'document';

    // Manejar la carga del archivo XSLT
    xsltRequest.onload = function () {
      if (xsltRequest.status >= 200 && xsltRequest.status < 400) {
        // Éxito al cargar el archivo XSLT
        var xslDoc = xsltRequest.response;

        // Realizar la transformación XSLT
        var xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);
        var resultDocument = xsltProcessor.transformToDocument(xmlDoc);

        // Obtener el resultado como cadena HTML
        var resultHtml = new XMLSerializer().serializeToString(resultDocument);

        // Mostrar el resultado donde desees (por ejemplo, en un contenedor)
        document.getElementById('result-container').innerHTML = resultHtml;
        generateOptions();
        treureEspaisBuits();
      } else {
        // Error al cargar el archivo XSLT
        console.error('Error al cargar el archivo XSLT');
      }
    };

    // Manejar errores de carga del archivo XSLT
    xsltRequest.onerror = function () {
      console.error('Error de red al cargar el archivo XSLT');
    };

    // Enviar la solicitud para cargar el archivo XSLT
    xsltRequest.send();
  } else {
    // Error al cargar el documento XML
    console.error('Error al cargar el documento XML');
  }
};

// Manejar errores de carga del documento XML
xmlRequest.onerror = function () {
  console.error('Error de red al cargar el documento XML');
};

// Enviar la solicitud para cargar el documento XML
xmlRequest.send();