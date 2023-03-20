import fizzbuzz from "./fizzbuzz";
import SecuenciaFizzBuzz from "./secuenciaFizzbuzz";
describe("FizzBuzz", () => {
    it("genera para un solo numero", () => {
      expect(fizzbuzz(1)).toEqual('1');
    });
    it("genera para otro numero",()=>{
        expect(fizzbuzz(2)).toEqual("2");
    });
    it("genera Fizz para 3",() =>{
        expect(fizzbuzz(3)).toEqual("Fizz");
    });
    it("genera Fizz multiplo de  3",() =>{
        expect(fizzbuzz(6)).toEqual("Fizz");
    });
    it("genera Buzz para 5",() =>{
        expect(fizzbuzz(5)).toEqual("Buzz");
    });
    it("genera Buzz para multiplo 5",() =>{
        expect(fizzbuzz(10)).toEqual("Buzz");
    });
    it("generar FizzBuzz para 15", ()=>{
        expect(fizzbuzz(15)).toEqual("FizzBuzz");
    })
    it("genera FizzBuzz para multiplo 3 y 5",() =>{
        expect(fizzbuzz(30)).toEqual("FizzBuzz");
    });
});
