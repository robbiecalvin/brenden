export async function loadLegalPlan(){


const response =
await fetch("../data/trustee-plan.json");


const data =
await response.json();


renderLegal(data);


}



function renderLegal(data){


const container =
document.getElementById(
"legal-container"
);


container.innerHTML = "";


data.phases.forEach(phase=>{


container.innerHTML += `


<section class="legal-phase">


<h2>
${phase.title}
</h2>


<p>
${phase.description || ""}
</p>


${

phase.tasks.map(task=>`

<div class="legal-task">


<h3>
${task.title}
</h3>


<span>
${formatStatus(task.status)}
</span>


${

task.notes
?

`<ul>

${task.notes.map(note=>`

<li>
${note}
</li>

`).join("")}

</ul>`

:""

}


</div>


`).join("")

}


</section>


`;



});


container.innerHTML += `


<section class="questions">


<h2>
Questions For Lawyer
</h2>


<ul>

${

data.lawyer_questions.map(q=>`

<li>
${q}
</li>

`).join("")

}

</ul>


</section>


`;



}



function formatStatus(status){


if(status==="locked"){

return "🔒 Available later";

}


return "⬜ Not started";


}