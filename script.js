$("button").click(function() {
    var weather = $(".weather").val();
        if(weather=== "rainy"){
            $("body").html("Bring an umbrella");
        } else {
            $("body").html("That's not it, Try Again!");
        }      
});