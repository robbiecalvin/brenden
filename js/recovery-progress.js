const recoveryTasks = {
    birth_certificate: false,
    bc_identification: false,
    bank_account: false,
    secure_documents: false
};


function loadProgress() {
    const saved = localStorage.getItem("brendenRecoveryProgress");

    if (saved) {
        return JSON.parse(saved);
    }

    return recoveryTasks;
}


function saveProgress(progress) {
    localStorage.setItem(
        "brendenRecoveryProgress",
        JSON.stringify(progress)
    );
}


function completeTask(taskID) {

    let progress = loadProgress();

    progress[taskID] = true;

    saveProgress(progress);

    updateProgressBar();

    alert("Task completed successfully.");
}


function updateProgressBar() {

    let progress = loadProgress();

    let completed = Object.values(progress)
        .filter(status => status === true)
        .length;

    let total = Object.keys(progress).length;

    let percentage = Math.round(
        (completed / total) * 100
    );


    const bar = document.getElementById("recoveryProgressBar");
    const text = document.getElementById("progressText");


    if(bar){
        bar.style.width = percentage + "%";
    }


    if(text){
        text.innerHTML =
        `${completed} of ${total} completed (${percentage}%)`;
    }
}


document.addEventListener(
"DOMContentLoaded",
function(){
    updateProgressBar();
});

document.addEventListener("DOMContentLoaded", function () {

    initializeCompletionButtons();

});


async function initializeCompletionButtons() {

    const buttons = document.querySelectorAll(
        ".complete-task-btn"
    );


    const plan = await loadRecoveryPlan();


    buttons.forEach(button => {

        const taskID = button.dataset.taskId;


        const task = findTask(
            plan,
            taskID
        );


        if (!task) {
            return;
        }


        // Restore completed state after refresh
        if(task.status === "completed") {

            button.innerHTML =
                task.completion.completed_text;

            button.disabled = true;

            button.classList.add("completed");

        }


        button.addEventListener(
            "click",
            function(){

                completeTask(taskID);

            }
        );


    });

}



function findTask(plan, taskID){

    for(
        let phase of plan.phases
    ){

        for(
            let task of phase.tasks
        ){

            if(task.id === taskID){
                return task;
            }

        }

    }


    return null;

}



async function completeTask(taskID){

    let plan = await loadRecoveryPlan();


    let task = findTask(
        plan,
        taskID
    );


    if(!task){
        return;
    }


    task.status = "completed";

    task.completed_date =
        new Date().toISOString();


    saveRecoveryPlan(plan);


    updateProgressBars();


    const button =
    document.querySelector(
        `[data-task-id="${taskID}"]`
    );


    if(button){

        button.innerHTML =
        task.completion.completed_text;

        button.disabled = true;

        button.classList.add(
            "completed"
        );

    }

}