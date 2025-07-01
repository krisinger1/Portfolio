function addBorder(event){
    let t = event.target;
    // t.style.display = 'none';
    t.style.border = '5px solid #048C8C';
    t.style.borderRadius = '10px';
    console.log(t);
    console.log("i moused over this picture!")
}
function removeBorder(event){
    let t = event.target;
    t.style.border = 'none';
    t.style.borderRadius = '0px';



}

let projectImages = document.querySelectorAll('.project-image');
console.log(projectImages);
projectImages.forEach(image => {    
    image.addEventListener('mouseover', addBorder);
    image.addEventListener('mouseout', removeBorder);
});