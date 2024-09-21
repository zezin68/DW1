function primo(n){
        let verd = true
        let x = n-1
        if (n<=1){
            console.log(`o numero ${n} nao é primo`)
            return
        }
        while(x>1){
            if(n % x == 0){
                console.log(`o numero ${n} nao é primo`)
                verd = false
                break
            }
            x-- 
        }    
        if (verd == true){
            console.log(`o numero ${n} é primo`)
        }
    }

primo(1)