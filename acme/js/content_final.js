





var content = "";



// Intercept the menu link clicks
$("#navigation").on("click", "a", function (evt) {
    evt.preventDefault();
    // With the text value get the needed value from the weather.json file
    var jsonCity = $(this).text(); // Franklin, etc...
//    console.log(jsonCity);
    $.ajax({
        url: "/Hillman7.github.io/acme/js/acme.json"
        , dataType: "json"
        , success: function (content) {


            // hide the home page content.
            $('#home_content').css("display","none");



            // show the content of stuff to be shown.
            $('#product_content').css("visibility","visible");


            // make the background color ppear
            $('#changeContent').css("background-color","#ffffff");







/*******************************************************************************/

            // grab the Name info from json file.
            var anvilName = content['Anvils']['name'];
            console.log(anvilName);

            // this is the product name to go into the h2 tag.
            document.getElementById('product_name').innerHTML = anvilName;

//

            // picture goes here.
            $('#insertimage').prepend('<img id="product_picture" src="/Hillman7.github.io/acme/images/products/anvil.png" />')






            // this is the descriptive paragraph.
            var anvilParagraph = content['Anvils']['description'];
            // this goes into the paragraph tag.
            document.getElementById('product_description').innerHTML = anvilParagraph;




            // this is the made by paragraph
            var manufacturer = content['Anvils']['manufacturer'];
            document.getElementById('product_manufacturer').innerHTML += manufacturer;






            // this is the review paragraph
            var review = content['Anvils']['reviews'];
            document.getElementById('product_reviews').innerHTML += review;
            document.getElementById('product_reviews').innerHTML += "/5 stars";






            // this is the price h1 tag.
            var price = content['Anvils']['price'];
            document.getElementById('product_price').innerHTML += price;



/*******************************************************************************/











            // grab the explosive info
            var explosive = content['Explosives']['name'];




            // grab the decoys





            // grab the traps.











        }
    });
});










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
            document.getElementById('anvils').innerHTML = anvil;



            // put it in.
            document.getElementById('explosives').innerHTML = explosives;




            // put it in.
            document.getElementById('decoys').innerHTML = decoys;





            // put it in.
            document.getElementById('traps').innerHTML = traps;





        }
    });







}






