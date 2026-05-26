document.addEventListener("DOMContentLoaded", () => {

  const widget = uploadcare.Widget();

  const btn = document.getElementById("uploadBtn");

  btn.addEventListener("click", () => {
    widget.openDialog();
  });

  widget.onUploadComplete(function(fileInfo){

    console.log("Uploaded:", fileInfo.cdnUrl);

    alert("Upload successful ✔");

  });

});