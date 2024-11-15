/************************************************
# CONSEGNA
************************************************/

/*
esercizio di oggi: node-hello-world
repo: node-hello-world

Esercizio

1)  Creiamo la prima applicazione con NodeJs e inizializziamola con npm init
2)  Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
3)  Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start
4)  Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run dev e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.
5)  Proviamo a passare da terminale una parola come argomento. da mostrare dopo “Hello”. Dovremo quindi stampare “Hello parola_passata”
*/





/************************************************
# SVOLGIMENTO
************************************************/

/*
STEP SVOLGIMENTO

Creo prima di tutto una cartella vuota (in questo caso in locale, che fungerà da "server")
Apro in vsCode la mia cartella vuota
Apro un nuovo Terminale (che farà riferimento automaticamente alla mia cartella)
Avvio la funzione "npm init" da terminale
Specifico le informazioni per la creazione de "package.json" che sarà creato dalla funzione che ho lanciato
Creo il file "index.js" a cui fa riferimento il mio file JSON
Creo lo SCRIPT "start" all'interno del mio JSON con la funzione che lancia il mio SCRIPT JS
Lancio la funzione "npm run start" da terminale (il risultato sarà ciò che viene scritto nel JS)
Per installare una "dependencies" (che troverò riassunte nel mio JSON) mi basta lanciare dal Terminale "npm i/add/install [stringa per il terminale fornita dal creatore della dependency]"
Lancio la funzione e viene automaticamente creata la Cartella "node_modules" nella mia Repository e aggiunta la Dependency nel mio JSON (in automatico)
La cartella "node_modules" non deve essere MAI caricata su GitHub in quanto pesante. Mi basta che nel JSON siano elencate le Dependencies per "ripescarle" in seguito
SE voglio rimuovere una Dependency, cancello nel JSON la riga di riferimento, e POI lancio dal Terminale "npm i" senza niente a seguito.
Non trovando Bootstrap nelle Dependencies, ma essendoci ancora i Files nella cartella "node_modules", il comando dal terminale procede ELIMINANDO tutti i files di Bootstrap

*/


console.log('CONSOLE LOG DI CONTROLLO: Script index.js eseguito');

console.log('Hello Boolean');

const parola_passata = process.argv[2];

console.log(`Hello ${parola_passata}`);