let req = new XMLHttpRequest();
const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = "DEMO_KEY";
const params = "&start_date=2024-02-01&end_date"

function loadpage(){
    req.open("GET", url + api_key + params);
    req.send();
}

/*
req.open("GET", url + api_key + params);
req.send();
*/

function loadimage(hdimage){
    document.getElementById("hdimage").src = hdimage;
}

req.addEventListener("load", function(){
    if(req.status == 200 && req.readyState == 4){
    const response = JSON.parse(req.responseText);
    
    console.log(response);
    const count = response.length;
    let divs=""; 
    for(let i=0; i<count; i++)
    {
    divs+= `
    <div class="col">
    <div class="card" style="width: 20rem;">
            <img class="card-img-top" id="pic" src="${response[i].url}" 
            alt="NASA Picture Of The Day" 
            width="100%" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            onclick="loadhdimage(${response[i].hdurl})">
        <div class="card-header">
                <h1 class="card-title">NASA Asstronomy Pivture Of The Day</h1>
        </div>

        <div class="card-body">
            <h2 class="card-subtitle" id="title">${response[i].title}</h2>
            <h3 class="card-subtitle">Date:${response[i].date}<span id="date"></span></h3>
            <p class="card-text" id="explanation">${response[i].explanation}</p>
        </div>
    </div>
    </div>
    `;
    }
    console.log(divs)
    document.getElementById("planets").innerHTML += divs;
    
    /*
    document.getElementById("title").textContent = response[0].title;
    document.getElementById("date").textContent = response[0].date;
    document.getElementById("pic").src = response.url;
    document.getElementById("title").textContent = response.explanation;
    */
    }
})


