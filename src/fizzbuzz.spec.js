import fizzbuzz from "./fizzbuzz";
describe("FizzBuzz", () => {
    it("genera para un solo numero", () => {
      expect(fizzbuzz(1)).toEqual('1');
    });
    it("genera para otro numero",()=>{
        expect(fizzbuzz(2)).toEqual("2");
    });
});
