$(document).ready(function(){
    // #spp_tgl,#spp_nis,#spp_dbln#spp_sbln,#spp_jml,#spp_submit
    getRekamanSPP();
    var tgl, nis, dbln, sbln, jml;
    $("#spp_submit").click( function(){
        tgl = $('#spp_tgl').val();
        nis = $('#spp_nis').val();
        dbln = $('#spp_dbln').val();
        sbln = $('#spp_sbln').val();
        jml = $('#spp_jml').val();

        $.post( server + `setorSPP.php` , {
            tgl : tgl,
            nis : nis,
            dbln: dbln,
            sbln: sbln,
            jml : jml
        },function(respon){
            console.log(respon);
            getRekamanSPP();
        })
    })
})

function getRekamanSPP(){
    $.getJSON( server + 'rekamanSPP.php', function(spp){
        $("#rekordSPP li").remove();
        $.each(spp , function(i,data){
            $("#rekordSPP").append(`
            <li class='list-group-item'>
            <p>${data.KODE_TERIMA}</p>
            <p>${data.NAMA} - ${data.KELAS} [${data.NIS}]</p>
            <p> Rp ${parseInt(data.JUMLAH).toLocaleString('id-ID')},00 ${data.BERITA}</p>
            </li>
            `)
        })
    })
}