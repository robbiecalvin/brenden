// Contacts Directory Module


export async function loadContacts(){


    const response =
    await fetch("../data/contacts.json");


    const data =
    await response.json();


    renderContacts(data);


}



function renderContacts(data){


const container =
document.getElementById(
"contacts-container"
);



container.innerHTML = `


<div class="sources-grid">


${

data.categories.map(category=>`


<section class="source-category">


<h2>
${category.title}
</h2>


${

category.contacts.map(contact=>`


<div class="source-card">


<h3>
${contact.name}
</h3>



<p>
<strong>
Category:
</strong>

${contact.category || ""}
</p>



${contact.phone ? `

<p>
<strong>
Phone:
</strong>

<a href="tel:${contact.phone}">
${contact.phone}
</a>

</p>

` : ""}



${contact.email ? `

<p>
<strong>
Email:
</strong>

<a href="mailto:${contact.email}">
${contact.email}
</a>

</p>

` : ""}



<p>

<strong>
Purpose:
</strong>

</p>


<ul>

${

(contact.purpose || [])
.map(item=>`

<li>
${item}
</li>

`)
.join("")

}

</ul>


</div>



`).join("")

}


</section>


`).join("")

}


</div>

`;



}



