let toAddList = [];
console.log(toAddList) //logs the array into the console
    
let addButton = document.getElementById("AddTaskButton")
    addButton.addEventListener("click", () => 
    {
        toAddList.push("hi")
    })

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
*/