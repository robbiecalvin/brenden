export async function loadLawyerAppointment(){


const response =
await fetch(
"../data/legal/appointment-checklist.json"
);


const data =
await response.json();



const container =
document.getElementById(
"lawyer-appointment-container"
);



container.innerHTML = `


<div class="legal-card">


<h2>
${data.title}
</h2>


<p>
Prepare the following information before your lawyer appointment.
</p>


</div>



${

data.appointment_checklist.map(section=>`


<div class="legal-card">


<h2>
${section.category}
</h2>



<ul class="checklist">


${

section.items.map((item,index)=>`


<li class="checklist-item">


<label>


<input 
type="checkbox"
class="appointment-checkbox"
id="${section.category.replace(/\s+/g,'-')}-${index}"
>


<span>
${item}
</span>


</label>


</li>


`).join("")

}


</ul>


</div>


`).join("")

}

<div class="legal-card">

<h2>
Lawyer Questions
</h2>

${

data.lawyer_questions.map(section=>`

<h3>
${section.category}
</h3>

<ul class="checklist">

${

section.items.map((item,index)=>`

<li class="checklist-item">

<label>

<input 
type="checkbox"
class="appointment-checkbox"
id="lawyer-question-${index}"
>

<span>
${item}
</span>

</label>

</li>

`).join("")

}

</ul>

`).join("")

}

</div>


<div class="legal-card">


<h2>
Documents To Bring
</h2>


<ul class="checklist">


${

data.bring.map((item,index)=>`


<li class="checklist-item">


<label>


<input 
type="checkbox"
class="appointment-checkbox"
id="bring-${index}"
>


<span>
${item}
</span>


</label>


</li>


`).join("")

}


</ul>


</div>



<div class="legal-card">


<h2>
Quick Appointment Questions
</h2>


<ul class="checklist">


${

data.appointment_questions.map((question,index)=>`


<li class="checklist-item">


<label>


<input 
type="checkbox"
class="appointment-checkbox"
id="question-${index}"
>


<span>
${question}
</span>


</label>


</li>


`).join("")

}


</ul>


</div>



`;



const checkboxes =
document.querySelectorAll(
".appointment-checkbox"
);



checkboxes.forEach(box=>{


const saved =
localStorage.getItem(
box.id
);



if(saved === "complete"){

box.checked = true;

}



box.addEventListener(
"change",
()=>{


localStorage.setItem(

box.id,

box.checked
?
"complete"
:
""

);


});


});


}