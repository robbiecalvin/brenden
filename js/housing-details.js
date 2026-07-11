// Housing Comparison Module


export async function loadHousingDetails(){


const response =
await fetch("../data/housing-comparison.json");


const data =
await response.json();


renderHousing(data.criteria);


}



function renderHousing(criteria){


const container =
document.getElementById(
"housing-details-container"
);



container.innerHTML = `


<div class="planning-card">


<h2>
Housing Evaluation Checklist
</h2>



${

criteria.map(item=>`

<div class="comparison-item">


<h3>
${item.name}
</h3>


<p>
Importance:
${item.importance}
</p>



<label>

Rating:

<select>

<option>
Not reviewed
</option>

<option>
Poor
</option>

<option>
Okay
</option>

<option>
Good
</option>

<option>
Excellent
</option>

</select>

</label>


</div>


`).join("")

}


</div>


`;



}