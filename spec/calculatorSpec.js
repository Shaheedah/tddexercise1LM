//add numbers
describe("Calculator.add", function(){
    let answer = new Calculator();
  it("should add two numbers and return 0", function(){
      let result = answer.add(0,0);
      expect(result).toBe(0);
  })
    
   it("should add two negative numbers and return -2", function(){
      let result = answer.add(-1,-1);
      expect(result).toBe(-2);
  })
     
    
    it("should add two numbers and return 9", function(){
      let result = answer.add(4,5);
      expect(result).toBe(9);
  })
    
    
     it("should add multiple numbers and return 10", function(){
      let result = answer.add(1,2,3,4);
      expect(result).toBe(10);
  })
    
      it("should add two numbers and return 8", function(){
      let result = answer.add(3,5);
      expect(result).toBe(8);
  })
      it("should add multiple numbers and return 10", function(){
      let result = answer.add(3,5,2);
      expect(result).toBe(10);
  })
    
  });

//multiply numbers
describe("Calculator.multiply", function(){
    let answer = new Calculator();
    it("should multiply two numbers and return 2", function(){
        let result = answer.multiply(1,2);
        expect(result).toBe(2);
    })
    
    it("should multiply numbers and return 24", function(){
        let result = answer.multiply(1,2,3,4);
        expect(result).toBe(24);
    })
    
     it("should two numbers and return 60", function(){
        let result = answer.multiply(30,2);
        expect(result).toBe(60);
    })
});


//last
describe("Calculator last", function(){
    let answer = new Calculator();
    it("should return 2", function(){
        answer.multiply(1,2);
        let result = answer.last();
        expect(result).toBe(2);
    })
    
    it("should return 3", function(){
        answer.add(1,2);
        let result = answer.last();
        expect(result).toBe(3);
    })
    
    it("should return 7", function(){
        answer.add(1,2);
        let result = answer.add(answer.last(), 4);
        expect(result).toBe(7);
    })
    
      it("should return 15", function(){
        answer.add(1,2);
        let result = answer.multiply(answer.last(), 5);
        expect(result).toBe(15);
    })
    
});

//Memory Slots
describe("Calculator numbered memory slots", function(){
    let answer = new Calculator();
    it("should return 3", function(){
        answer.add(1,2);
        answer.set_slot(1);
        let result = answer.get_slot(1)
        expect(result).toBe(3);
    })
  
     it("should return 9", function(){
        answer.add(1,2);
        answer.set_slot(1);
        let result = answer.add(answer.get_slot(1), 6);
        expect(result).toBe(9);
    })
    
     it("should return 12", function(){
        answer.add(1,2);
        answer.set_slot(1);
        let result = answer.multiply(answer.get_slot(1), 4);
        expect(result).toBe(12);
    })
  
  
});