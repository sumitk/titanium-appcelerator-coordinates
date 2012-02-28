exports.returnCoordinates = function(search, callback)
{
	var coords = {};

	var xhr = Titanium.Network.createHTTPClient({
		timeout: 30000
	});
	
	xhr.onload = function(e) 
	{	
		var response = JSON.parse(this.responseText);

		if(response.status === "OK" && response.results !== undefined && response.results.length > 0) 
		{
			coords.latitude = response.results[0].geometry.location.lat;
			coords.longitude = response.results[0].geometry.location.lng;

			callback(coords);
		};
	}

	xhr.onerror = function(e) {
		coords.error = true;
		callback(coords);
	};

	var URLxhr = "http://maps.google.com/maps/api/geocode/json?address=" + Ti.Network.encodeURIComponent(search);
	URLxhr += "&sensor=" + (Titanium.Geolocation.locationServicesEnabled === true);

	xhr.open("GET", URLxhr);
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhr.send();
}