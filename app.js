document.addEventListener("DOMContentLoaded", () => {

  const widget = uploadcare.Widget("[role=uploadcare-uploader]");

  widget.onUploadComplete(function(fileInfo){

    if (!fileInfo || !fileInfo.cdnUrl) return;

    alert("Upload successful ✔");

    console.log("Uploaded file:", fileInfo.cdnUrl);

  });

});