1. no side effects : it has no effect on the program or the world besides ouputting its return value
2. deterministic : it always returns the same value for the same input

// This function is 순수하지 않다.
// Because 반복실행할 때마다 다른 값을 반환한다.
function getDate() {
  return new Date().toDateString();
}


// This function is 순수하다.
// Because 같은 입력에 대해 항상 같은 출력을 반환한다. string을 반환하고 원본 데이터를 변경하지 않는다.
function compareDateStrings(s1, s2) {
  const d1 = Date(s1);
  const d2 = Date(s2);
  const delta = d2 - d1;
  return `${s1} is ${delta > 0 ? 'after' : 'before'} ${s2}`
}


// This function is 순수하다.
// Because 같은 입력에 대해 항상 같은 출력을 반환한다. JSON.parse를 통해 원본 데이터를 변경하지 않는다.
const stringToJson = (jsonString) => {
  return JSON.parse(jsonString);
}


// This function is 순수하지 않다.
// Because TODO
const fileToJson = (filename) => {
  const fs = require('fs');
  const fileData = fs.readFileSync(filename, 'utf8');
  return JSON.parse(fileData);
}


// This function is 순수하다.
// Because TODO
function add(a, b) {
  return a + b;
};


// This function is 순수하지 않다
// array는 mutable한 객체. 같은 입력 (같은 객체)이더라도 다른 결과를 반환할 수 있다.
function sum(numArray) {
  let total = 0;
  for (let value of numArray) {
      total += value;
  }
  return total;
};


// This function is 순수하다.
// Because TODO
const logicalXor = (A, B) => (A || B) && !(A && B);


// This function is 순수하다
// Because TODO
const truthTable = (logicalOperator) => {
  const values = [true, false];
  const table = [];
  for (const A of values) {
      for (const B of values) {
          table.push([A, B, logicalOperator(A, B)]);
      }
  }
  return table;
};


// This function is 순수하지 않다.
// Because TODO
const xorTruthTable = () => {
  console.log('XOR truth table:\n================\n');
  const table = truthTable(logicalXor);
  console.log('\tA\t|\tB\t|\tA xor B');
  console.log('\t-----\t|\t-----\t|\t-----');
  table.map(
      ([A, B]) => console.log(`\t${A}\t|\t${B}\t|\t${logicalXor(A, B)}`)
  );
};


// Examples below adapted from
// https://github.com/mapbox/mapbox-sdk-js/blob/master/lib/helpers/url-utils.js

// This function is TODO
// Because TODO
function encodeString(stringValue) {
  return encodeURIComponent(stringValue);
}


// This function is TODO
// Because TODO
function encodeArray(arrayValue) {
  return arrayValue.map(encodeURIComponent).join(',');
}


// This function is TODO
// Because TODO
function encodeValue(value) {
  if (Array.isArray(value)) {
      return encodeArray(value);
  }
  return encodeString(String(value));
}
