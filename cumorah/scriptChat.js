/***********************
 * Author: Jesse Hillman
 * 
 *****************/
function retrieveMessages()
{


    console.log("made it this far"); // we did make it into the function

    // set a variable for holding the chat
    let chat = document.getElementById("chatHolder");

    // clear what is already there

    // make a new node
    let messageNode = document.createElement('div');
    messageNode.className = "messageNode";
    messageNode.innerHTML = "testing Stuff";
    console.dir(messageNode);


    // add new message divs with text inside
    chat.appendChild(messageNode);


}