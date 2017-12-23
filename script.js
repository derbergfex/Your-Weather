if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(function(position)
    {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
            
        $(document).ready(function()
        {
        
            $.getJSON("https://api.apixu.com/v1/current.json?key=4e48576ec88047188ee234432170308&q=" + lat + "," + long, function(json)
            {
                
                var string = JSON.stringify(json);  
                var object = JSON.parse(string);
                    
                $("#region").html(object.location.region);
                $("#temp").html("<strong>" + object.current.temp_c + "&#8451" + "</strong>");
                $("#cond").html(object.current.condition.text);
                $("#icon").html("<img src='" + object.current.condition.icon + "'>");
                $("#buttonF").html("Fahrenheit");
                $("#buttonC").html("Celsius");

                    
                $("#buttonF").on("click", function()
                {
                    $("#temp").html("<strong>" + object.current.temp_f + "&#8457" + "</strong>");
                    $("#buttonF").hide();
                    $("#buttonC").show();
                });    
                $("#buttonC").on("click", function()
                {
                    $("#temp").html("<strong>"+ object.current.temp_c + "&#8451" + "</strong");
                    $("#buttonC").hide();
                    $("#buttonF").show();
                });
                
                
            });
        });              
    });
}
