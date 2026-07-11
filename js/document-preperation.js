export async function loadDocumentPreparation(){


const response =
await fetch("../data/legal/document-library.json");


const data =
await response.json();


const container =
document.getElementById(
"documents-prep-container"
);



container.innerHTML = data.categories.map(category=>`


<div class="legal-card">


<h2>
${category.name}
</h2>


${category.documents.map(doc=>`

<label>

<input type="checkbox">

${doc}

</label>

`).join("")}


</div>


`).join("");



}