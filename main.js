console.log('main.js is connected!');
$(document).ready(function() {
  console.log('script loaded')

 $("#submit").click(makeCall)

  function makeCall(){
    //ngisore iki gawe proxy cors
    let corsproxy ="https://cors-anywhere.herokuapp.com/";
    //ngisore iki gawe sumber url api ne
    let url = "http://jendela.data.kemdikbud.go.id/api/index.php/CcariCagarBudaya/searchGET?nama=";
     //ngisore iki gawe njikuk value seko input pencarian ber id "cari"
    let cari = $('#cari').val();
     //ngisore iki gawe nggabungke proxy, url api, karo value sing di cari
    let total = corsproxy + url + cari; 

    $.getJSON(total, function(data) {
      getData(data)
    });
  }
  var getData = function (data){
     //ngisore iki gawe njikuk data nama seko api ne
    var nama=data.data[0].nama;

    //ngisore iki gawe njikuk data id seko api ne
    var idcagar =data.data[0].cagar_budaya_id;

    //ngisore iki gawe njikuk data alamat jalan seko api ne
    var jl = data.data[0].alamat_jalan;

    //ngisore iki gawe njikuk data desa kelurahan seko api ne
    var alamat1 = data.data[0].desa_kelurahan;

    //ngisore iki gawe njikuk data kecamatan seko api ne
    var alamat2 = data.data[0].kecamatan;

    //ngisore iki gawe njikuk data kabupaten kota seko api ne
    var alamat3 = data.data[0].kabupaten_kota;

    //ngisore iki gawe njikuk data propinsi seko api ne
    var alamat4 = data.data[0].propinsi;

    //ngisore iki DOM gawe ngumpulke variabel sing wis kesimpen
      manipulateDom( nama, idcagar, jl, alamat1, alamat2, alamat3, alamat4 )
  }
  //ngisore iki gawe nampilke data mau kae ning index.html
  var manipulateDom = function( nama, idcagar, jl, alamat1, alamat2, alamat3, alamat4 ){
    $('#1').html("<h1 align='center'> Nama Cagar Budaya : "+nama+"</h1>");
    $('#2').html("<p align='center'>ID Cagar Budaya : "+ idcagar +"</p>");
    $('#3').html("<p align='center'>Alamat Jalan : "+ jl + "</p>");
    $('#4').html("<p align='center'>Alamat Lengkap : "+ alamat1 + alamat2 + alamat3 + alamat4 +"</p>");
  }

  //ngisore iki ra penting wong aku yo ra mudeng
  $( "#submit" ).click(function() {
    $(".navlarge").addClass("navsmall", 5000, "easeOut");
  });

  $(document).on('keyup', function(e){
      var key = e.which;
      if(key == 13)
      {
         $("#submit").click();
      }
  });
  })




