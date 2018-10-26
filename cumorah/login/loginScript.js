/***********************
 * Author: Jesse Hillman
 * 
 * 
 * 
 *********************/


document.getElementById("loginButton").addEventListener("touchend", loginUser); 
// document.getElementById("loginButton").addEventListener("click", loginUser); 



function loginUser()
{
    // fancy graphic to my div button


    // call the cumorah page and pass the user data to it.
    let user = document.getElementById("user").value;

    console.log(user);


    // go to this page
    window.location.href = "../cumorah.html" + "#" + user;


}
