// js/lloydminster.js


export async function loadLloydminster(){


const response =
await fetch("../data/lloydminster-budget.json");


const data =
await response.json();


renderLloydminster(data.scenarios);


}





function renderLloydminster(scenarios){


const container =
document.getElementById(
"lloydminster-container"
);



container.innerHTML = `


<select id="lloydminster-select">


${scenarios.map(scenario=>`


<option value="${scenario.id}">

${scenario.title}

</option>


`).join("")}


</select>



<div id="lloydminster-results"></div>


`;



displayScenario(
scenarios[0]
);



document
.getElementById(
"lloydminster-select"
)
.addEventListener(
"change",
function(){


const selected =
scenarios.find(
scenario =>
scenario.id === this.value
);



displayScenario(selected);


});


}





function displayScenario(scenario){


const income =
calculateTotal(
scenario.income || []
);



const expenses =
calculateTotal(
scenario.expenses || []
);



const remaining =
income - expenses;



const container =
document.getElementById(
"lloydminster-results"
);



container.innerHTML = `


<div class="lloydminster-card">


<h2>
${scenario.title}
</h2>



<p>
${scenario.description || ""}
</p>




<section>

<h3>
Income
</h3>


${renderMoney(
scenario.income || []
)}


<strong>
Monthly Income:
$${money(income)}
</strong>


</section>





<section>

<h3>
Expenses
</h3>


${renderMoney(
scenario.expenses || []
)}


<strong>
Monthly Expenses:
$${money(expenses)}
</strong>


</section>




<div class="lloydminster-balance">


<h3>
Monthly Remaining
</h3>


<div>

$${money(remaining)}

</div>


</div>





${scenario.six_month_projection ?

`

<div class="projection-card">

<h3>
Six Month Projection
</h3>


<p>
Income:
$${money(
scenario.six_month_projection.income
)}
</p>


<p>
Expenses:
$${money(
scenario.six_month_projection.expenses
)}
</p>


<p>
Savings:
$${money(
scenario.six_month_projection.savings
)}
</p>


</div>

`

:""

}





${scenario.startup_costs ?

`

<div class="startup-card">

<h3>
Household Setup Costs
</h3>


${scenario.startup_costs.map(item=>`

<div class="money-row">

<span>
${item.item}
</span>

<span>
$${money(item.amount)}
</span>

</div>


`).join("")}


<strong>

Total:
$${money(
scenario.total_startup_cost
)}

</strong>


</div>


`

:""

}



</div>


`;

}




function calculateTotal(items){


return items.reduce(

(sum,item)=>

sum + Number(item.amount || 0),

0

);


}




function renderMoney(items){


return items.map(item=>`


<div class="money-row">


<span>

${item.name || item.category}

</span>


<span>

$${money(item.amount)}

</span>


</div>


`).join("");


}




function money(amount){


return Number(amount)
.toLocaleString(
"en-CA",
{
minimumFractionDigits:2
}
);


}