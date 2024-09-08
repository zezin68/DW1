function desvio2(cond1, cond2, cond3) {
    console.log("1");
    console.log("2");

    if (cond1) {
        console.log("A");
    } else {
        if (cond2) {
            if (cond3) {
                console.log("B");
            } else {
                console.log("C");
            }
        } else {
            console.log("D");
        }
    }

    console.log("3");
    console.log("4");
}