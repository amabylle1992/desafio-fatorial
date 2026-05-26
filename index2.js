function calcularFatorial(n) {
  if (n < 0) return "Não existe fatorial de número negativo!";
  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcularFatorial(5)); // Retorna 120
