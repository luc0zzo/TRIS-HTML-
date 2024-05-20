//inizializza un array vuoto per rappresentare la riga attualmente in costruzione
let rigaAttuale = [];

for (let cella of celle) {
    //aggiungi la cella corrente all'array della riga attuale
    rigaAttuale.push(cella);
    //ae la lunghezza della riga attuale raggiunge 3 (numero di colonne del campo)
    if (rigaAttuale.length === 3) {
        //si aggiunge quindi anche l'array della riga attuale all'array del campo
        campo.push(rigaAttuale); //.push serve appunto per appendere un array ad un'altro
        //resetta l'array della riga attuale per iniziare la costruzione di una nuova riga
        rigaAttuale = [];
    }
}

    //controlla righe e colonne la vittoria (PS:l'if l'ho sovrapposto su + righe per semplificare) 
    for (let i = 0; i < 3; i++) {
        // controlla righe
        if (campo[i][0].textContent !== "" &&
            campo[i][0].textContent === campo[i][1].textContent &&
            campo[i][1].textContent === campo[i][2].textContent) {
            //se c'è una riga vincente evidenzia le celle di verde(l'animazione è una transition 0.5s ease-in-out nella classe "cella")
            campo[i][0].style.backgroundColor = "green";
            campo[i][1].style.backgroundColor = "green";
            campo[i][2].style.backgroundColor = "green";
             //per l'avviso di vittoria
        if(campo[i][1].textContent=="X"){
            avviso.innerHTML="X ha vinto la partita!!";
        }
        else{
            avviso.innerHTML="O ha vinto la partita!!";
            console.log("b");
        }
        }
        //controlla colonne
        if (campo[0][i].textContent !== "" &&
            campo[0][i].textContent === campo[1][i].textContent &&
            campo[1][i].textContent === campo[2][i].textContent) {
            //se c'è una colonna vincente evidenzia le celle di verde
            campo[0][i].style.backgroundColor = "green";
            campo[1][i].style.backgroundColor = "green";
            campo[2][i].style.backgroundColor = "green";
             //per l'avviso di vittoria
        if(campo[1][i].textContent=="X"){
            avviso.innerHTML="X ha vinto la partita!!";
        }
        else{
            avviso.innerHTML="O ha vinto la partita!!";
            console.log("a");
        }
        }
    }

    // controlla diagonali per determinare la vittoria
    // diagonale in alto a sinistra fino in basso a destra
    if (campo[0][0].textContent !== "" &&
        campo[0][0].textContent === campo[1][1].textContent &&
        campo[1][1].textContent === campo[2][2].textContent) {
        // se c'è una diagonale vincente evidenzia le celle di verde
        campo[0][0].style.backgroundColor = "green";
        campo[1][1].style.backgroundColor = "green";
        campo[2][2].style.backgroundColor = "green";
         //per l'avviso di vittoria
         if(campo[1][1].textContent=="X"){
            avviso.innerHTML="X ha vinto la partita!!";
        }
        else{
            avviso.innerHTML="O ha vinto la partita!!";
        }
    }
    // diagonale in alto a destra fino in basso a sinistra
    if (campo[0][2].textContent !== "" &&
        campo[0][2].textContent === campo[1][1].textContent &&
        campo[1][1].textContent === campo[2][0].textContent) {
        // se c'è una diagonale vincente evidenzia le celle di verde
        campo[0][2].style.backgroundColor = "green";
        campo[1][1].style.backgroundColor = "green";
        campo[2][0].style.backgroundColor = "green";
        //per l'avviso di vittoria
        if(campo[1][1].textContent=="X"){
            avviso.innerHTML="X ha vinto la partita!!";
        }
        else{
            avviso.innerHTML="O ha vinto la partita!!";
        }
    }
}

