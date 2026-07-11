// Identity Recovery Module

export async function loadIdentity(){

    const response = await fetch("../data/identity-plan.json");

    const data = await response.json();

    renderIdentity(data.steps);

}



function renderIdentity(steps){


    const container = document.getElementById(
        "identity-container"
    );


    container.innerHTML = `


    <div class="checklist">


    ${
        steps.map(step => `


        <div class="check-card" data-task-id="${step.id}">


            <div class="check-header">

                <h2>
                    ${step.title}
                </h2>


                <span>
                    ${formatPriority(step.priority)}
                </span>


            </div>



            <p>
                ${step.description || ""}
            </p>



            <div class="requirements">


                <h3>
                    Requirements
                </h3>


                <ul>

                ${
                    (step.requirements || [])
                    .map(item => `

                        <li>
                            ${item}
                        </li>

                    `)
                    .join("")
                }

                </ul>


            </div>




            <div class="outputs">


                <strong>
                    Result:
                </strong>


                ${

                    (step.outputs || [])
                    .join(", ")

                }


            </div>



            ${
                step.completion_button?.enabled

                ?

                `

                <button 
                    class="complete-task-btn"
                    data-task-id="${step.id}">

                    ${step.completion_button.label}

                </button>

                `

                :

                ""

            }


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
    .forEach(button => {


        button.addEventListener(
            "click",
            function(){


                const taskID =
                this.dataset.taskId;



                completeTask(taskID);



                this.innerHTML =
                "✓ Completed";


                this.disabled = true;


            }
        );


    });


}





function completeTask(taskID){


    console.log(
        "Completed:",
        taskID
    );


    /*
       Connect your existing progress function here:

       updatePhaseProgress();
       updateOverallProgress();

    */


}





function formatPriority(priority){


    const icons={

        critical:"🚨 Critical",

        high:"⭐ Important",

        medium:"📌 Normal"

    };


    return icons[priority] || priority;


}