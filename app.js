const gallery = document.getElementById("gallery");

const container =
  document.getElementById("container");

const widget =
  uploadcare.Widget("[role=uploadcare-uploader]");

/* YEARBOOK MODE */
let yearbook = false;

function toggleMode(){

  yearbook = !yearbook;

  if(yearbook){
    container.classList.add("yearbook");
  }else{
    container.classList.remove("yearbook");
  }

}

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

  if(!yearbook){

    const tile =
      document.createElement("div");

    tile.className = "tile";

    tile.innerHTML =
      `<img src="${url}"/>`;

    tile.onclick =
      () => openLightbox(url);

    gallery.prepend(tile);

  }else{

    const entry =
      document.createElement("div");

    entry.className = "entry";

    entry.innerHTML = `
      <img src="${url}"/>

      <div>
        <div class="name">
          Salinas High AVID 27’
        </div>

        <div class="sub">
          AVID Yearbook Archive
        </div>
      </div>
    `;

    entry.onclick =
      () => openLightbox(url);

    gallery.prepend(entry);

  }

}

/* UPLOAD */
widget.onUploadComplete(function(fileInfo){

  addImage(fileInfo.cdnUrl);

});