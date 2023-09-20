function click1() {
    const x = +document.getElementById("money").value;
    const y = +document.getElementById("text_from1").value;
    const z = +document.getElementById("text_from2").value;
    const result = x * z / y;
    document.getElementById('rs').innerHTML= "Ket qua:" + result;
}
