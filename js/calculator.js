function calculator() {
    let doc = document;

    let value1 = Number(doc.getElementById("num1").value);
    let value2 = Number(doc.getElementById("num2").value);

    let resultBar = doc.getElementById("result-span").innerHTML;

    const plus = doc.getElementById("plus"); 
    const minus = doc.getElementById("minus"); 
    const times = doc.getElementById("times"); 
    const divide = doc.getElementById("divide"); 

    if (plus.checked) {
        let result = value1 + value2;
        doc.getElementById("result-span").innerHTML = result
    } else if (minus.checked) {
        let result = value1 - value2;
        doc.getElementById("result-span").innerHTML = result
    } else if (times.checked) {
        let result = value1 * value2;
        doc.getElementById("result-span").innerHTML = result
    } else if (divide.checked) {
        let result = value1 / value2;
        doc.getElementById("result-span").innerHTML = result
    }
}