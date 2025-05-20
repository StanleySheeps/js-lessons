let myName = 'Stanley';
let years = 2025;
let isStudent = true;

console.log(myName, typeof myName);
console.log(years, typeof years);
console.log(isStudent, typeof isStudent);

years = String(years);
console.log(years, typeof years);

function describeVariable(v) {
  console.log('Значение:', v, ', Тип:', typeof v);
}

describeVariable(100);
describeVariable('Hello');
describeVariable(true);
describeVariable(null);
describeVariable(undefined);