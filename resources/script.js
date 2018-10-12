function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImgc");
    var imgText = document.getElementById("imgtextc");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
