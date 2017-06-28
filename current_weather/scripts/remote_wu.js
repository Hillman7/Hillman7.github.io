// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API

    function getData(lat, long){
        $.ajax({
            url:"https://api.wunderground.com/api/b312dac5c9192176/geolookup/conditions/q/" + lat + "," + long + ".json",
            dataType : "jsonp",
            success : function(parsed_json) {
                var location = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                var state = parsed_json['location']['state'];
                var summary = parsed_json['current_observation']  ['weather'];
                var wind = parsed_json['current_observation']['wind_mph'];
                var precep = parsed_json['current_observation']['precip_today_in'];
                var feel = parsed_json['current_observation']['feelslike_f'];
                var update = parsed_json['current_observation']['observation_time'];
                $('#miniHeader').html(location + ',' + ' ' + state);
                $('#Temp').html(Math.round(temp_f) + "&#176");
                $('#summary').html(summary);
                $('#wind').html("Wind in MPH:" + ' ' + wind);
                $('#precipitation').html("The Precipitation today is " + precep);
                $('#feel').html('Today feels like:' + ' ' + Math.round(feel) + '&#176');
         //       $('#update').html(update);
        //        $("#cover").fadeOut(250);

            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});
