// Lawyer Preparation Module


export async function loadLawyerMeeting(){


const response =
await fetch("../data/lawyer-meeting.json");


const data =
await response.json();


renderLawyer(data);


}



function renderLawyer(data){


const container =
document.getElementById(
"lawyer-container"
);



container.innerHTML = `


<div class="planning-card">


<h2>
Before The Appointment
</h2>


<h3>
Bring:
</h3>


<ul>


${

data.bring.map(item=>`

<li>
☐ ${item}
</li>

`).join("")

}


</ul>



<h3>
Questions To Ask
</h3>


<ul>


${

data.questions.map(question=>`

<li>
${question}
</li>

`).join("")

}


</ul>


</div>


`;



}