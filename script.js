const image_box=document.querySelector('.image_box');
const boxes=document.getElementsByClassName('box');
//Event listeners for my draggable element image_box 
image_box.addEventListener('dragstart', (e)=>{
    console.log("dragstart has started");
    e.target.className += ' put';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});
image_box.addEventListener('dragend', (e)=>{
    console.log("dragend is started");
    e.target.className = 'image_box';
});
for (box of boxes){
    box.addEventListener('dragover',(e)=>{
        console.log("dragover is started");
        e.preventDefault();
    });
    box.addEventListener('dragenter',()=>{
        console.log("dragenter is started");

    });
    box.addEventListener('dragleave',()=>{
        console.log("dragleave is started");

    });
    box.addEventListener('drop',(e)=>{
        console.log("drop is started");
        e.target.append(image_box);

    });
}