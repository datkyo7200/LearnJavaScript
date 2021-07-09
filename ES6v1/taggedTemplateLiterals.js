function highlight([a, ...strings], ...values) {
    return values
        .reduce(
            (acc, curr) => {
                return [...acc, `<span>${curr}</span>`, strings.shift()];
            },
            [a]
        )
        .join("");
}
var brand = "F8";
var course = "JavaScript";
const html = highlight`Hoc lap trinh ${course} tai ${brand}!`;
console.log(html);
