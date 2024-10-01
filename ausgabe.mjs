export function ausgabe_bmi_mann(bmiMann)
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
    switch(true)
    {
        case (bmiMann < 20):
            console.log("\nBMI: " + Math.round(bmiMann * 100) / 100);
            console.log("\nUntergewicht\n");
            break;
        case (bmiMann < 25):
            console.log("\nBMI: " + Math.round(bmiMann * 100) / 100);
            console.log("\nNormalgewicht\n");
            break;
        case (bmiMann < 30):
            console.log("\nBMI: " + Math.round(bmiMann * 100) / 100);
            console.log("\nÜbergewicht\n");
            break;
        case (bmiMann < 35):
            console.log("\nBMI: " + Math.round(bmiMann * 100) / 100);
            console.log("\nAdipositas Grad 1 (Starkes Übergewicht)\n");
            break;
        case (bmiMann < 40):
            console.log("\nBMI: " + Math.round(bmiMann * 100) / 100);
            console.log("\nAdipositas Grad 2\n");
            break;
        case (bmiMann >= 40):
            console.log("\nBMI: " + Math.round(bmiMann * 100) / 100);
            console.log("\nAdipositas Grad 3\n");
            break;
        default:
            console.log("\nBitte überprüfen sie Ihre Eingabe\n");
            break;
    }
}

export function ausgabe_bmi_frau(bmiFrau)
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
    switch(true)
    {
        case (bmiFrau < 19):
            console.log("\nBMI: " + Math.round(bmiFrau * 100) / 100);
            console.log("\nUntergewicht\n");
            break;
        case (bmiFrau < 24):
            console.log("\nBMI: " + Math.round(bmiFrau * 100) / 100);
            console.log("\nNormalgewicht\n");
            break;
        case (bmiFrau < 30):
            console.log("\nBMI: " + Math.round(bmiFrau * 100) / 100);
            console.log("\nÜbergewicht\n");
            break;
        case (bmiFrau < 35):
            console.log("\nBMI: " + Math.round(bmiFrau * 100) / 100);
            console.log("\nAdipositas Grad 1 (Starkes Übergewicht)\n");
            break;
        case (bmiFrau < 40):
            console.log("\nBMI: " + Math.round(bmiFrau * 100) / 100);
            console.log("\nAdipositas Grad 2\n");
            break;
        case (bmiFrau >= 40):
            console.log("\nBMI: " + Math.round(bmiFrau * 100) / 100);
            console.log("\nAdipositas Grad 3\n");
            break;
        default:
            console.log("\nBitte überprüfen sie Ihre Eingabe\n");
            break;
    }
}