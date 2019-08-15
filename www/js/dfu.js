$(document).ready(function(){
    // #du_tgl,#du_nis,#du_jml,#du_submit
    getRekamanDU();
    var tgl, nis, dbln, sbln, jml;
    $("#du_submit").click( function(){
        tgl = $('#du_tgl').val();
        nis = $('#du_nis').val();
        jml = $('#du_jml').val();

        $.post( server + `setorDU.php` , {
            tgl : tgl,
            nis : nis,
            jml : jml
        },function(respon){
            console.log(respon);
            getRekamanDU();
        })
    })
})

function getRekamanDU(){
    $.getJSON( server + 'rekamanDU.php', function(du){
        $("#rekordDU li").remove();
        $.each(du , function(i,data){
            $("#rekordDU").append(`
            <li class='list-group-item'>
            <p>${data.KODE_TERIMA}</p>
            <p>${data.NAMA} - ${data.KELAS} [${data.NIS}]</p>
            <p> Rp ${parseInt(data.JUMLAH).toLocaleString('id-ID')},00 ${data.BERITA}</p>
            </li>
            `)
        })
    })
}