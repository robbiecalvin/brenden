// js/checklist.js


import {
updateTaskStatus,
saveAppData
} from "./storage.js";


export function renderChecklist(data){

const container =
document.getElementById("checklist-container");


container.innerHTML = "";


data.phases.forEach(phase=>{


const phaseCard =
document.createElement("section");


phaseCard.className="phase-card";



phaseCard.innerHTML = `

<h2>
${phase.title}
</h2>

<p>
${phase.description}
</p>


<div class="tasks">

${
phase.locked

?

`
<div class="locked">
🔒 This section becomes available later.
</div>
`

:

phase.tasks.map(task=>createTaskHTML(task)).join("")

}

</div>

`;



container.appendChild(phaseCard);



});



attachChecklistEvents(data);


}



function createTaskHTML(task){


return `

<div class="task-card">


<label>


<input 

type="checkbox"

data-task="${task.id}"

${task.status==="complete" ? "checked":""}


${task.status==="locked" ? "disabled":""}

>


<span>

${task.title}

</span>


</label>


</div>

`;


}





function attachChecklistEvents(data){


const boxes =
document.querySelectorAll("[data-task]");


boxes.forEach(box=>{


box.addEventListener("change",()=>{


const taskId =
box.dataset.task;



updateTaskStatus(

taskId,

box.checked
?
"complete"
:
"pending"

);



location.reload();



});


});


}