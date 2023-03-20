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
    it("genera secuencia de 6 numeros",()=>{
        expect(SecuenciaFizzBuzz(6)).toEqual(" 1 2 Fizz 4 Buzz Fizz");
    });
    it("genera secuencia de 15 numeros",()=>{
        expect(SecuenciaFizzBuzz(15)).toEqual(" 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
    });
});
