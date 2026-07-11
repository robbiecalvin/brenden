export async function loadSources(){


const response =
await fetch(
"../data/sources.json"
);



const data =
await response.json();



const container =
document.getElementById(
"sources-container"
);



container.innerHTML = `


<div class="sources-header">


<h1>
${data.meta.title}
</h1>


<p>
${data.meta.purpose}
</p>


</div>



<div class="sources-grid">


${

data.categories.map(category=>`



<section class="source-category">


<h2>
${category.title}
</h2>


<p>
${category.description}
</p>




${

category.sources.map(source=>`


<div class="source-card">


<h3>
${source.organization}
</h3>


<p>
<strong>Type:</strong>
${source.type}
</p>


<p>
<strong>Importance:</strong>
${source.importance}
</p>



<h4>
Topics
</h4>


<ul>

${

source.topics.map(topic=>`

<li>
${topic}
</li>

`).join("")

}

</ul>



<h4>
Supports
</h4>


<ul>

${

source.supports.map(item=>`

<li>
${item}
</li>

`).join("")

}

</ul>



${source.related_documents ? `

<h4>
Related Documents
</h4>


<ul>

${

source.related_documents.map(doc=>`

<li>
📄 ${doc}
</li>

`).join("")

}

</ul>

` : ""}



${source.action_items ? `

<h4>
Action Items
</h4>


<ul>

${

source.action_items.map(action=>`

<li>
☐ ${action}
</li>

`).join("")

}

</ul>

` : ""}



</div>



`).join("")

}


</section>



`).join("")

}


</div>


`;



}