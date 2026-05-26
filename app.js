const gallery = document.getElementById("gallery");

const widget =
  uploadcare.Widget("[role=uploadcare-uploader]");

/* LIGHTBOX */
const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightboxImg");

function openLightbox(url){
  lightboxImg.src = url;
  lightbox.style.display = "flex";
}

function closeLightbox(){
  lightbox.style.display = "none";
}

/* ADD IMAGE */
function addImage(url){

  const tile =
    document.createElement("div");

  tile.className = "tile";

  const img =
    document.createElement("img");

  img.src = url;

  tile.appendChild(img);

  tile.onclick =
    () => openLightbox(url);

  gallery.prepend(tile);
}

/* UPLOAD HANDLER */
widget.onUploadComplete(function(fileInfo){
  addImage(fileInfo.cdnUrl);
});