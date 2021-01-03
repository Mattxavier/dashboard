let bell = document.querySelector(".notification-bell");
let down = false;
//When Browser load notification function will execute
window.onload = () => {
    notification();
};
//Onclick of bell
notification-bell.addEventListener('click',function(){
    notification-bell.classList.remove("notify");
    toggle();
});

function notification(){
    setTimeout(function(){
        notification-bell.classList.add("notify");
    }, 1000);
}

