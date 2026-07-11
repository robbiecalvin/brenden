export function loadCommunicationLog(){


const container =
document.getElementById(
"communication-container"
);



container.innerHTML = `


<div class="legal-card">


<h2>
New Communication Record
</h2>


<label>

Date

<input type="date">

</label>



<label>

Method

<select>

<option>
Phone
</option>

<option>
Email
</option>

<option>
Text
</option>

<option>
Meeting
</option>

</select>

</label>



<label>

Summary

<textarea

placeholder="Record the communication clearly and factually">

</textarea>


</label>



<button>

Save Record

</button>


</div>



`;



}