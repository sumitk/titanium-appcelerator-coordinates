<h1>Coordinates</h1>
<p>This module is a collection of functions to use with the Google's locations services. All functions of this module uses Google's locations services.</p>

<h1>Functions</h1>
<h2>returnCoordinates</h2>
<p>This functions returns the coordenates (latitude and longitude) from a location search (for example: Porto Alegre, Rua 24 de Outubro, Brasil)</p>
<h3>Parameters</h3>
<ul>
	<li><b>search:</b> Search text. Here you put the address that you want the coordinates.</li>
	<li><b>callback:</b> Callback function. This function will receive an object with latitude and longitude if success, and an error object (null) if an error occurred.
</ul>
<h3>Using</h3>
<pre>var latitude;
var longitude;
var returnCoordinates = require("/modules/return.coordinates").returnCoordinates;

returnCoordinates("24 de Outubro, Porto Alegre, Rio Grande do Sul, Brasil", function(e) {

	if (!e.error) {
		latitude = e.latitude;
		longitude = e.longitude;
	}

});</pre>