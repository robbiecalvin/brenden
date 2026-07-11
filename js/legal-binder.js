export function loadBinder(){


const container =
document.getElementById(
"binder-container"
);



container.innerHTML = `


<section class="binder-cover">


<h1>
Trustee Review Preparation Binder
</h1>


<p>
Prepared for independent legal review
</p>


<p>
Date Generated:
${new Date().toLocaleDateString()}
</p>


</section>



<section class="binder-section">


<h2>
Client Summary
</h2>


<p>
Personal summary and legal goals will appear here.
</p>


</section>



<section class="binder-section">


<h2>
Primary Goals
</h2>


<ul>

<li>
Understand trust structure
</li>

<li>
Review trustee options
</li>

<li>
Understand available next steps
</li>

</ul>


</section>



<section class="binder-section">


<h2>
Timeline of Events
</h2>


<table>


<tr>

<th>
Date
</th>

<th>
Event
</th>

</tr>


<tr>

<td>
________
</td>

<td>
Important event
</td>


</tr>


</table>


</section>



<section class="binder-section">


<h2>
Document Checklist
</h2>


<ul>

<li>
☐ Trust agreement
</li>

<li>
☐ Financial records
</li>

<li>
☐ Communication records
</li>

<li>
☐ Identification documents
</li>

</ul>


</section>



<section class="binder-section">


<h2>
Questions For Counsel
</h2>


<ul>

<li>
What options exist regarding trustee arrangements?
</li>

<li>
What documents should be requested?
</li>

<li>
What timelines should be expected?
</li>

</ul>


</section>



<button id="print-binder">

Print Binder

</button>


`;



document
.getElementById(
"print-binder"
)
.addEventListener(
"click",
()=>window.print()
);


}