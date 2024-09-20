export function welches_BMI_hat_der_nutzer(index)
{
    switch(index)
    {
        case 6:
            console.log("\nAdipositas Grad 3\n");
            break;
        case 5:
            console.log("\nAdipositas Grad 2\n");
            break;
        case 4:
            console.log("\nAdipositas Grad 1 (Starkes Übergewicht)\n");
            break;
        case 3:
            console.log("\nÜbergewicht\n");
            break;
        case 2:
            console.log("\nNormalgewicht\n");
            break;
        case 1:
            console.log("\nUntergewicht\n");
            break;
        default:
            console.log("\nUngültige Eingabe!\n");
            break;
    }
}