export function loadTimelineBuilder(){


const container =
document.getElementById(
"timeline-builder"
);



container.innerHTML = `


<div class="legal-card">


<h2>
Add Event
</h2>


<label>

Date

<input type="date">

</label>



<label>

Category

<select>

<option>
Communication
</option>

<option>
Payment
</option>

<option>
Document
</option>

<option>
Request
</option>

<option>
Other
</option>


</select>


</label>



<label>

Description

<textarea
placeholder="Describe what happened using facts and dates">
</textarea>


</label>



<button>

Save Event

</button>


</div>


<div class="legal-card">


<h2>
Timeline Entries

</h2>


<p>
Saved events will appear here.
</p>


</div>


`;



}