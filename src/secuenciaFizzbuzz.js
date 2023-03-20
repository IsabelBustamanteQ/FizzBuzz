import fizzbuzz from "./fizzbuzz";

function SecuenciaFizzBuzz(num){
var secuencia="";
for(var i=1;i<=num;i++)
    {
        secuencia=secuencia+" "+fizzbuzz(i);
    }
return secuencia;
}
export default SecuenciaFizzBuzz;