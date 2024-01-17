function fiz_S(a, b) {
    var S = a*b;
    return S;
}
function fiz_Ftyazh(massa) {
    var Ftyazh = massa*10;
    return `${Ftyazh}Н`;
}
function fiz_Ves(massa) {
    var Ftyazh = massa*10;
    return `${Ftyazh}Н`;
}
function fiz_Davlen(F, S) {
    var Davlen = F/S;
    return `${Davlen}Па`;
}

function go() {
    var formula = document.getElementById("formula").value;
    var i1 = document.getElementById("first").value;
    var i2 = document.getElementById("second").value;
    if (formula === "S") {
        document.getElementById("output").innerHTML = `Площадь (S) равна ${fiz_S(i1, i2)} (${i1}*${i2})`;
    }
    else if (formula === "Ftyazh") {
        document.getElementById("output").innerHTML = `Fтяж равна ${fiz_Ftyazh(i1)} (${i1}*10)`;
    }
    else if (formula === "P") {
        document.getElementById("output").innerHTML = `Вес равен ${fiz_Ves(i1)} (${i1}*10)`;
    }
    else if (formula === "dav") {
        document.getElementById("output").innerHTML = `Давление равно ${fiz_Davlen(i1, i2)} (${i1}/${i2})`;
    }
}