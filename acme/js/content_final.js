





var content = "";



// Intercept the menu link clicks
$("#navigation").on("click", "a", function (evt) {
    evt.preventDefault();
    // keep a record of what link they clicked
    var nav = $(this).text(); // Franklin, etc...
    console.log(nav);
    $.ajax({
        url: "/Hillman7.github.io/acme/js/acme.json"
        , dataType: "json"
        , success: function (content) {


            // hide the home page content.
            $('#home_content').css("display","none");



            // show the content of stuff to be shown.
            $('#product_content').css("visibility","visible");


            // make the background color appear
            $('#changeContent').css("background-color","#ffffff");


            // if they want to go back to home just reload the page.
            if (nav == "Home"){
                location.reload();

            }



    // if they want to go back to home just reload the page.
            if (nav == "Home"){
                bringHomePage();

            }








if (nav == "Anvil"){
    console.log("it worked");







    // empty everything.
    document.getElementById('product_description').innerHTML = "";
    document.getElementById('product_manufacturer').innerHTML = "";
    document.getElementById('product_reviews').innerHTML = "";
    document.getElementById('product_price').innerHTML = "";

    $('.product_picture').remove();











/*******************************************************************************/

            // grab the Name info from json file.
            var anvilName = content['Anvils'].name;
            console.log(anvilName);

            // this is the product name to go into the h2 tag.
            document.getElementById('product_name').innerHTML = anvilName;

//

            // picture goes here.
            $('#insertimage').prepend('<img class="product_picture" src="/Hillman7.github.io/acme/images/products/anvil.png" />')








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

}











            if (nav == "Explosives"){
                console.log("it worked");




                // empty everything.
                document.getElementById('product_description').innerHTML = "";
                document.getElementById('product_manufacturer').innerHTML = "";
                document.getElementById('product_reviews').innerHTML = "";
                document.getElementById('product_price').innerHTML = "";

                $('.product_picture').remove();








                /*******************************************************************************/

                // grab the Name info from json file.
                var anvilName = content['Explosives'].name;
                console.log(anvilName);

                // this is the product name to go into the h2 tag.
                document.getElementById('product_name').innerHTML = anvilName;

                //

                // picture goes here.
                $('#insertimage').prepend('<img class="product_picture" src="/Hillman7.github.io/acme/images/products/tnt.png" />')








                // this is the descriptive paragraph.
                var anvilParagraph = content['Explosives']['description'];
                // this goes into the paragraph tag.
                document.getElementById('product_description').innerHTML = anvilParagraph;




                // this is the made by paragraph
                var manufacturer = content['Explosives']['manufacturer'];
                document.getElementById('product_manufacturer').innerHTML += manufacturer;






                // this is the review paragraph
                var review = content['Explosives']['reviews'];
                document.getElementById('product_reviews').innerHTML += review;
                document.getElementById('product_reviews').innerHTML += "/5 stars";






                // this is the price h1 tag.
                var price = content['Explosives']['price'];
                document.getElementById('product_price').innerHTML += price;

            }

            if (nav == "Decoys"){
                console.log("it worked");





                // empty everything.
                document.getElementById('product_description').innerHTML = "";
                document.getElementById('product_manufacturer').innerHTML = "";
                document.getElementById('product_reviews').innerHTML = "";
                document.getElementById('product_price').innerHTML = "";

                $('.product_picture').remove();






                // lets put a page reload here from cit 160.




                /*******************************************************************************/

                // grab the Name info from json file.
                var anvilName = content['Decoys'].name;
                console.log(anvilName);

                // this is the product name to go into the h2 tag.
                document.getElementById('product_name').innerHTML = anvilName;

                //

                // picture goes here.
                $('#insertimage').prepend('<img class="product_picture" src="/Hillman7.github.io/acme/images/products/roadrunner.jpg" />')








                // this is the descriptive paragraph.
                var anvilParagraph = content['Decoys']['description'];
                // this goes into the paragraph tag.
                document.getElementById('product_description').innerHTML = anvilParagraph;




                // this is the made by paragraph
                var manufacturer = content['Decoys']['manufacturer'];
                document.getElementById('product_manufacturer').innerHTML += manufacturer;






                // this is the review paragraph
                var review = content['Decoys']['reviews'];
                document.getElementById('product_reviews').innerHTML += review;
                document.getElementById('product_reviews').innerHTML += "/5 stars";






                // this is the price h1 tag.
                var price = content['Decoys']['price'];
                document.getElementById('product_price').innerHTML += price;

            }











            if (nav == "Traps"){
                console.log("it worked");



                // lets put a page reload here from cit 160.




                // empty everything.
                document.getElementById('product_description').innerHTML = "";
                document.getElementById('product_manufacturer').innerHTML = "";
                document.getElementById('product_reviews').innerHTML = "";
                document.getElementById('product_price').innerHTML = "";

                $('.product_picture').remove();






                /*******************************************************************************/

                // grab the Name info from json file.
                var anvilName = content['Traps'].name;
                console.log(anvilName);

                // this is the product name to go into the h2 tag.
                document.getElementById('product_name').innerHTML = anvilName;

                //

                // picture goes here.
                $('#insertimage').prepend('<img class="product_picture" src="/Hillman7.github.io/acme/images/products/trap.jpg" />')








                // this is the descriptive paragraph.
                var anvilParagraph = content['Traps']['description'];
                // this goes into the paragraph tag.
                document.getElementById('product_description').innerHTML = anvilParagraph;




                // this is the made by paragraph
                var manufacturer = content['Traps']['manufacturer'];
                document.getElementById('product_manufacturer').innerHTML += manufacturer;






                // this is the review paragraph
                var review = content['Traps']['reviews'];
                document.getElementById('product_reviews').innerHTML += review;
                document.getElementById('product_reviews').innerHTML += "/5 stars";






                // this is the price h1 tag.
                var price = content['Traps']['price'];
                document.getElementById('product_price').innerHTML += price;

            }























/*******************************************************************************/











            // grab the explosive info
            var explosive = content['Explosives']['name'];




            // grab the decoys





            // grab the traps.











        }
    });
});




function bringHomePage(){

        location.reload();
}






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






