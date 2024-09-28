function anobi(ano){
    if (ano % 400 == 0){
        console.log(`O ano ${ano} é um ano bissexto`)
    }
    else if ( ano % 4 == 0 && ano % 100 != 0){
        console.log(`O ano ${ano} é um ano bissexto`)
    }
    else{
        console.log(`O ano ${ano} NÃO é um ano bissexto`)
    }
}
anobi(404)