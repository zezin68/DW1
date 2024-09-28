function idade(n) {
    if (n >= 5 && n <= 7) {
        console.log("Infantil A");
    } else if (n >= 8 && n <= 10) {
        console.log("Infantil B");
    } else if (n >= 11 && n <= 13) {
        console.log("Juvenil A");
    } else if (n >= 14 && n <= 17) {
        console.log("Juvenil B");
    } else {
        console.log("Adulto");
    }
}

idade(14);