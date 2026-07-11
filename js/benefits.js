// Benefits Continuity Module


export async function loadBenefits(){


    const response =
    await fetch("../data/benefits-plan.json");


    const data =
    await response.json();


    renderBenefits(data);


}




function renderBenefits(data){


    const container =
    document.getElementById(
        "benefits-container"
    );



    const benefit =
    data.benefits[0];



    container.innerHTML = `



    <div class="benefits-card">


        <h2>
            ${benefit.name}
        </h2>


        <p>
            Priority:
            ${benefit.priority}
        </p>



        <h3>
            Checklist
        </h3>



        <div class="task-list">


        ${

            benefit.tasks.map(task=>`


            <div class="task-card"
            data-task-id="${task.id}">


                <label class="task-checkbox">


                    <input 
                    type="checkbox"
                    ${task.complete ? "checked" : ""}
                    >


                    <span>
                    ${task.title}
                    </span>


                </label>



            </div>


            `).join("")

        }


        </div>



        ${

        benefit.completion_button?.enabled

        ?

        `

        <button
        class="complete-task-btn"
        data-task-id="${benefit.id}">

        ${benefit.completion_button.label}

        </button>

        `

        :

        ""

        }



    </div>





    <div class="emergency-card">


        <h2>
        Emergency Protection Plan
        </h2>



        <ul>


        ${

        data.emergency_plan.steps.map(step=>`


            <li class="task-card"
            data-task-id="${step.id}">


                ${step.title}


            </li>


        `).join("")


        }


        </ul>



        <button
        class="complete-task-btn"
        data-task-id="emergency_plan">


        ${data.emergency_plan.completion_button.label}


        </button>



    </div>





    <div class="transition-card">


        <h2>
        Transition Checklist
        </h2>



        ${

        data.transition_checklist.map(task=>`


        <div class="task-card"
        data-task-id="${task.id}">


            <h3>
            ${task.task}
            </h3>


            <p>
            Priority:
            ${task.priority}
            </p>


            <button
            class="complete-task-btn"
            data-task-id="${task.id}">

            ${task.completion_button.label}

            </button>


        </div>


        `).join("")


        }



    </div>


    `;



    initializeCompletionButtons();


}





function initializeCompletionButtons(){


    document
    .querySelectorAll(".complete-task-btn")
    .forEach(button=>{


        button.addEventListener(
            "click",
            function(){


                const taskID =
                this.dataset.taskId;



                console.log(
                    "Completed:",
                    taskID
                );



                this.innerHTML =
                "✓ Completed";


                this.disabled = true;



                /*
                Connect your progress system here:

                updatePhaseProgress();
                updateOverallProgress();

                */


            }
        );


    });


}