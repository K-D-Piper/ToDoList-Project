//NAMING VARIABLES
//let toAddList = []; //Empty array to add to //WARNING. MAY NOT NEED.
let addButton = document.getElementById("AddTaskButton"); //Add Task button now linked
let addText = document.getElementById("toDoText"); //connects input box
//let addCheck = document.getElementById("toDoCheck"); //connects check box
let addToUl = document.getElementById("ulID") //connects my UL 
let liItem = document.getElementById("liID") //connects my li


//addButton when clicked now...
    addButton.addEventListener("click", () => 
    {   
        /*
        console.log(addText.value)//when clicked button logs input text into console. 
        let realAdding = addToUl.append(addText.value) //when button clicked adds text to screen (any new text goes next to it tho)
        toAddList.push(realAdding) //logs text into console. But all of it
        //ABOVE WORKS. MOSTLY.
        */
//sdxfcgvhbjnkml,;vcxzsxcfvhbjnkml,;'.jhgf,mknjbhvgf
        //mike suggestion put all added items inot an li 
       liItem.append(checkbox)
       liItem.append(addItem)

        //ADD CHECK BOX 
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
       // checkBox.innerHTML = addToUl.append(addText)
        addToUl.append(liItem) //add items to li 

        //ADD P TAG TO TEXT BOX
        let addItem = document.createElement("p") //created p tag for inputed text
        addItem.innerHTML = addToUl.append(addText.value) //logged text to HTML / to the screen 
      
        //add checkbox
        //let checkBox = document.querySelector("#toDoCheck")
        
        /*
        //doesn't need to be here. May be added to remove later
        if(checkBox.checked == true){
            console.log("did it work?")
            addItem.style.setProperty("text-decoration" , "line-through")
            
        } else {
            console.log("bye")
        }
        */
    }) //end of event listener 

/*
function addingTasks (addNew)
{
    toAddList.push(addNew)
    console.log(toAddList)
}
addingTasks("hi")
*/
/*
//OLD EXAMPLE
let taskToDo = [];
//TODO Create Functions: Create functions to add a task and display the to-do list. 

function addATask(additionalTask){
    //how do i add an item to the array?
    taskToDo.push(additionalTask);
    console.log(taskToDo);
}

function displayToDoList(){
    console.log(taskToDo);
}

function removeAnItem(taskCompleted){
    //I need to remve a specifc item. 
    //If else statements?
    //if(taskCompleted =="Make bed"){
    //    console.log("its here!")
    // }
    //debugger
    let uppercaseTaskCompleted = taskCompleted.toUpperCase();
    console.log(uppercaseTaskCompleted)

    for(let i =0; i <taskToDo.length; i++){
        let currentTAskItem = taskToDo[i].toUpperCase();
        if(uppercaseTaskCompleted == currentTAskItem){
            taskToDo.splice(i, 1);
            console.log(taskToDo);    
        }    
    }
}

addATask("Make bed")
addATask("Code some")
addATask("Make food!")
removeAnItem("make food!")


//CHATGPT EXAMPLE 
// Get references to the HTML elements
const taskInput = document.getElementById('toDoText');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('ulID');

// Function to create a new task item
function createTaskItem(taskText) {
    const li = document.createElement('li');
    
    // Create a text node and append it to the list item
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    
    // Append the delete button to the list item
    li.appendChild(deleteButton);
    
    // Add event listener for the delete button
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    
    return li;
}

// Event listener for the add button
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task.');
    }
});

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});

*/