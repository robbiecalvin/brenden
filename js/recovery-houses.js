export async function loadRecoveryHouses(){


const response =
await fetch(
"../data/recovery-houses.json"
);


const data =
await response.json();



const container =
document.getElementById(
"recovery-houses-container"
);



container.innerHTML = `


<section class="recovery-intro">


<h2>
Recovery Housing Options
</h2>


<p>
${data.meta.verification_note}
</p>


</section>




<div class="recovery-grid">


${

data.houses.map(house=>`


<article class="recovery-card">



<div class="recovery-card-header">


<h2>
${house.name}
</h2>


<span class="location">
📍 ${house.city}
</span>


</div>




<div class="recovery-details">


<p>
<strong>Type:</strong>
${house.type}
</p>


<p>
<strong>Gender:</strong>
${house.gender}
</p>


<p>
<strong>LGBTQ+:</strong>
${house.lgbtq_friendly}
</p>


<p>
<strong>Benefits:</strong>
${house.benefit_compatibility}
</p>


<p>
<strong>Cost:</strong>
${house.cost}
</p>



</div>





<div class="recovery-notes">


<h3>
Program Notes
</h3>


<ul>


${

house.notes.map(note=>`

<li>
${note}
</li>

`).join("")

}


</ul>


</div>





<div class="verification-box">


<h3>
LGBTQ+ Safety Review
</h3>


<p>

Status:

<strong>
${house.lgbtq_assessment.verification_level}
</strong>

</p>


<ul>

${

house.lgbtq_assessment.questions_to_ask
.map(question=>`

<li>
${question}
</li>

`).join("")

}

</ul>


</div>





<a 
class="house-button"
href="${house.source}"
target="_blank"
>

Visit Program Website

</a>




</article>



`).join("")

}


</div>


`;



}