//
//
//
//
//
//
//var content = "";
//
//
//
//// Intercept the menu link clicks
//$("#navigation").on("click", "a", function (evt) {
//    evt.preventDefault();
//    // With the text value get the needed value from the weather.json file
//    var jsonCity = $(this).text(); // Franklin, etc...
////    console.log(jsonCity);
//    $.ajax({
//        url: "/Hillman7.github.io/acme/js/acme.json"
//        , dataType: "json"
//        , success: function (content) {
//           // console.log(content);
//            console.log(content['Anvils']['name']);
//
//
//            // grab the home info from json file.
//            var anvil = content['Anvils']['name'];
//            console.log(anvil);
//
//
//            // grab the explosive info
//
//
//
//
//
//            // grab the decoys
//
//
//
//
//
//            // grab the traps.
//
//
//
//
//
//
//
//
//
//
//
//
//
//// put it in.
//document.getElementById('').innerHTML = ;
//
//
//
//
//
//        }
//    });
//});



/* When the page loads put in the nav bar. */








var data = "";

window.onload = nav();
function nav(){
    $.ajax({
        url: "/Hillman7.github.io/acme/js/acme.json"
        , dataType: "json"
        , success: function (data) {


            // lets see the objects
                      console.log(data);



            // grab the Anvil info from json file.
            var anvil = data['Anvils']['name'];
            console.log(anvil);






            // grab the explosives
            var explosives = data["Explosives"]['navTitle'];
            console.log(explosives);







//
//            // Decoys
            var decoys = data['Decoys']['navTitle'];
            console.log(decoys);









            // grab the traps
            var traps = data['Traps']['navTitle'];
            console.log(traps);











            // put it in.
            document.getElementById('Anvils').innerHTML = anvil;



            // put it in.
            document.getElementById('Explosives').innerHTML = explosives;




            // put it in.
            document.getElementById('Decoys').innerHTML = decoys;





            // put it in.
            document.getElementById('Traps').innerHTML = traps;





        }
    });







}






