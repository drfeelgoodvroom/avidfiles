document.addEventListener("DOMContentLoaded", () => {

  const widget = uploadcare.Widget("[role=uploadcare-uploader]");

  const chooseBtn = document.getElementById("chooseBtn");
  const uploadBtn = document.getElementById("uploadBtn");
  const preview = document.getElementById("preview");

  let selectedFile = null;

  // STEP 1: Choose file (NO upload yet)
  chooseBtn.addEventListener("click", () => {

    widget.openDialog();

  });

  // Capture selected file (but do NOT upload)
  widget.onChange(function(file){

    if (!file) return;

    file.done(function(fileInfo){

      selectedFile = fileInfo;

      preview.innerHTML = `
        <img src="${fileInfo.cdnUrl}" />
      `;

      uploadBtn.disabled = false;

    });

  });

  // STEP 2: Confirm upload (already uploaded via Uploadcare)
  uploadBtn.addEventListener("click", () => {

    if (!selectedFile) return;

    uploadBtn.innerText = "Uploaded ✔";

    uploadBtn.disabled = true;

    alert("Upload complete ✔");

  });

});