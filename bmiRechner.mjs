import * as arbeiter from "./verarbeitendeFunktionen.mjs";
import * as sprecher from "./ausgabe.mjs";

import promptSync from 'prompt-sync';

const prompt = promptSync();

const geschlecht = prompt("Sind Sie Männlich oder Weiblich? ");
const gewicht = prompt("Bitte geben Sie ihr Gewicht in kg ein: ");
const groesse = prompt("Geben Sie ihre Größe in Meter ein: ");

function erfrageNutzerDaten(geschlecht,gewicht,groesse)
{
    var output = arbeiter.berechneBMI(geschlecht,gewicht,groesse);
    return output;
}

var resultat = erfrageNutzerDaten(geschlecht,gewicht,groesse);

sprecher.welches_BMI_hat_der_nutzer(resultat);

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