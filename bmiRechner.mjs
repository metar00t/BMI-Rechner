import * as arbeiter from "./verarbeitendeFunktionen.mjs";
import * as sprecher from "./ausgabe.mjs";

import promptSync from 'prompt-sync';

const prompt = promptSync();

const geschlecht = prompt("Sind Sie Männlich oder Weiblich? (m/w) ");
// Fehlermeldung wenn der Nutzer dennoch ein "falsches" Geschlecht eingegeben hat
if(geschlecht != "m" && geschlecht != "w")
{
    console.log("In der Klammer sind die Eingabemöglichkeiten genannt.\n");
    process.exit(0);
}
const gewicht = prompt("Bitte geben Sie ihr Gewicht in kg ein: ");
// Fehlermeldung bei einem ungültigem Gewicht
if(gewicht < 0) 
{
    console.log("Dieser Wert ist nicht gültig (Negative Eingabe)\n");
    process.exit(0);
}
const groesse = prompt("Geben Sie ihre Größe in Meter ein: ");
// Fehlermeldung bei einer ungültigen Größe
if(groesse < 0)
{
    console.log("Dieser Wert ist nicht gültig (Negative Eingabe)\n");
    process.exit(0);
}

function erfrageNutzerDaten(geschlecht,gewicht,groesse)
{
    var ausgabe = arbeiter.berechneBMI(geschlecht,gewicht,groesse);
    return ausgabe;
}

var resultat = erfrageNutzerDaten(geschlecht,gewicht,groesse);

if(geschlecht.toLowerCase() == "m")
{
    sprecher.ausgabe_bmi_mann(resultat);
}
else if(geschlecht.toLowerCase() == "w")
{
    sprecher.ausgabe_bmi_frau(resultat);
}

/*  
    Formel zur Berechnung des BMI:
    (Body Mass Index) = Körpergewicht (in kg) / Körpergröße (in m)²

    ----------------------------------------------------------------------------

    Gewichtsklassen / Kategorien -> BMI 
    (Einteilung nach DGE => Deutsche Gesellschaft für Ernährung (1992))
    
    == Männer ==
    
    Untergewicht    <20
    Normalgewicht   20 -> 24,9
    Übergewicht     25 -> 29,9
    Starkes Übergewicht (Adipositas Grad 1)   30 -> 34,9
    Adipositas Grad 2   35 -> 39,9
    Adipositas Grad 3   >40

    == Frauen ==
    
    Untergewicht    <19
    Normalgewicht   19 -> 23,9
    Übergewicht     24 -> 29,9
    Starkes Übergewicht   30 -> 34,9
    Adipositas Grad 2   35 -> 39,9
    Adipositas Grad 3   >40
*/