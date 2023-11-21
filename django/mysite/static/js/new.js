// document.getElementById('imageInput').addEventListener('change', handleImageUpload);

// function handleImageUpload(event) {
//     const fileInput = event.target;
//     const previewContainer = document.getElementById('previewContainer');
//     previewContainer.innerHTML = '';

//     const files = fileInput.files;
//     for (const file of files) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             img.classList.add('preview-image');
//             previewContainer.appendChild(img);
//         };

//         reader.readAsDataURL(file);
//     }
// }








const selectImage =document.querySelector('.select-Image');
const inputFile =document.querySelector('#file');
const imgArea =document.querySelector('.img-area');

selectImage.addEventListener('click',function(){
    inputFile.click();
})

inputFile.addEventListener('change',function (){
    const image= this.files[0]
    console.log(image);
    const reader= new FileReader();
    reader.onload=()=>{
        const allImg = imgArea.querySelectorAll('img');
        allImg.forEach(item =>item.remove()); 
        const imgurl =reader.result;
        const img =document.createElement('img')
        img.src= imgurl;
        imgArea.appendChild(img);
        imgArea.classList.add('active');
    }
    reader.readAsDataURL(image.name);
  
})