const planetsOrderFromSun = new Set();
planetsOrderFromSun.add("Mercury")
planetsOrderFromSun.add("Venus").add('Earth').add('Mars'); // Chainable Method
console.log(planetsOrderFromSun.has('Earth')) // true

planetsOrderFromSun.delete('Mars');
console.log(planetsOrderFromSun.has('Mars'));

for(const x of planetsOrderFromSun){
  console.log(x); // same order in as out - Mercury Venus Earth
}
console.log(planetsOrderFromSun.size); // 3

planetsOrderFromSun.add('Venus'); // Trying to add duplicate
console.log(planetsOrderFromSun.size); // Still 3, did not add duplicate

planetsOrderFromSun.clear();
console.log(planetsOrderFromSun.size); // 0
