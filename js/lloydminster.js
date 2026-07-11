// Lloydminster Planning Module


export async function loadLloydminster(){


const response =
await fetch("../data/lloydminster-plan.json");


const data =
await response.json();


renderLloydminster(data);


}



function renderLloydminster(data){


const container =
document.getElementById(
"lloydminster-container"
);



container.innerHTML = `


<div class="planning-card">


<h2>
${data.title}
</h2>



${

data.sections.map(section=>`

<section>


<h3>
${section.title}
</h3>



<ul>

${

section.items.map(item=>`

<li>
${item}
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