// js/resources.js


export async function loadResources(){


const response =
await fetch("../data/recovery-houses.json");


const data =
await response.json();


renderResources(data.houses);


}



function renderResources(houses){


const container =
document.getElementById(
"resources-container"
);



container.innerHTML = `


<div class="filter-bar">

<select id="location-filter">

<option value="all">
All Locations
</option>


<option value="British Columbia">
British Columbia
</option>


<option value="Lloydminster">
Lloydminster
</option>


</select>



<select id="type-filter">

<option value="all">
All Types
</option>


<option value="Recovery Housing">
Recovery Housing
</option>


<option value="Sober Living">
Sober Living
</option>


</select>


</div>



<div id="housing-results">

</div>


`;



displayHouses(houses);



setupFilters(houses);


}




function displayHouses(houses){


const results =
document.getElementById(
"housing-results"
);



results.innerHTML =
houses.map(
house=>createCard(house)
)
.join("");



}





function createCard(house){


return `


<article class="housing-card">


<h2>
${house.name}
</h2>


<p class="location">

📍 ${house.location}

</p>


<div class="details">


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
<strong>After Treatment:</strong>

${house.post_treatment ? "Yes" : "No"}

</p>


</div>



<div class="notes">

${

house.notes.map(
note=>`

<p>
• ${note}
</p>

`
).join("")

}

</div>



<a 
href="${house.source}"
target="_blank">

Visit Website

</a>



</article>


`;

}





function setupFilters(houses){


const location =
document.getElementById(
"location-filter"
);



const type =
document.getElementById(
"type-filter"
);



function filter(){


let filtered =
houses;


if(location.value !== "all"){


filtered =
filtered.filter(
house=>
house.location.includes(
location.value
)
);


}



if(type.value !== "all"){


filtered =
filtered.filter(
house=>
house.type === type.value
);

}



displayHouses(filtered);


}



location.addEventListener(
"change",
filter
);



type.addEventListener(
"change",
filter
);


}