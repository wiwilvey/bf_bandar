// #spend_tgl,#spend_kdb,#spend_jml,#spend_trm,#spend_berita,#spend_submit
var tgl,kdb,jml,trm,berita;
getRekamanPengeluaran();
$(document).ready(function(){
    // ambil kode pembayaran
    $.getJSON( server + `kodeKeluar.php` , function(kode){
        $("#spend_kdb option").remove();
        $.each(kode , function(i,data){
            $("#spend_kdb").append(`<option value='${data.KODE_POST}'>${data.KET_POST}</option>`)
        })
    })

    $("#spend_submit").click( function(){
        // alert('Spend submit clicked');
        
        $.post( server + 'bayarKeluar.php',{
            tgl: $("#spend_tgl").val(),
            kdb: $("#spend_kdb").val(),
            jml: $("#spend_jml").val(),
            trm: $("#spend_trm").val(),
            berita: $("#spend_berita").val()
        },function(respon){
            console.log(respon);
            location.reload();
        })
        
    })
})

function getRekamanPengeluaran(){
    $.getJSON( server + `rekamanBayar.php` , function (bayar){
        $("#rekordBayar li").remove();
        $.each(bayar , function(i,data){
            $("#rekordBayar").append(`
            <li class='list-group-item'>
            <p>${data.KODE_BAYAR} - ${data.KET_POST}<p>
            <p>Tanggal: ${data.TANGGAL}. Rp ${parseInt(data.JUMLAH).toLocaleString('id-ID')},00</p>
            <p>${data.BERITA} - ${data.PENERIMA}</p>
            </li>
            `)
        })
    })
}