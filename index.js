function solution(str){
 return  rev = str.split("").reverse().join("")
   //en esta funcion primero ocupamaos split para dividir cada elemento por caracter en esta ocacion "" en array, luego reverse para revertir el sentido de cada elemento del array y por ultimo join hace que un array se convierta en string si usamos metodo ""
}

console.log(solution('marcelo'))

//de forma arrow function

const reversion = str => str.split("").reverse().join("")

console.log(reversion('pelota'))