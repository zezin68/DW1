function sumArray(arr){
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum
}

function findMax(arr){
    maior=arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>maior){
            maior=arr[i]
        }
    }
    return maior
}

function countOccurrences(arr, element){
    num = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==element){
            num+=1
        }
    }
    return num
}

function allEquals(arr){
    if(countOccurrences(arr,arr[0])==arr.length){
        return true
    }
    else{
        return false
    }
}

function removeDuplicates(arr){
    resultado = []
    for (let i = 0; i < arr.length; i++) {
        if(countOccurrences(resultado,arr[i])==0){
            resultado[resultado.length]=arr[i]
        }
    }
    return resultado
}

function average(arr){
    return sumArray(arr)/arr.length
}

function mergeArrays(arr1, arr2){
    resultado = []
    for (let i = 0; i < arr1.length; i++) {
        resultado[resultado.length]=arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        resultado[resultado.length]=arr2[i]
    }
    return resultado
}

function getEvenNumbers(arr){
    resultado = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            resultado[resultado.length]=arr[i]
        }
    }
    return resultado
}

function reverseArray(arr){
    resultado = []
    for (let i = arr.length-1; i >=0; i--){
        resultado[resultado.length]=arr[i]
    }
    return resultado
}

function findIndex(arr, element){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==element){
            return i
        }
    }
    return -1
}
