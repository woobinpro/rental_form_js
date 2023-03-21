$(function(){
    const canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas);
    $('#clear_signature').click(function(){
        signaturePad.clear();
    });
    $('#submit').click(function(){
      console.log(signaturePad.toDataURL());
    });
    $('#front_idcard').dmUploader({ //
        url: 'https://trackyourcamper.com:3001/api/uploadID',
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
          $('#front_idcard img').attr('src','https://trackyourcamper.com:3001/images/'+data.name);
          $('#front_idcard img').show();
        },
        onUploadError: function(id, xhr, status, message){
          console.log('danger' + id + ":" + status+ "-" + message);
        }
      });
      $('#back_idcard').dmUploader({ //
        url: 'https://trackyourcamper.com:3001/api/uploadID',
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
          $('#back_idcard img').attr('src','https://trackyourcamper.com:3001/images/'+data.name);
          $('#back_idcard img').show();
        },
        onUploadError: function(id, xhr, status, message){
          console.log('danger' + id + ":" + status+ "-" + message);
        }
      });
      $('#selfie').dmUploader({ //
        url: 'https://trackyourcamper.com:3001/api/uploadID',
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
          $('#selfie img').attr('src','https://trackyourcamper.com:3001/images/'+data.name);
          $('#selfie img').show();
        },
        onUploadError: function(id, xhr, status, message){
          console.log('danger' + id + ":" + status+ "-" + message);
        }
      });
     
});
