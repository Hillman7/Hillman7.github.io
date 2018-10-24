
// add the onload listener // we need something that loads every time
window.addEventListener('DOMContentLoaded', retrieveThreads,false);

// message
document.getElementById("sendButton").addEventListener("touchend",uploadMessage); 
document.getElementById("sendButton").addEventListener("click", uploadMessage); 

// thread adder
document.getElementById("addThread").addEventListener("touchend", createThread); 
document.getElementById("addThread").addEventListener("click", createThread); 


/***********************
 * Author: Jesse Hillman
 * retrieves all the messages in the thread
 *****************/
function retrieveMessages()
{
    // Grab the user information
    let user = window.location.hash.substring(1);

    // later I will make this dynamic
    let threadName = "fun";

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


/**********
 * Author: Jesse Hillman
 * 
 * 
 * 
 * *******/
function retrieveThreads()
{

    console.log("made it this far");


    // use the username to find the names of all threads
     // Grab the user information
     let user = window.location.hash.substring(1);
        // grab from the local storage previous notes.
        let storedThreadstring = localStorage.getItem(user);
        
        // call retrieve messages
       let allThreads = JSON.parse(storedThreadstring);
        // if there is one
        if (allThreads != null)
        {
           //grab the thread container
           let threadDisplayer = document.getElementById("threadDisplay");
           // empty it
           threadDisplayer.innerHTML = null;
           let numberOfThreads = allThreads.length;
           // loop through every thread
           for (let i = 0; i < allThreads.length; i++)
           {
              let aThread = allThreads[i];
              // make a new node
              let threadNode = document.createElement('div');
              // change class to get specific style
              threadNode.className = "messageNode";
              threadNode.innerHTML = aThread;
              // add new message divs with text inside
              threadDisplayer.appendChild(threadNode);        
           }
        }

        // call determine thread chosen


        // call retrieve messages
}



/**********
 * Author: Jesse Hillman
 * 
 * 
 * 
 * *******/
function createThread()
{
    // use the username to find the names of all threads
     // Grab the user information
     let user = window.location.hash.substring(1);

     let threadName = document.getElementById("newThread");

    let storedThreads = localStorage.getItem(threadName);

    // parse the threads
    let allThreads = JSON.parse(storedThreads);

    // if there are no threads yet make it a array.
    if(allThreads == null)
    { 
        allThreads = [];
    } 
    // added a thread to my array
    allThreads.push(threadName);
    let allThreadString = JSON.stringify(allThreads);

    // add a new thread
    localStorage.setItem(user, allThreadString);


    // retrieve the new list of threads
    retrieveThreads();

    // clear the thread input
    document.getElementById("newThread").value = null;



}



/*****************
 * Author: Jesse Hillman
 * Adds the new message typed
 * 
 * ************* */
function uploadMessage()
{
    // get the user
    let user =window.location.hash.substring(1);
    let threadName = "fun";
     // learned how to make dates. // maybe I'll do something with this.
     let currentDateAndTime = new Date();

     // keep the user name with it as well
     let messageInput = user;
     messageInput += ": ";
     messageInput += document.getElementById("inputBar").value;

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
      // save in local storage a file
      localStorage.setItem(threadName, allMessagesString);
      // update the list because we just added something new
      retrieveMessages();
      // clear the inputBar
      document.getElementById("inputBar").value = null;
      // call the retrieve messages // we also need to call it when someone else does it
      retrieveMessages();
}