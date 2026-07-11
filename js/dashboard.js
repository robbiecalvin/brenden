export function loadDashboard(){


const container =
document.getElementById(
"dashboard"
);



container.innerHTML = `


<section class="status-card">


<h2>
Current Stage
</h2>


<div class="status">

🟢 Treatment Completion Planning

</div>


<p>
The focus right now is preparing for a successful transition after treatment.
</p>


</section>



<section class="dashboard-section">


<h2>
Immediate Priorities
</h2>



${createCards([

[
"🪪 Identity Recovery",
"Replace ID documents and prepare banking access",
"identity.html",
"step1.png"
],


[
"💵 Benefits Protection",
"Make sure income continues after discharge",
"benefits.html",
"step2.png"
],


[
"⚖️ Legal Transition",
"To be completed in the last 2 weeks of treatment",
"legal-transition.html",
"step3.png"
]

])}


</section>





<section class="dashboard-section legal">


<h2>
⚖️ Legal & Trustee Preparation
</h2>


<p>
Private preparation tools for independent legal review.
</p>



${createCards([


[
"📂 Legal Dashboard",
"Trust transition preparation",
"legal-dashboard.html",
"step4.png"
],


[
"📝 Timeline Builder",
"Record important dates and events",
"incident-timeline.html",
"step5.png"
],


[
"💬 Communication Log",
"Organize important communications",
"communication-log.html",
"step6.png"
],


[
"📚 Lawyer Meeting",
"Prepare for legal consultation",
"lawyer-appointment.html",
"step7.png"
]


])}


</section>





<section class="dashboard-section">


<h2>
Future Planning
</h2>


${createCards([


[
"🏠 Recovery Housing",
"Compare safe housing options",
"recovery-houses.html",
"step9.png"
],

[
"💰 Budget Planning",
"Build realistic financial scenarios",
"budget.html",
"step11.png"
],


[
"📍 Lloydminster Plan",
"Relocation research and budgeting",
"lloydminster.html",
"step10.png"
]





])}


</section>






`;



}



function createCards(cards){

return cards.map(card=>`

<a class="dashboard-card" href="${card[2]}">

    <div class="card-content">

        <h3>
            ${card[0]}
        </h3>

        <p>
            ${card[1]}
        </p>

    </div>


    <div class="card-image">

        <img 
        src="../assets/images/${card[3]}" 
        alt="${card[0]}"
        >

    </div>


</a>

`).join("");

}