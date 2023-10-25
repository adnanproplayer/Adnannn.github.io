let angka1 = parseInt(prompt(`pilih angka pertama`));

let operator = prompt(`pilih operator +, -, *, /,`);

let angka2 = parseInt(prompt(`pilih angka kedua`));

if (operator === '+') {
    alert(`hasilnya adalah ${angka1 + angka2}`)
} else if (operator === '-') {
    alert(`hasilnya adalah ${angka1 - angka2}`);
} else if (operator === '*') {
    alert(`hasilnya adalah ${angka1 * angka2}`);
} else if (operator === '/') {
    alert(`hasilnya adalah ${angka1 / angka2}`);
} else{
    alert(`undefined`)
}