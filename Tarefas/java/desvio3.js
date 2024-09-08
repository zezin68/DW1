function desvio3(cond1, cond2, cond3) {
    if (cond1) {
        if (cond2) {
            if (cond3) {
                console.log("Opçao 1");
            } else {
                console.log("Opçao 2");
            }
        } else {
            if (cond3) {
                console.log("Opçao 3");
            } else {
                console.log("Opçao 4");
            }
        }
    } else {
        if (cond2) {
            if (cond3) {
                console.log("Opçao 5");
            } else {
                console.log("Opçao 6");
            }
        } else {
            if (cond3) {
                console.log("Opçao 7");
            } else {
                console.log("Opçao 8");
            }
        }
    }
}