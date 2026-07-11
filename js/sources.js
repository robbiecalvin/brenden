// Research Sources Module


export async function loadSources(){


const response =
await fetch("../data/sources.json");


const data =
await response.json();


renderSources(data);


}



function renderSources(data){


const container =
document.getElementById(
"sources-container"
);



container.innerHTML = `


<div class="sources-grid">


${

data.categories.map(category=>`


<section class="source-category">


<h2>
${category.title}
</h2>


<p>
${category.description || ""}
</p>



${

category.sources.map(source=>`


<div class="source-card">


<h3>
${source.organization}
</h3>



<p>

<strong>
Type:
</strong>

${source.type}

</p>



<p>

<strong>
Importance:
</strong>

${source.importance}

</p>



<h4>
Research Topics
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



${
source.url ?

`

<a href="${source.url}" target="_blank">

View Source

</a>

`

:

""

}



</div>



`).join("")

}


</section>


`).join("")

}


</div>


`;



}