function welcome(){
    let welcome_text = '欢迎光顾本站'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎光顾本站！",
        text: welcome_text+'\n技术之家',
        imageUrl: "/img/avatar.jpg",
        timer: 3000,
        showConfirmButton: true
    });
}
$(document).ready(()=>{
    welcome()
})