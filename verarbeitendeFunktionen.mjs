export function berechneBMI(geschlecht,gewicht,groesse)
{
    // Komma zu Punkt konvertierung nach der Nutzereingabe
    if(groesse.includes(","))
    {
        groesse = groesse.replace(",",".");
    }

    if(gewicht.includes(","))
    {
        gewicht = gewicht.replace(",",".");
    }

    // Ermitteln welches Geschlecht eingegeben wurde
    if(geschlecht.toLowerCase() == "m")
    {
        var bmiMann = gewicht / Math.pow(groesse, 2);
        return bmiMann;
    }
    else if(geschlecht.toLowerCase() == "w")
    {
        var bmiFrau = gewicht / Math.pow(groesse, 2);
        return bmiFrau;
    }
}