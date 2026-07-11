export async function loadLawyerAppointment(){


const response =
await fetch("../data/legal/appointment-checklist.json");


const data =
await response.json();



const container =
document.getElementById(
"lawyer-appointment-container"
);



container.innerHTML = Object.entries(data)
.map(([section,items])=>`


<div class="legal-card">


<h2>
${section.replace("_"," ")}
</h2>


${items.map(item=>`

<label>

<input type="checkbox">

${item}

</label>

`).join("")}


</div>


`).join("");



}