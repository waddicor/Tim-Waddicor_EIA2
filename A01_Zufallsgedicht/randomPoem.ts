namespace randomPoem {
    //Arrays mit den Informationen
   let name: string[] = ["Harry", "Larry", "Gary", "Barry", "Sherry", "Cherry"];
   let whattodo: string[] = ["reads", "frees", "sees", "skis", "squeezes", "freezes"];
   let thing: string[] = ["a forrest of trees", "several bank fees", "fat cheese", "oh geez", "some knees", "lots of lost keys"];
   let satz: string = "";

    //console.log(name[1], whattodo, thing);
    //For schleife welche die Laufvariable Rückwärts zählt; Ausgehend von der länge des Arrays
   for (let i: number = 6; i <= thing.length; i--) {
        if (i == 0) {
            break;
        }
        //console.log(i);
        getVerse(name, whattodo, thing, satz);
    }

//unterstrich als präfix entsprechend den Styleguide
   function getVerse (_name: string[], _whattodo: string[], _thing: string[], _satz: string ): string {
    //console.log("alohomara");
    // Math.random zufallszahl wird erzeugt, wird mir der länge des übergebenen name-Array
    // math.floor nachkommastelle wird abgeschnitten
    // splice schneidet ein Wort aus dem Array aus, wird zu dem vers addiert.
let zufallname: number = Math.floor(Math.random() * _name.length);
_satz += _name.splice(zufallname, 1) + " ";

let zufalltodo: number = Math.floor(Math.random() * _name.length);
_satz += _whattodo.splice(zufalltodo, 1) + " ";

let zufallthing: number = Math.floor(Math.random() * _name.length);
_satz += _thing.splice(zufallthing, 1) + " ";

console.log(_satz);
return _satz;
}
}