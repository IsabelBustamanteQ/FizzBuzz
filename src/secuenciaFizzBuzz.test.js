import SecuenciaFizzBuzz from "./secuenciaFizzbuzz";
describe("FizzBuzz", () => {
    it("genera secuencia de 2 numeros",()=>{
        expect(SecuenciaFizzBuzz(2)).toEqual(" 1 2");
    });
    it("genera secuencia de 3 numeros",()=>{
        expect(SecuenciaFizzBuzz(3)).toEqual(" 1 2 Fizz");
    });
    it("genera secuencia de 5 numeros",()=>{
        expect(SecuenciaFizzBuzz(5)).toEqual(" 1 2 Fizz 4 Buzz");
    });
});
