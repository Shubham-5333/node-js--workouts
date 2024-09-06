// x=20
// console.log(x);
// var x;

function* generateEvenNumbers() {
    let num = 0;
    while (true) {
      yield num;
      num += 2;
    }
  }
  
  // Create a generator object
  const evenNumberGenerator = generateEvenNumbers();
  
  // Generate the first 5 even numbers
  for (let i = 0; i < 5; i++) {
    console.log(evenNumberGenerator.next().value);
  }
  

const obj = {
    name: 'John',
    age: 30
};
Object.seal(obj);

obj.age = 40;
obj.city = "UP";
// Won't change the value
console.log(obj); // Output: 30
