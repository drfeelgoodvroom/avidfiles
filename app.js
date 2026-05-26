document.addEventListener("DOMContentLoaded", () => {

  const widget = uploadcare.Widget("[role=uploadcare-uploader]");

  const btn = document.getElementById("uploadBtn");

  btn.addEventListener("click", () => {
    widget.openDialog();
  });

  widget.onUploadComplete(function(fileInfo){

    if(!fileInfo || !fileInfo.cdnUrl) return;

    alert("Upload successful ✔");

    console.log("File URL:", fileInfo.cdnUrl);

  });

});