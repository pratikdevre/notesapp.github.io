console.log("Created by pratik");



let addButton = document.getElementById("add");
addButton.addEventListener('click', function(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let disc = document.getElementById("disc").value;
    if((title.trim() != "") && (disc.trim() != "")){
        addTxt(title, disc);
    }
    else{
        alert('Write something');
    }
});


function addTxt(title, disc){
    
    const noteTxt = document.getElementById("noteTitle");
    const noteDisc = document.getElementById("noteDisc");
    const cards = document.querySelector(".cards");
    
    // let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
    
    cards.innerHTML +=  `
    <div class="card">
    <div class="title"><h3 id="noteTitle">${title}</h3></div><hr>
    <div class="discription"><p id="noteDisc"> ${disc}</p></div>
    
    <button id="deleteButton" class="delBtn">Delete</button>
    </div>
    `;
    alert("Note added successfully");
    cards.addEventListener('click', function(e){
        let item = e.target;
        console.log(e.target);

        if(item.classList[0] === "delBtn"){
        
            let todo = item.parentElement;
            todo.remove();
            
        }
        
    });
    
}



// alert([month, date, year]);