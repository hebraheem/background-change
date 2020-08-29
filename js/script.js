let changeColor = document.getElementById('color');
let typeColor = document.getElementById('typeColor');
changeColor.addEventListener('click',backGround);

function backGround(){
    let color = ["green","purple","orange","blue","red","hotpink","grey","silver"];
    document.body.style.background = color[Math.floor(Math.random() * color.length)];
    typeColor.value = document.body.style.background;
}

// function backGround(){
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let colorChange = "rgb(" + x + "," + y + ","  +z +")";
//     // console.log(colorChange);
//     document.body.style.background = colorChange;
//     typeColor.value = colorChange

// }




// function backGround(){
//     let x = Math.floor(Math.random() * "230066");
//     let colorChange = ("#" + x)
//      document.body.style.background = colorChange;
//     typeColor.value = colorChange

// }