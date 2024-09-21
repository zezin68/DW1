function contarprimo(n) {
    let contador = 0;
    let num = 2;
  
    function primo(num) {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    while (contador < n) {
      if (primo(num)) {
        console.log(num);
        contador++;
      }
      num++;
    }
  }
  
  contarprimo(25);
  