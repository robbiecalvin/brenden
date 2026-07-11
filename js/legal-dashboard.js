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

${data.warning}

</p>



${

data.phases.map(phase=>`

<section>


<h3>
${phase.title}
</h3>


<ul>


${

phase.tasks.map(task=>`

<li class="task-checkbox">
☐ ${task}
</li>

`).join("")

}


</ul>


</section>


`).join("")

}


</div>


`;



}