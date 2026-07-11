// js/budget.js


export async function loadBudgetPage() {

    const response = await fetch("../data/budget-scenarios.json");

    const data = await response.json();

    renderBudgetSelector(data.scenarios);

}



function renderBudgetSelector(scenarios) {


    const container =
        document.getElementById("budget-container");


    container.innerHTML = `
    <br>

        <select id="budget-select">

            ${scenarios.map(scenario => `

                <option value="${scenario.id}">
                    ${scenario.title}
                </option>

            `).join("")}

        </select>


        <div id="budget-results"></div>

    `;


    displayScenario(scenarios[0]);


    document
    .getElementById("budget-select")
    .addEventListener("change", function(){

        const selected =
        scenarios.find(
            scenario =>
            scenario.id === this.value
        );


        displayScenario(selected);

    });


}




function displayScenario(scenario){


    const incomeTotal =
    calculateTotal(scenario.income);



    const expenseTotal =
    calculateTotal(scenario.expenses);



    const remaining =
    incomeTotal - expenseTotal;



    const monthlyStatus =
    getStatus(remaining);



    const results =
    document.getElementById(
        "budget-results"
    );



    results.innerHTML = `


    <div class="budget-card">


        <h2>
        ${scenario.title}
        </h2>


        <p>
        ${scenario.description || ""}
        </p>



        <section>

        <h3>
        Monthly Income
        </h3>


        ${createMoneyList(
            scenario.income
        )}

        <strong>
        Total Income:
        $${formatMoney(incomeTotal)}
        </strong>


        </section>



        <section>

        <h3>
        Monthly Expenses
        </h3>


        ${createMoneyList(
            scenario.expenses
        )}


        <strong>
        Total Expenses:
        $${formatMoney(expenseTotal)}
        </strong>


        </section>




        <div class="budget-summary ${monthlyStatus.class}">


            <h3>
            Monthly Remaining
            </h3>


            <div class="balance">

            $${formatMoney(remaining)}

            </div>


            <p>
            ${monthlyStatus.message}
            </p>


        </div>



        ${createProjection(remaining)}



    </div>


    `;

}





function calculateTotal(items){

    return items.reduce(
        (total,item)=>
        total + item.amount,
        0
    );

}





function createMoneyList(items){


return items.map(item=>`

<div class="money-row">

<span>
${item.name}
</span>


<span>
$${formatMoney(item.amount)}
</span>


</div>


`).join("");

}





function getStatus(balance){


if(balance < -500){

return {

class:"danger",

message:
"This plan creates a significant monthly shortfall."

};

}



if(balance < 0){

return {

class:"warning",

message:
"This plan requires additional income, savings, or reduced expenses."

};

}



return {

class:"safe",

message:
"This plan has money remaining after expenses."

};


}





function createProjection(monthlyBalance){


return `


<div class="projection">


<h3>
Three Month Projection
</h3>


<p>
October:
$${formatMoney(monthlyBalance)}
</p>


<p>
November:
$${formatMoney(monthlyBalance * 2)}
</p>


<p>
December:
$${formatMoney(monthlyBalance * 3)}
</p>


</div>


`;

}





function formatMoney(amount){

return Number(amount)
.toLocaleString(
"en-CA",
{
minimumFractionDigits:2
}
);

}