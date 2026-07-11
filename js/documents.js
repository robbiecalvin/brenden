// Document Vault Module


export async function loadDocuments(){


const container =
document.getElementById(
"documents-container"
);



const documents = [

{
title:"Birth Certificate",
category:"Identity",
status:"Needed"
},

{
title:"BC Identification",
category:"Identity",
status:"Needed"
},

{
title:"Treatment Completion Letter",
category:"Recovery",
status:"Needed"
},

{
title:"Trust Documents",
category:"Legal",
status:"Request From Lawyer"
},

{
title:"Banking Information",
category:"Financial",
status:"Needed"
}

];



container.innerHTML = `


<div class="document-list">


${

documents.map(doc=>`

<div class="document-card">


<h2>
${doc.title}
</h2>


<p>
Category:
${doc.category}
</p>


<span>
${doc.status}
</span>


<button>
Mark Complete
</button>


</div>


`).join("")

}


</div>


`;



}