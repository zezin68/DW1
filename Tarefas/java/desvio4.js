function desvio4(cond1, cond2, cond3) {
    const key = (cond1 ? 1 : 0) << 2 | (cond2 ? 1 : 0) << 1 | (cond3 ? 1 : 0);

    switch (key) {
        case 7: 
            console.log("Opçao 1");
            break;
        case 6: 
            console.log("Opçao 2");
            break;
        case 5: 
            console.log("Opçao 3");
            break;
        case 4: 
            console.log("Opçao 4");
            break;
        case 3: 
            console.log("Opçao 5");
            break;
        case 2: 
            console.log("Opçao 6");
            break;
        case 1: 
            console.log("Opçao 7");
            break;
        case 0: 
            console.log("Opçao 8");
            break;
        default:
            console.log("Nenhuma Opçao correspondente");
    }
}
