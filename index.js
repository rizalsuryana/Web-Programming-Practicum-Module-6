const kategori=["Sosial","Rumah","Apartemen","Industri","Villa"];
const Abodemen=[10000,30000,50000,75000,100000];
const Harga=[300,500,750,1000,1250];
const Pajak=[0,0.10,0.15,0.20,0.25];


var tableData= "<table class='tabel'><tr><th>Kategori</th>";
    tableData+= "<th>Abadomen</th>";
    tableData+="<th>Tarif per KWH</th>";
    tableData+="<th>Pajak</th></tr>"

    
  for (var i=0; i<kategori.length; i++) {
    tableData+="<tr><td>"+kategori[i]+"</td>";
    tableData+="<td>"+Abodemen[i]+"</td>";
    tableData+="<td>"+Harga[i]+"</td>";
    tableData+="<td>"+Pajak[i]+"</td></tr>";
  }  
   tableData+="</table>";

   document.getElementById('form').innerHTML = tableData;

function tagihan(){
    var abodemen=0.0;
    const hargaKWH=[];
    var pajak=0.0;
    const subtotal=[];
 
    var index=1;
    var kategori_=document.getElementById("kategori").value;
    var sumHari=document.getElementById("hari").value;

    var name=document.getElementById("nama").value;
    var dataakhir= "<table class='tbltagihan'><tr><th>Jumlah &nbsp</th>";
    var tagihan=document.getElementById("jumlah_tagihan");
    
    tagihan+="<th>Harga per-KWH &nbsp</th>";
    tagihan+= "<th>Abodemen &nbsp</th>";
    tagihan+="<th>Sub Total &nbsp</th></tr>"

    if(name=="" || sumHari==""){
        alert("Periksa kembali data anda!!");
    }
    else{
        dataakhir+="<th>Harga per KWH &nbsp</th>";
        dataakhir+= "<th>Abodemen &nbsp</th>";
        dataakhir+="<th>Sub Total &nbsp</th></tr>"

        while(index <= sumHari){
            if(kategori_=="sosial"){
                hargaKWH[index]=Harga[0]*index;
                abodemen=Abodemen[0];
                subtotal[index]=Abodemen[0]+hargaKWH[index];
                var pajak_sosial=Pajak[0];
                
                    dataakhir+="<tr><td>"+index+"</td>";
                    dataakhir+="<td>"+hargaKWH[index]+"</td>";
                    dataakhir+="<td>"+Abodemen[0]+"</td>";
                    dataakhir+="<td>"+subtotal[index]+"</td></tr>";
                    
                
                
            }
            else if(kategori_=="rumah"){
                hargaKWH[index]=Harga[1]*index;
                abodemen=Abodemen[1];
                subtotal[index]=Abodemen[1]+hargaKWH[index];
                var pajak_rumah=Pajak[1];
                
                    dataakhir+="<tr><td>"+index+"</td>";
                    dataakhir+="<td>"+hargaKWH[index]+"</td>";
                    dataakhir+="<td>"+Abodemen[0]+"</td>";
                    dataakhir+="<td>"+subtotal[index]+"</td></tr>";
                    
                
            }
            
            else if(kategori_=="apartemen"){
                hargaKWH[index]=Harga[2]*index;
                abodemen=Abodemen[2];
                subtotal[index]=Abodemen[2]+hargaKWH[index];
                var pajak_apartemen=Pajak[2];
                
                    dataakhir+="<tr><td>"+index+"</td>";
                    dataakhir+="<td>"+hargaKWH[index]+"</td>";
                    dataakhir+="<td>"+Abodemen[0]+"</td>";
                    dataakhir+="<td>"+subtotal[index]+"</td></tr>";
                    
                
            }
            
            else if(kategori_=="industri"){
                hargaKWH[index]=Harga[3]*index;
                abodemen=Abodemen[3];
                subtotal[index]=Abodemen[3]+hargaKWH[index];
                var pajak_industri=Pajak[3];
                dataakhir+="<tr><td>"+index+"</td>";
                    dataakhir+="<td>"+hargaKWH[index]+"</td>";
                    dataakhir+="<td>"+Abodemen[0]+"</td>";
                    dataakhir+="<td>"+subtotal[index]+"</td></tr>";
                    
            }
            
            else if(kategori_=="villa"){
                hargaKWH[index]=Harga[4]*index;
                abodemen=Abodemen[4];
                subtotal[index]=Abodemen[4]+hargaKWH[index];
                var pajak_villa=Pajak[4];
                dataakhir+="<tr><td>"+index+"</td>";
                    dataakhir+="<td>"+hargaKWH[index]+"</td>";
                    dataakhir+="<td>"+Abodemen[0]+"</td>";
                    dataakhir+="<td>"+subtotal[index]+"</td></tr>";
                    
            }
            index++;
        }
        var rincian="<h2>Rincian Tagihan</h2>";
    
        
        var jumlah_pajak=0.0;
        dataakhir+="</table>";
         if(kategori_=="sosial"){
            jumlah_pajak=Pajak[0]*subtotal[sumHari];
            dataakhir+="<p>"+"Pajak: &emsp;"+jumlah_pajak+"</p>";
            dataakhir+="<p>"+"Subtotal: &emsp;"+subtotal[sumHari]+"</p>";
            var total=subtotal[sumHari]+jumlah_pajak;
            dataakhir+="<p>"+"Bayar: &emsp;"+total+"</p>";
         

        }
        else if(kategori_=="rumah"){
            jumlah_pajak=pajak_rumah*subtotal[sumHari];
            dataakhir+="<p>"+"Pajak: &emsp;"+jumlah_pajak+"</p>";
            dataakhir+="<p>"+"Subtotal: &emsp;"+subtotal[sumHari]+"</p>";
            var total=subtotal[sumHari]+jumlah_pajak;
            dataakhir+="<p>"+"Bayar: &emsp;"+total+"</p>";
         
        }
        else if(kategori_=="apartemen"){
            jumlah_pajak=Pajak[2]*subtotal[sumHari];
            dataakhir+="<p>"+"Pajak: &emsp;"+jumlah_pajak+"</p>";
            dataakhir+="<p>"+"Subtotal: &emsp;"+subtotal[sumHari]+"</p>";
            var total=subtotal[sumHari]+jumlah_pajak;
            dataakhir+="<p>"+"Bayar: &emsp;"+total+"</p>";
         
        }
        else if(kategori_=="industri"){
            jumlah_pajak=Pajak[3]*subtotal[sumHari];
            dataakhir+="<p>"+"Pajak: &emsp;"+jumlah_pajak+"</p>";
            dataakhir+="<p>"+"Subtotal: &emsp;"+subtotal[sumHari]+"</p>";
            var total=subtotal[sumHari]+jumlah_pajak;
            dataakhir+="<p>"+"Bayar: &emsp;"+total+"</p>";
         
        }
        else if(kategori_=="villa"){
            jumlah_pajak=Pajak[4]*subtotal[sumHari];
            dataakhir+="<p>"+"Pajak: &emsp;"+jumlah_pajak+"</p>";
            dataakhir+="<p>"+"Subtotal: &emsp;"+subtotal[sumHari]+"</p>";
            var total=subtotal[sumHari]+jumlah_pajak;
            dataakhir+="<p>"+"Bayar: &emsp;"+total+"</p>";
            
            
        }

    }
    
    document.getElementById('data').innerHTML=dataakhir;
    document.getElementById('rincian').innerHTML=rincian;
    
}

