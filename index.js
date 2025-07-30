function changefilter(filter='weekly') {
  fetch("./data.json")
    .then(res => res.json())
    .then(data => {
      updatecards(filter, data);
    })
    .catch(err => console.log("Error:", err));
}
changefilter('weekly');

function updatecards(filter, data) {
  data.forEach(item => {
    const name = item.title.toLowerCase().replace(" ", "");
    const hrs = document.getElementById(`${name}hr`);
    const prev = document.getElementById(`${name}pt`);

    if (hrs) hrs.textContent = `${item.timeframes[filter].current}hrs`;

    let period = "";
    if (filter === "daily") period = "Yesterday";
    else if (filter === "weekly") period = "Last Week";
    else if (filter === "monthly") period = "Last Month";
    
    if (prev) prev.textContent = `${period} - ${item.timeframes[filter].previous}hrs`;
  });
}
