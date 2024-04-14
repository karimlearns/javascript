let the_title = "Elzero", the_desc = "Elzero Web Schhol", the_date = "25/10";

let div = `
    <h3>Hello ${the_title}</h3>
    <p>${the_desc}</p>
    <spanp>${the_date}</span>
`;
let result = div.repeat(4);
document.write(`${result}`);