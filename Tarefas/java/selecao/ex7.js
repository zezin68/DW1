function compensa(valc,vgas){
    comp = valc/vgas
    if (comp < 0.7){
        console.log("Compensa")
        return true
    }
    else{
        console.log("NAO Compensa")
        return false
    }
}
compensa(69,100)