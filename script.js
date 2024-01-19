const content ="This is Content to share ";
document.getElementById("whatsapp-share-btn").addEventListener("click",()=>{
  let whatsappUrl="whatsapp://send?text="+encodeURIComponent(content);
  window.location.href=whatsappUrl;
})