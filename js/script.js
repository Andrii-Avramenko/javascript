// && Логічне "і"   
// потрібно щоб всі операнди були істинними (truthy)
//  Якщо хоча б один з операндів буде приведений до false, то результатом виразу буде цей операнд
// (спіткається на брехні/неправдивому твердженні і повертає те, на чому спіткнувся або останній операнд)

// console.log(Boolean(('')))   //false
// console.log(Boolean((0)))   //false
// console.log(Boolean((null)))   //false
// console.log(Boolean((undefined)))   //false
// console.log(Boolean((NaN)))   //false
// console.log(Boolean((false)))   //false

// result = 10 && 30 && 69;
// console.log(result);

// bobmardillo crocodillo

// const result2 = false && "Hello bobmardillo crocodillo!"
// console.log(result2);

// const result3 = 10 && 30 && "20";
// console.log(result3)#

const result4 = 0 && 42;
console.log(result4)

// більше 1?