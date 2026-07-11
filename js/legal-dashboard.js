export async function loadLegalDashboard(){


const response =
await fetch(
"../data/legal/trustee-case-plan.json"
);


const data =
await response.json();



const container =
document.getElementById(
"legal-dashboard"
);



container.innerHTML = `


<div class="legal-card">


<h2>
${data.title}
</h2>


<p class="warning">
${data.warning || ""}
</p>



${

data.phases.map((phase, phaseIndex)=>`

<section class="legal-phase">


<h3>
${phase.title}
</h3>



<ul class="checklist">


${

phase.tasks.map((task, taskIndex)=>{


const id =
`legal-${phaseIndex}-${taskIndex}`;


return `

<li class="checklist-item">


<input 
type="checkbox"
id="${id}"
class="legal-checkbox"
>


<label for="${id}">
${task}
</label>


</li>


`;

}).join("")

}


</ul>


</section>


`).join("")

}


</div>


`;



const checkboxes =
document.querySelectorAll(
".legal-checkbox"
);



checkboxes.forEach(box=>{


const saved =
localStorage.getItem(
box.id
);



if(saved === "checked"){

box.checked = true;

}



box.addEventListener(
"change",
()=>{


localStorage.setItem(

box.id,

box.checked 
? "checked"
: ""

);


});


});


}