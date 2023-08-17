var i =0;
var images = [];

    images[0] = 'image1.jpg';
    images[1] = 'image2.jpg';
    images[2] = 'image3.jpg';

function changeImage() {
    document.slide.src = images[i];
        if(i < images.length - 1) {
            i++;
        }
        else{
            i = 0;
        }
    setTimeout("changeImage()",5000);
}
window.onload = changeImage;
function add() {

    var id = document.getElementById('id').value;
    var fn = document.getElementById('fname').value;
    var gt = document.getElementById('gioitinh').value;
    var cv = document.getElementById('position').value;
    var pb = document.getElementById('room').value;
    var em = document.getElementById('email').value;
    var vi = document.getElementById('congviec').value;
    if(err()) {

        var obj = {
            id: id,
            name: fn,
            gioitinh: gt,
            chucvu: cv,
            phongban: pb,
            email: em,
            viec: vi,
        }
        reSet();
        alert("Bạn đã giao công thành công !");
    }
}
function reSet() {

    document.getElementById("id").value=" ";
    document.getElementById("fname").value=" ";
    document.getElementById("gioitinh").value=" ";
    document.getElementById("position").value=" ";
    document.getElementById("room").value=" ";
    document.getElementById('email').value=" ";
    document.getElementById("congviec").value=" ";
}
function err() {
    var result = true;
    var id = document.getElementById('id').value;
    if(id == "") {
        document.getElementById('iderr').innerHTML = "Bạn chưa nhập ID";
        return false;
    }
    else {
        document.getElementById('iderr').innerHTML = "";
    }
    var fn = document.getElementById('fname').value;
    if(fn == "") {
        document.getElementById('fnameerr').innerHTML = "Bạn chưa nhập Họ tên";
        return false;
    }
    else {
        document.getElementById('fnameerr').innerHTML = "";
    }
    var gt = document.getElementById('gioitinh').value;
    if(gt == "") {
        document.getElementById('gioitinherr').innerHTML = "Bạn chưa nhập Giới tính";
        return false;
    }
    else {
        document.getElementById('gioitinherr').innerHTML = "";
    }
    var cv = document.getElementById('position').value;
    if(cv == "") {
        document.getElementById('positionerr').innerHTML = "Bạn chưa nhập Chức vụ";
        return false;
    }
    else {
        document.getElementById('positionerr').innerHTML = "";
    }
    var pb = document.getElementById('room').value;
    if(pb == "") {
        document.getElementById('roomerr').innerHTML = "Bạn chưa nhập Phòng ban";
        return false;
    }
    else {
        document.getElementById('roomerr').innerHTML = "";
    }
    var em = document.getElementById('email').value;
    if(em == "") {
        document.getElementById('emailerr').innerHTML = "Bạn chưa nhập Email";
        return false;
    }
    else {
        document.getElementById('emailerr').innerHTML = "";
    }
    var vi = document.getElementById('congviec').value;
    if(vi == "") {
        document.getElementById('congviecerr').innerHTML = "Bạn chưa giao Công việc";
        return false;
    }
    else {
        document.getElementById('congviecerr').innerHTML = "";
    }
    return result;
}