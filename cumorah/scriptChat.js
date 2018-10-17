/***********************
 * Author: Jesse Hillman
 * retrieves all the messages in the thread
 *****************/
// add the onload listener // we need something that loads every time
window.addEventListener('DOMContentLoaded', retrieveMessages,false);

function retrieveMessages()
{
    document.getElementById("sendButton").addEventListener("touchend", uploadMessage); 
    // later I will make this dynamic
    let threadName = "jesse";
   // get out of local storage the file thread
   let storedMessagesString = localStorage.getItem(threadName);
   allMessages = JSON.parse(storedMessagesString);
   // if there is one
   if (allMessages != null)
   {
      // make sure we put it in the right place
      let noteDisplayer = document.getElementById(threadName);
      // set a variable for holding the chat
      let chat = document.getElementById("chatHolder");
      // empty it
      chat.innerHTML = null;
      let numberOfMessages = allMessages.length;
      // loop through every note
      for (let i = 0; i < allMessages.length; i++)
      {
         let aNote = allMessages[i];
         // make a new node
         let messageNode = document.createElement('div');
         // change class to get specific style
         messageNode.className = "messageNode";
         messageNode.innerHTML = aNote;
         // add new message divs with text inside
         chat.appendChild(messageNode);        
      }
   }
}

/*****************
 * Author: Jesse Hillman
 * Adds the new message typed
 * 
 * ************* */
function uploadMessage()
{
console.log("hello");

    let threadName = "jesse";
     // learned how to make dates. // maybe I'll do something with this.
     let currentDateAndTime = new Date();

     let messageInput = document.getElementById("inputBar").value ;

     // grab from the local storage previous notes.
     let storedMessagesString = localStorage.getItem(threadName);

     // parse the messages
     let allMessages = JSON.parse(storedMessagesString);

      // if there are no messages yet make it a array.
      if(allMessages == null)
      { 
         allMessages = [];
      } 
      // added a message to my array
      allMessages.push(messageInput);
      let allMessagesString = JSON.stringify(allMessages);
      // save in local storage a file called all_notes
      localStorage.setItem(threadName, allMessagesString);
      // update the list because we just added something new
      retrieveMessages();
      // clear the inputBar
      document.getElementById("inputBar").value = null;

      // call the retrieve messages // we also need to call it when someone else does it
      retrieveMessages();
}