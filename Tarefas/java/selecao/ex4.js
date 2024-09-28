function gotas(idade,peso){
    // a cada 20 ml uma gota
    let gotas = 20
    if(idade >= 12){
        if(peso >= 60){
            gotas = gotas * 2
            console.log(`Tome ${gotas} gotas`)
        }
        else{
            let med = 875 - 500
            let gotas = (med/20) + 20
            console.log(`Tome ${gotas} gotas`)
        }
    }
    else{
        if(peso >= 5 && peso <=9){
            let med = 125
            let gotas = med/20
            console.log(`Tome ${gotas} gotas`)
        }
        else if( peso > 9 && peso <=16){
            let gotas = 250/20
            console.log(`Tome ${gotas} gotas`)
        }
        else if( peso > 16 && peso <= 24)
            console.log(`Tome ${gotas} gotas`)
        else {
            let gotas = 750/20
            console.log(`Tome ${gotas} gotas`)

        }
    }

}
gotas(5,20)