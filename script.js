function trascinato(event) {
    event.dataTransfer.setData("text/plain", event.target.dataset.content);
}
function trascinato(event) {
    event.dataTransfer.setData("text/plain", event.target.dataset.content);
}

function rilascioElemento(event) {
    let cella = event.currentTarget;
    let testoElemento = event.dataTransfer.getData("text/plain");
    if (cella.textContent == "X" || cella.textContent == "O") {
        alert("Attenzione! Stai mettendo l'elemento su una cella già occupata.");
    } else {
        cella.textContent = testoElemento;
        if(testoElemento=="X"){
            document.getElementById("X").style.backgroundColor="red";
            document.getElementById("X").style.opacity=0.6;

            document.getElementById("O").style.backgroundColor="black";
            document.getElementById("O").style.opacity=1;

            document.getElementById("X").setAttribute('draggable','false');
            document.getElementById("O").setAttribute('draggable','true');
        }
        else{
            document.getElementById("O").style.backgroundColor="red";
            document.getElementById("O").style.opacity=0.6;

            document.getElementById("X").style.backgroundColor="black";
            document.getElementById("X").style.opacity=1;

            document.getElementById("O").setAttribute('draggable','false');
            document.getElementById("X").setAttribute('draggable','true');
        }
    }
    
    Vittoria();
}

function resettaGioco() {
    let celle = document.getElementsByClassName("cella");
    for (let i = 0; i < celle.length; i++) {
        celle[i].textContent = "";
        celle[i].style.backgroundColor="black";
       
    } 
    document.getElementById("X").style.backgroundColor="black";
    document.getElementById("X").style.opacity=none;
    document.getElementById("O").style.backgroundColor="black";
    document.getElementById("O").style.opacity=none;
}


function Vittoria() {
    // Seleziona tutte le celle con classe "cella"
    const celle = document.getElementsByClassName("cella");
    
    // Organizza gli elementi in un array bidimensionale per rappresentare il campo di gioco
    const campo = [];
    let rigaAttuale = [];
    for (let cella of celle) {
        rigaAttuale.push(cella);
        if (rigaAttuale.length === 3) {
            campo.push(rigaAttuale);
            rigaAttuale = [];
        }
    }

    // Controlla righe e colonne per determinare la vittoria
    for (let i = 0; i < 3; i++) {
        // Controlla righe
        if (campo[i][0].textContent !== "" &&
            campo[i][0].textContent === campo[i][1].textContent &&
            campo[i][1].textContent === campo[i][2].textContent) {
            // Se c"è una riga vincente, evidenzia le celle
            campo[i][0].style.backgroundColor = "green";
            campo[i][1].style.backgroundColor = "green";
            campo[i][2].style.backgroundColor = "green";
        }
        // Controlla colonne
        if (campo[0][i].textContent !== "" &&
            campo[0][i].textContent === campo[1][i].textContent &&
            campo[1][i].textContent === campo[2][i].textContent) {
            // Se c"è una colonna vincente, evidenzia le celle
            campo[0][i].style.backgroundColor = "green";
            campo[1][i].style.backgroundColor = "green";
            campo[2][i].style.backgroundColor = "green";
        }
    }

    // Controlla diagonali per determinare la vittoria
    // Diagonale in alto a sinistra fino in basso a destra
    if (campo[0][0].textContent !== "" &&
        campo[0][0].textContent === campo[1][1].textContent &&
        campo[1][1].textContent === campo[2][2].textContent) {
        // Se c"è una diagonale vincente, evidenzia le celle
        campo[0][0].style.backgroundColor = "green";
        campo[1][1].style.backgroundColor = "green";
        campo[2][2].style.backgroundColor = "green";
    }
    // Diagonale in alto a destra fino in basso a sinistra
    if (campo[0][2].textContent !== "" &&
        campo[0][2].textContent === campo[1][1].textContent &&
        campo[1][1].textContent === campo[2][0].textContent) {
        // Se c"è una diagonale vincente, evidenzia le celle
        campo[0][2].style.backgroundColor = "green";
        campo[1][1].style.backgroundColor = "green";
        campo[2][0].style.backgroundColor = "green";
    }
}
