$(function() {
    //Upload Image
    
    $('#upload').on('click',function(e){
        e.preventDefault();
        const image = $('#image').val();
        // alert(image);
        $.ajax({
            url:"http://localhost/SIMANTO/public/ajaxupload.php",
            data: {image: image},
            method:"post",
            beforeSend:function()
            {
                $('#err').fadeOut();
            },
            success:function(data)
            {
                if(data=='invalid')
                {
                    //invalid file format
                    $('#err').html("Invalid File !").fadeIn();
                }
                else if(data=='empty'){
                    //empty file
                    $('#err').html("Foto Belum Ada !").fadeIn();
                }
                else{
                    //view upload file
                    $('#preview').html(data).fadeIn();
                }
            },
            error:function(e)
            {
                $('#err').html(e).fadeIn();
            }
        });
    });
    // CABANG
    $('.tampilModalTambahCabang').click(function(){
        $('#DataModelsCabang #forModalLabel').html("Tambah Data Cabang");
        $('#DataModelsCabang .action').html("<i class='fa fa-plus'></i> ADD");
        $('#DataModelsCabang .modal-body form').attr('action','http://localhost/SIMANTO/public/Cabang/tambah')

        $('#DataModelsCabang #nrp').val('');
        $('#DataModelsCabang #nama').val('');
        $('#DataModelsCabang #choose').val('');
        $('#DataModelsCabang #choose').html('Choose...');
    })
    $('.tampilModalEditCabang').click(function(){
        $('#DataModelsCabang #forModalLabel').html("Ubah Data Cabang");
        $('#DataModelsCabang .action').html("<i class='fa fa-edit'></i> EDIT");
        $('#DataModelsCabang .modal-body form').attr('action','http://localhost/SIMANTO/public/Cabang/ubah')

        const id = $(this).data('id');
        // alert(id);
        $.ajax({
            url: 'http://localhost/SIMANTO/public/Cabang/getUbah',
            data: {id: id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
               
                $('#DataModelsCabang #nrp').val(data.nrp);
                $('#DataModelsCabang #nama').val(data.nama_cab);
                if(data.status != 'KC'){
                    $('#DataModelsCabang input[value="kcp"]').attr("checked","checked");
      
                }
                else{
                    $('#DataModelsCabang input[value="kc"]').attr("checked","checked");
           
                }
                // $('#nrp').attr('hi');
                // $('#nrp').val(data.status);
                $('#DataModelsCabang #choose').val(data.jabatan_cab);
                $('#DataModelsCabang #choose').html(data.jabatan_cab);
                $('#DataModelsCabang #id').val(data.id);

             
            }
        });

    })

    // MANAGER
    $('.tampilModalTambahManager').click(function(){
        $('#DataModelsManager #forModalLabel').html("Tambah Data Manager");
        $('#DataModelsManager .action').html("<i class='fa fa-plus'></i> ADD");
        $('#DataModelsManager .modal-body form').attr('action','http://localhost/SIMANTO/public/Manager/tambah')

        $('#DataModelsManager #nopintar').val('');
        $('#DataModelsManager #nama').val('');
        $('#DataModelsManager #notelp').val('');
        $('#DataModelsManager #image').val('');
        $('#DataModelsManager #username').val('');
        $('#DataModelsManager #password1').val('');
        $('#choose').removeAttr('value');
        $('#choose').val('');
        $('#choose').html('Choose...');
    })
    $('.tampilModalEditManager').click(function(){
        $('#DataModelsManager #forModalLabel').html("Ubah Data Manager");
        $('#DataModelsManager .action').html("<i class='fa fa-edit'></i> EDIT");
        $('#DataModelsManager .modal-body form').attr('action','http://localhost/SIMANTO/public/Manager/ubah')
        // $('#cabang option');
        const idman = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/SIMANTO/public/Manager/getUbah',
            data: {id: idman},
            method: 'post',
            dataType: 'json',
            success: function(data) {
               console.log(data);
               $('#nopintar').val(data.no_pintar);
               $('#nama').val(data.nama);
               if(data.gender != 'Perempuan'){
                $('#DataModelsManager input[value="laki"]').attr("checked","checked");
  
                }
                else{
                    $('#DataModelsManager input[value="perem"]').attr("checked","checked");
        
                }

               $('#notelp').val(data.telp);
               $('#username').val(data.username);
               $('#password1').val(data.password);
               $('#konfirm').fadeOut();

               $('#choose').val(data.id);
               $('#choose').html(data.nama_cab);
               $('#idmanager').val(data.id_manager);
                // console.log(data);
            }
        });

    })

    // ANGGOTA
    // if($('#DataModelsAnggota #jabatan').child().attr('selected') == 'ASSITEN'){
    //     $('#DataModelsAnggota #mywil').attr('selected');
    //     $('#DataModelsAnggota #onwil').fadeOut();
    // }else{
    //     $('#DataModelsAnggota #mywil').removeattr('selected');
    //     $('#DataModelsAnggota #onwil').fadeIn();
    // }
    $('#DataModalAnggota #jabatan').click(function(){
        var jab = $('#DataModalAnggota #jabatan').val();
        if(jab == '2'){
            // $('#DataModelsAnggota #mywil').attr('value','');
            $('#onwil').fadeOut();
        }else{
            $('#onwil').fadeIn();
        }
    })
    $('#wilayah').click(function(){
        var wil = $('#wilayah').val();
        console.log(wil);
    })
    $('.tampilModalTambahAnggota').click(function(){
        $('#DataModalAnggota #forModalLabel').html("Tambah Data Anggota");
        $('#DataModalAnggota .action').html("<i class='fa fa-plus'></i> ADD");
        $('#DataModalAnggota .modal-body form').attr('action','http://localhost/SIMANTO/public/Anggota/tambah')

    })
    $('.tampilModalEditAnggota').click(function(){

        $('#DataModalAnggota #forModalLabel').html("Ubah Data Anggota");
        $('#DataModalAnggota .action').html("<i class='fa fa-edit'></i> EDIT");
        $('#DataModalAnggota .modal-body form').attr('action','http://localhost/SIMANTO/public/Anggota/ubah')
        const idagt = $(this).data('id');

        $.ajax({
            url: 'http://localhost/SIMANTO/public/Anggota/getUbah',
            data: {idagt: idagt},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                var jab = $('#DataModalAnggota #jabatan').val();
                if(jab == '2'){
                    // $('#DataModelsAnggota #mywil').attr('value','');
                    $('#onwil').fadeOut();
                }else{
                    $('#onwil').fadeIn();
                }
                $('#DataModalAnggota #choose').val(data.id_jabatan);
                $('#DataModalAnggota #choose').html(data.jabatan);

                $('#nopintar').val(data.no_pintar);
                $('#nama').val(data.nama);
                if(data.gender != 'LAKI-LAKI'){
                    $('#DataModalAnggota input[value="PEREMPUAN"]').attr("checked","checked");
                }
                else{
                    $('#DataModalAnggota input[value="LAKI-LAKI"]').attr("checked","checked");
           
                }
                $('#notelp').val(data.telpagt);
                $('#nopintar').val(data.no_pintar);
                $('#wilayah').val(data.wilayah);
                $('#DataModalAnggota #idagt').val(data.id_agt);

            }
        });
    })

    // Anggota Admin
    $('#DataModalAnggota .mycabang').click(function(){
        const idcbg = $(this).data('id');

        $.ajax({
            url: 'http://localhost/SIMANTO/public/Wilayah/getWilayah',
            data: {idcbg: idcbg},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                if(data < 1){
                    $('#onwil').fadeOut();
                }else{
                    $('#onwil').fadeIn();
                    $('#wilayah').html('');
                    for(let i = 0; i < data.length; ++i){
                        $('#wilayah').append('<option value="'+(data[i]).id_wil+'">'+(data[i]).nm_wilayah+'</option>');
                    }
                }
            }
        });

    })
    

    //Wilayah
    $('.tampilModalTambahWilayah').click(function(){
        $('#DataModalWilayah #forModalLabel').html("Tambah Data Wilayah");
        $('#DataModalWilayah .action').html("<i class='fa fa-edit'></i> Add");
        $('#DataModalWilayah .modal-body form').attr('action','http://localhost/SIMANTO/public/Wilayah/tambah');

        $('#DataModalWilayah #wilayah').val('');
        $('#DataModalWilayah #choose').val('');
        $('#DataModalWilayah #choose').html('Choose...');
        $('#DataModalWilayah #id').val('');
    })
    $('.tampilModalEditWilayah').click(function(){
        $('#DataModalWilayah #forModalLabel').html("Ubah Data Wilayah");
        $('#DataModalWilayah .action').html("<i class='fa fa-edit'></i> Edit");
        $('#DataModalWilayah .modal-body form').attr('action','http://localhost/SIMANTO/public/Wilayah/ubah');

        const idwil = $(this).data('id');
        // console.log(idwil);
        $.ajax({
            url: 'http://localhost/SIMANTO/public/Wilayah/getUbah',
            data: {id: idwil},
            method: 'post',
            dataType: 'json',
            success: function(wil) {
               console.log(wil.nama_cab);
               $('#DataModalWilayah #wilayah').val(wil.nm_wilayah);
               $('#DataModalWilayah #choose').val(wil.id_cabang);
               $('#DataModalWilayah #choose').html(wil.nama_cab);
               $('#DataModalWilayah #id').val(wil.id_wil);
            }
        });
    })

    //Nasabah
    $('.tampilModalEditNasabah').click(function(){
        $('#DataModalNasabah #forModalLabel').html("Ubah Data Nasabah");
        $('#DataModalNasabah .action').html("<i class='fa fa-edit'></i> Edit");
        $('#DataModalNasabah .modal-body form').attr('action','http://localhost/SIMANTO/public/Nasabah/ubah');

        const idnas = $(this).data('id');
        $.ajax({
            url: 'http://localhost/SIMANTO/public/Nasabah/getUbah',
            data: {idnas: idnas},
            method: 'post',
            dataType: 'json',
            success: function(data) {
               console.log(data);
               $('#nobuku').val(data.id_nasabah);
               $('#nama').val(data.nama_nas);
               if(data.gender_nas == 'LAKI-LAKI'){
                $('#DataModelsNasabah input[value="LAKI-LAKI"]').attr("checked","checked");
               }else{
                $('#DataModelsNasabah input[value="PEREMPUAN"]').attr("checked","checked");
               }
               $('#notelp').val(data.no_telp_nas);
               $('#alamat').val(data.alamat_nas);
               $('#DataModelsNasabah #id').val(data.id_nasabah);
            }
        });
    })

    //print
    $('#print').click(function(){
        $('#divprint').fadeOut(function(){
        },success = () => {
            window.print();
        });
    })

    
});
 //HOME 
function showTarget(id){
    var btnclass = $('.pintarget'+id+' i').attr('class');
    switch(btnclass){
      case 'fa fa-minus-circle' :
        $('.target'+id).fadeOut(function(){ 
        },success = () => {
          $('.pintarget'+id+' i').attr('class','fa fa-plus-circle');
        });
        break;
      case 'fa fa-plus-circle' :
        $('.target'+id).fadeIn(function(){
        },success = () => {
          $('.pintarget'+id+' i').attr('class','fa fa-minus-circle');
        });
        break;
      default :
        break;
    }
}
