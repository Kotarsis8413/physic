function fiz_S(a, b) {
    var S = a*b;
    return S;
}
function fiz_Ftyazh(massa, g) {
    var Ftyazh = massa*parseFloat(g);
    return `${Ftyazh}Н`;
}
function fiz_Ves(massa, g) {
    var Ftyazh = massa*parseFloat(g);
    return `${Ftyazh}Н`;
}
function fiz_Davlen(F, S) {
    var Davlen = F/S;
    return `${Davlen}Па`;
}
function fiz_DavlenZhid(Plot, h, g) {
    var Davlen = Plot*parseFloat(g)*h;
    return `${Davlen}Па`;
}
function fiz_Fupr(K, X) {
    var Fupr = K*X;
    return `${Fupr}Па`;
}

function go() {
    var formula = document.getElementById("formula").value;
    var i1 = document.getElementById("first").value;
    var i2 = document.getElementById("second").value;
    var g = document.getElementById("g").value;
    if (formula === "S") {
        document.getElementById("output").innerHTML = `Площадь (S) равна ${fiz_S(i1, i2)} (${i1}*${i2}) Формула: ab`;
    }
    else if (formula === "Ftyazh") {
        document.getElementById("output").innerHTML = `Fтяж равна ${fiz_Ftyazh(i1, g)} (${i1}*${g}) Формула: mg`;
    }
    else if (formula === "P") {
        document.getElementById("output").innerHTML = `Вес равен ${fiz_Ves(i1, g)} (${i1}*${g}) Формула: mg`;
    }
    else if (formula === "dav") {
        document.getElementById("output").innerHTML = `Давление равно ${fiz_Davlen(i1, i2)} (${i1}/${i2}) Формула: F/S`;
    }
    else if (formula === "davJD") {
        document.getElementById("output").innerHTML = `Давление равно ${fiz_DavlenZhid(i1, i2, g)} (${i1}*${g}*${i2})`;
    }
    else if (formula === "Fupr") {
        document.getElementById("output").innerHTML = `Fупр равно ${fiz_Fupr(i1, i2)} (${i1}*${i2})`;
    }
}