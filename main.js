let task = []
const inputText = document.getElementById("inputText")
const addButton = document.getElementById("addButton")
const rm = document.getElementById("rm")

function addclick (){
	task.push(inputText.value)
/* 	outputText.textCotent = ???
	  task[i]=inputText.value
	  i++ */
    var li = document.createElement('li');
    li.textContent=inputText.value;
    document.getElementById("list").appendChild(li);

}
function rmclick(){
	var li =   document.getElementById("list").children
  const input=inputText.value
  
for(let i=0;i<li.length;i++){
if(li[i].textContent===input){
li[i].remove();
}
}


}
addButton.addEventListener("click",addclick)
rmButton.addEventListener("click",rmclick)
