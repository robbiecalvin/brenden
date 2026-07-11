export async function loadTimeline(){


const response =
await fetch("../data/timeline.json");


const data =
await response.json();


renderTimeline(data.phases);


}



function renderTimeline(phases){


const container =
document.getElementById(
"timeline-container"
);



container.innerHTML =
phases.map(
phase => createPhase(phase)
)
.join("");

}



function createPhase(phase){


return `

<section class="timeline-phase">


<div class="timeline-header">


<h2>
${phase.title}
</h2>


<span class="status">
${formatStatus(phase.status)}
</span>


</div>



<p class="timeframe">

${phase.timeframe}

</p>



<div class="tasks">


${

phase.tasks.map(task=>`

<div class="timeline-task">


<h3>

${task.title}

</h3>


<span class="priority ${task.priority}">

${task.priority}

</span>


</div>

`).join("")

}


</div>


</section>

`;

}



function formatStatus(status){


const statuses = {

active:"🟢 Current",

future:"🔒 Upcoming",

complete:"✅ Complete"

};


return statuses[status] || status;


}