// UPPGIFT 2

{
    var x = 1
    let y = 2
    const z = 3
    
    console.log(z);
}


/* 
REFLEKTION UPPGIFT 2

1. Skillnaden mellan var, let och const gällande block:
Var tar inte hänsyn till om det är ett block eller inte.
Var fungerar både inom blocket och utanför.
Skriver man däremot let eller const inom ett block så stannar det inom blocket.

2. Skriver man console.log() innan blocket så blir det undefined.
Eftersom det läses in uppifrån och ned och ingenting är skrivet ännu.

var: 
Det fungerar att skriva console.log(x) både inom blocket och efter. 

let och const:
Går endast att placera console.log() inom blocket.
Allt som är utanför är undefined.
Det som skrivs inom blocket blir endast tillgängligt inom blocket.
*/

// UPPGIFT 3

console.log("3" == 3); // true
console.log("3" === 3); // false

console.log(NaN === NaN); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(undefined ? "truthy" : "falsy"); // falsy

/*
REFLEKTION UPPGIFT 3
1. 
=== är en strikt jämförelse och det vi föredrar att använda för att vara säker på att det blir rätt.
Används == så kan det ibland bli buggar eftersom det ibland sker konvertering.

Exempel:

console.log("3" == 3); Här konverteras strängen till ett tal, som gör att det blir true.
console.log("3" === 3); Här blir det mer strikt att en sträng och ett tal inte är likamed varandra.

console.log(NaN === NaN); NaN kan aldrig vara lika med sig själv, eftersom det inte är ett giltligt nummer.

console.log(null == undefined); null är ett tomt värde och blir då konverterat till odefinierat, som gör att det blir true.
console.log(null === undefined); Här är det mer strikt. null är tilldelad men saknar ett värde, därför kan det inte vara undefined.

2.
Om uttrycket står för sig själv utan att jämföras med något annat värde blir detta falsy.
falsy innebär tomma värden. Tex. undefined, NaN, null, 0.
Dessa kommer inte köras.
Har uttrycket istället ett värde så kommer detta köras och innehär att det är truthy.

Det är inte samma sak som booleans true/false.

3.
NaN: "Not a number" NaN tillhör typen nummer men är inte ett giltlig nummer.
undefined: är inte tilldelad.
null: är tilldelad men saknar värde.
*/

// UPPGIFT 4

const greet = (name) => "Hej "+name;
console.log(greet("Sandra"));

let name = "Hej Jakob"
console.log(name);

/*
REFLEKTION UPPGIFT 4

1. 
Funktionsdeklaration: 
function greet(name){
    return "Hej "+name;
}
Används vid vanliga funktioner som kan användas på flera ställen. 
Man skapar funktionen innan koden körs. Kan anropas både före och efter.

Funktionsuttryck:
const greet = function(name){
    return "Hej "+name;
} 
Skapar funktionen som ett värde och lagrar den i variabeln.

Arrowfunktion:
const greet = (name) => "Hej "+name;

Bra vid kortare funktioner.

Jag valde att göra en arrowfunktion eftersom det passar bra vid kortare funktioner, 
som tex vid hälsningar. 

2.
När man gör en funktionsdeklaration så skapas funktionen innan koden körs.
Det innebär att man kan anropa funktionen både för och efter.
Funktionsuttryck och arrowfunktioner kan bara anropas efter att de har skapats.

3.
När man skapar en variabel i en funktion så gäller den varibeln endast inom den funktionen.
Därför kan man skapa och ändra variabler utanför funktionen utan att det påverkar det som är innanför funktionen.
Det innebär att flera variabler kan ha samma namn eftersom de ligger i olika scope.
Global scope = utanför funktioner
Lokal scope = innanför funktioner 

4.
Parameter = När man skapar en funktion så gör man en platshållare för ett värde som funktionen ska ta emot. 
Detta skriv inom paranteser.
Variabel = Ett namn på ett lagrat värde
Argument = Det är det värde som skickas in i funktionen inom paranteserna när man anropar.
*/