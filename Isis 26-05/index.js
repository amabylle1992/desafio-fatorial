function calcularFatorial(n) {
    if (n === 0 || n === 1) return 1;
  
    let resultado = 1;
    for (let i = n; i > 1; i--) {
      resultado *= i;
    }
    return resultado;
  }
  
  console.log(calcularFatorial(7)); // Retorna 120
  