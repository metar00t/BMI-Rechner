/* 
    Reminder:

    >> BMI = Körpergewicht in kg / Körpergröße in m² <<

*/
export function berechneBMI(geschlecht,gewicht,groesse)
{
    // Falls der Nutzer den Wert als Kommawert eingetragen hat, wird diese für die weitere Verarbeitung mit einem Punkt ausgetauscht
    if(groesse.includes(","))
        {
            groesse = groesse.replace(",",".");
        }

        if(gewicht.includes(","))
        {
            gewicht = gewicht.replace(",",".");
        }
        
    // Ermitteln welches Geschlecht eingegeben wurde
    if(geschlecht.toLowerCase() == "m" || geschlecht.toLowerCase() == "männlich")
    {
        /* 

        == Männer ==
    
        Untergewicht    <20
        Normalgewicht   20 -> 24,9
        Übergewicht     25 -> 29,9
        Starkes Übergewicht (Adipositas Grad 1)   30 -> 34,9
        Adipositas Grad 2   35 -> 39,9
        Adipositas Grad 3   >40
        
        */

        var bmiMann = gewicht / Math.pow(groesse, 2);
        if(bmiMann < 20)
        {
            return 1;
        }
        else if(bmiMann <= 24.9 || bmiMann == 20)
        {
            return 2;
        }
        else if(bmiMann == 25 || bmiMann <= 29.9)
        {
            return 3;
        }
        else if(bmiMann == 30 || bmiMann <= 34.9)
        {
            return 4;
        }
        else if(bmiMann == 35 || bmiMann <= 39.9)
        {
            return 5;
        }
        else if(bmiMann > 40)
        {
            return 6;
        }
    }
    else if(geschlecht.toLowerCase() == "w" || geschlecht.toLowerCase() == "weiblich")
    {
        /*
        == Frauen ==
    
        Untergewicht    <19
        Normalgewicht   19 -> 23,9
        Übergewicht     24 -> 29,9
        Starkes Übergewicht   30 -> 34,9
        Adipositas Grad 2   35 -> 39,9
        Adipositas Grad 3   >40
        
        */
        var bmiFrau = gewicht / Math.pow(groesse, 2);
        if(bmiFrau < 19)
        {
            return 1;
        }
        else if(bmiFrau <= 23.9 || bmiFrau == 19)
        {
            return 2;
        }
        else if(bmiFrau <= 29.9 || bmiFrau == 24)
        {
            return 3;
        }
        else if(bmiFrau <= 34.9 || bmiFrau == 30)
        {
            return 4;
        }
        else if(bmiFrau <= 39.9 || bmiFrau == 35)
        {
            return 5;
        }
        else if(bmiFrau > 40)
        {
            return 6;
        }
    }
}