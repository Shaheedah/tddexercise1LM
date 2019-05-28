//add numbers
describe("Add", function(){
  it("should add two numbers and return 0", function(){
      let result = addNum(0,0);
      expect(result).toBe(0);
  })
    
   it("should add two negative numbers and return -2", function(){
      let result = addNum(-1,-1);
      expect(result).toBe(-2);
  })
     
    
    it("should add two numbers and return 9", function(){
      let result = addNum(4,5);
      expect(result).toBe(9);
  })
    
    
     it("should add two numbers and return 10", function(){
      let result = addNum(1,2,3,4);
      expect(result).toBe(10);
  })
    
  });

//multiply numbers
describe("Multiply", function(){
  it("should multiply two numbers and return 2", function(){
      let result = multiplyNum(1,2);
      expect(result).toBe(2);
  })
    
   it("should multiply numbers and return 24", function(){
      let result = multiplyNum(1,2,3,4);
      expect(result).toBe(24);
  })
});