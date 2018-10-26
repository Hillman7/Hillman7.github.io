
// add the onload listener // we need something that loads every time
window.addEventListener('DOMContentLoaded', retrieveThreads,false);

// message
// add the listener for the send button and determine which thread needs to be updated.
document.getElementById("sendButton").addEventListener("touchend",determineThreadUpload); 
// document.getElementById("sendButton").addEventListener("click",determineThreadUpload); 

// thread adder
document.getElementById("addThread").addEventListener("touchend", createThread); 
// document.getElementById("addThread").addEventListener("click", createThread); 

// HAS TO KEEP TRACK OF WHICH THREAD IS SELECTED
var SelectedThread = "";


/**********
 * Author: Jesse Hillman
 * 
 * 
 * 
 * *******/
function retrieveThreads()
{
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
           let navList = document.createElement('ul');
           // added this
           navList.id = "deSelecter";


           threadDisplayer.appendChild(navList);
           navList.id = "threadListContainer";
           // loop through every thread
           for (let i = 0; i < allThreads.length; i++)
           {
              let aThread = allThreads[i];

              // make a uL
              // make a li

              let newLine = document.createElement('li');
              newLine.className = "navThread";
              
              // make a new node
              let threadNode = document.createElement('a');
              // change class to get specific style
              threadNode.className = "messageNode";

              let linkText = document.createTextNode(aThread);
              threadNode.appendChild(linkText);
              newLine.appendChild(threadNode);
              // add new message divs with text inside
              navList.appendChild(newLine); 
           }
        }

// Adding all the handlers for the threads
var classname = document.getElementsByClassName("messageNode")
    for (let i = 0; i < classname.length; i++) 
    {
    // classname[i].addEventListener('click', determineThread);
    classname[i].addEventListener('touchend', determineThread);
    }




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
     let threadName = document.getElementById("newThread").value;
     // get the threads for that user
   let storedThreads = localStorage.getItem(user);
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


/*******************
 * Author: Jesse Hillman
 * Determines thread that is open
 * 
 * 
 * **********/
function determineThread()
{
    //automatically bound to this
    if (this.className != "selected")
    {

        // deselect all that are there
        deselectAll();


        // make this one selected
        this.className = "selected";
            // tell the rest of the program that this thread is selected
            SelectedThread = this.innerHTML;
            // call retrieve messages for that one
            retrieveMessages(this.innerHTML);
    }
    else
    {
        this.className = "messageNode";
    }
}



/**********************
 * Author: Jesse Hillman
 * 
 * Select all of the threads and make them
 * not selected
 * 
 * ****** */
function deselectAll()
{
    let threadListButtons = document.getElementsByTagName('ul');
 //   console.dir(threadListButtons[0].children[0].children[0].className);

 //   console.dir(threadListButtons[0].children);

    // loop through each line item
  for (let i = 0; i < threadListButtons[0].children.length; i++)
  {
      if (threadListButtons[0].children[i].children[0].className == "selected")
      {
          // make it normal again
          threadListButtons[0].children[i].children[0].className = "messageNode";
      }
  }


}








/***********************
 * Author: Jesse Hillman
 * retrieves all the messages in the thread
 *****************/
function retrieveMessages(trueThreadName)
{
    // Grab the user information
    let user = window.location.hash.substring(1);


    
    let threadName = trueThreadName;
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



   
            // if there are no messages just clear it.
        // if (!allMessages.length)
        // {
        //     console.log("clear it");
        //     chat.innerHTML = null;
        // }



   }
   // its empty
   else
   {
       console.log(allMessages);
       let chat = document.getElementById("chatHolder");
       chat.innerHTML = null;
   }

}



/*******************
 * Author: Jesse Hillman
 * Determines thread that is open
 * 
 * Calls upload message with the correct thread name
 * 
 * **********/
function determineThreadUpload()
{
    // upload messages to selected thread
    uploadMessage(SelectedThread);
}



/*****************
 * Author: Jesse Hillman
 * Adds the new message typed
 *
 * Takes the thread and adds a new message to it.
 * 
 * 
 * ************* */
function uploadMessage(trueThreadName)
{
    // get the user
    let user = window.location.hash.substring(1);
    //let threadName = "fun";
    let threadName = trueThreadName;
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
      retrieveMessages(trueThreadName);
      // clear the inputBar
      document.getElementById("inputBar").value = null;
      // call the retrieve messages // we also need to call it when someone else does it
      retrieveMessages(trueThreadName);
}