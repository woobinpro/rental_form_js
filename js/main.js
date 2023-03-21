$(function(){
    const canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas);
    $('#clear_signature').click(function(){
        signaturePad.clear();
    });
    $('.dm-uploader').dmUploader({ //
        url: 'https://82.165.190.74:3001/api/uploadID',
        fileName:'file',
        maxFileSize: 3000000, // 3 Megs 
        onDragEnter: function(){
          this.addClass('active');
        },
        onDragLeave: function(){
          this.removeClass('active');
        },
        onBeforeUpload: function(id){
          console.log('Starting the upload of #' + id);
        },
        onUploadProgress: function(id, percent){
          console.log('progress' + id + ":" + percent);
        },
        onUploadSuccess: function(id, data){
          console.log('Server Response for file #' + id + ': ' + JSON.stringify(data));
          console.log('Upload of file #' + id + ' COMPLETED', 'success');
          $(this).children('img')[0].attr('src','http://82.165.190.74/images/'+data.name);
          $(this).children('img')[0].show();
        },
        onUploadError: function(id, xhr, status, message){
          console.log('danger' + id + ":" + status+ "-" + message);
        }
      });
     
});
