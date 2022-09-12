function processActivities(event){
    event.preventDefault();
    const diaryEntry = document.getElementById("diary").value;
    document.getElementById('myActivities').innerHTML += `<li>${diaryEntry}</li>`;
}

document.getElementById('activitySubmit').addEventListener('click', processActivities);