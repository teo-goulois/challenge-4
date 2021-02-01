var img_array = ['/images/image-tanya.jpg', 
    '/images/image-john.jpg'];

let imgPointer = 0;
function myForward() 
{
    const photo = document.getElementById('photo');
    console.log('test')
    imgPointer++;
    if(imgPointer >= img_array.length) imgPointer = 0;
    photo.src = img_array[imgPointer];
    console.log(imgPointer)


    texte1.style = (imgPointer === 0 ?  "display:block;": "display:none;"); 

    texte2.style = (imgPointer === 1 ?  "display:block;": "display:none;");
}

function myBackward() {
    console.log(photo)
    imgPointer++;
    if(imgPointer >= img_array.length) imgPointer = 0;
    photo.src = img_array[imgPointer];
    texte1.style = (imgPointer === 0 ?  "display:block;": "display:none;"); 

    texte2.style = (imgPointer === 1 ?  "display:block;": "display:none;");

}

document.getElementById('btnForward').addEventListener('click', myForward);
document.getElementById('btnBackward').addEventListener('click', myBackward);