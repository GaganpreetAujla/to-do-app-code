let todo = [];
let req = prompt("please enter your request");
console.log(req);

while(true){

if(req=="quit"){
console.log("You are quitting todo app!!");
break;

}

if(req=="list"){
console.log("_____________________");
for(let i=0;i<todo.length;i++){
console.log(i,todo[i]);
}
console.log("_____________________");

}

else if(req=="add") {
let task= prompt("What you like to add in your to-do list");
todo.push(task);
console.log("Congratulations!!Task is added successfully.");

}

else if(req=="delete"){
let idx = prompt("please enter the task index");
todo.splice(idx,1);
console.log("task deleted");
}
else{
    console.log("Wrong request");
}
req = prompt("Please enter new request");



}
