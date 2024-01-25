
document.addEventListener("DOMContentLoaded",function(){
    var box_list = document.querySelector(".box_list");
    let button = document.querySelector(".left_drop");
    console.log(box_list);
    var check = false;
    button.addEventListener("click",function(){
        console.log("ok");
        if (check == false) {
            box_list.classList.add("show_dow");
            check = true;
        } else {
            box_list.classList.remove("show_dow");
            check = false;
        }
    }) 
});
