function maney(){
    const sp = +document.getElementById("ip2").value;
          if (sp == ""){
              alert("Nhap thong tin san pham");
          }
    const dg = +document.getElementById("ip4").value;
          if (dg == ""){
              alert("Nhap thong tin don gia");
          }
            if(dg >= 0) {
                alert("Don gia phai lon hon 0");
            }
    const kq = +document.getElementById("ip1").value;
            document.getElementById("dg").innerHTML="ket qua:" + dg * kq;
}
