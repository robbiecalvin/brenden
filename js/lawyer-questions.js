export async function loadLawyerQuestions() {


    const response = await fetch("../data/legal/appointment-checklist.json");


    const data = await response.json();


    const container = document.getElementById(
        "lawyer-questions-container"
    );


    container.innerHTML = `


    <div class="legal-card">

        <h2>
            ${data.title}
        </h2>

        <p>
            Prepare the following information before meeting with your lawyer.
        </p>

    </div>



    <div class="legal-card">

        <h2>
            Documents To Bring
        </h2>


        ${data.bring.map(item => `

            <label class="check-item">

                <input type="checkbox">

                <span>
                    ${item}
                </span>

            </label>

        `).join("")}


    </div>




    <div class="legal-card">

        <h2>
            Lawyer Appointment Questions
        </h2>


        ${data.appointment_questions.map(item => `

            <label class="check-item">

                <input type="checkbox">

                <span>
                    ${item}
                </span>

            </label>

        `).join("")}


    </div>




    ${data.lawyer_questions.map(section => `


        <div class="legal-card">


            <h2>
                ${section.category}
            </h2>



            ${section.items.map(question => `

                <label class="check-item">

                    <input type="checkbox">

                    <span>
                        ${question}
                    </span>

                </label>


            `).join("")}


        </div>


    `).join("")}


    


    <div class="legal-card">

        <h2>
            Appointment Checklist
        </h2>


        ${data.appointment_checklist.map(section => `


            <h3>
                ${section.category}
            </h3>


            ${section.items.map(item => `

                <label class="check-item">

                    <input type="checkbox">

                    <span>
                        ${item}
                    </span>

                </label>


            `).join("")}


        `).join("")}


    </div>



    `;


}