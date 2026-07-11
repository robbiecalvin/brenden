export async function loadLegalExport(){


const container =
document.getElementById(
"export-container"
);



container.innerHTML = `


<div class="export-card">


<h2>
Trustee Review Package
</h2>


<p>

This package organizes information for review by independent legal counsel.

</p>



<h3>
Included Sections
</h3>


<ul>

<li>
Client Summary
</li>

<li>
Timeline of Events
</li>

<li>
Document Checklist
</li>

<li>
Communication Records
</li>

<li>
Questions For Lawyer
</li>

<li>
Goals and Next Steps
</li>


</ul>



<button id="generate-package">

Generate Package

</button>



<button id="print-package">

Print Package

</button>


</div>



<div id="package-preview">


<h2>
Preview
</h2>


<div class="preview-section">

Client Summary

</div>


<div class="preview-section">

Timeline

</div>


<div class="preview-section">

Documents

</div>


<div class="preview-section">

Questions

</div>


</div>


`;



setupButtons();


}



function setupButtons(){


const printButton =
document.getElementById(
"print-package"
);



printButton.addEventListener(
"click",
()=>{

window.print();

}

);



const generateButton =
document.getElementById(
"generate-package"
);



generateButton.addEventListener(
"click",
()=>{


alert(
"Package prepared for review."
);


});


}