var a =0;
var images = [];

    images[0] = 'image1.jpg';
    images[1] = 'image2.jpg';
    images[2] = 'image3.jpg';

function changeImage() {
    document.slide.src = images[a];
    if(a < images.length - 1) {
        a++;
    }
    else{
        a = 0;
    }
    setTimeout("changeImage()",5000);
}
    window.onload = changeImage;

var arrEmployee = [];
var selectedIndex = -1;

function add() {
    var id = document.getElementById('id').value;
    var fn = document.getElementById('fname').value;
    var gt = document.getElementById('gioitinh').value;
    var ns = document.getElementById('ngaysinh').value;
    var cv = document.getElementById('position').value;
    var pb = document.getElementById('room').value;
    var dc = document.getElementById('address').value;
    var em = document.getElementById('em').value;
    var ph = document.getElementById('phone').value;

    if(err()) {

        var obj = {
            id: id,
            name: fn,
            gioitinh: gt,
            ngaysinh: ns,
            chucvu: cv,
            phongban: pb,
            diachi: dc,
            email: em,
            sdt: ph,
        }
        arrEmployee.push(obj);
        // console.log(arrEmployee);
        reSet();
        Show();
    }
}
function Show() {
    var table = document.getElementById("table");

    for( var i = table.rows.length - 1; i>0; i--) {
        table.deleteRow(i);
    }

    for( var i=0; i<arrEmployee.length; i++) {
        var objE = arrEmployee[i];
        var table = document.getElementById("table");
		var row = table.insertRow();
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);

        cell1.innerHTML = i+1;
        cell2.innerHTML = objE.id;
        cell3.innerHTML = objE.name;
        cell4.innerHTML = objE.gioitinh;
        cell5.innerHTML = objE.ngaysinh;
        cell6.innerHTML = objE.chucvu;
        cell7.innerHTML = objE.phongban;
        cell8.innerHTML = objE.diachi;
        cell9.innerHTML = objE.email;
        cell10.innerHTML = objE.sdt;
        // cell11.innerHTML = "<button><a href='#' onclick='Edit(this)'>Sửa</a></button>  <button><a href='#' onclick='Del(this)'>Xóa</a></button>";
        cell11.innerHTML = "<button onclick='Edit(this)'>Sửa</button>  <button onclick='Del(this)'>Xóa</button>";
    }
}
function Edit(el) {
    // console.log(el);
    var selectedRow= el.parentElement.parentElement;
    var id = selectedRow.cells[1].innerText;
    var name = selectedRow.cells[2].innerText;
    var gioitinh = selectedRow.cells[3].innerText;
    var ngaysinh = selectedRow.cells[4].innerText;
    var chucvu = selectedRow.cells[5].innerText;
    var phongban = selectedRow.cells[6].innerText;
    var diachi = selectedRow.cells[7].innerText;
    var email = selectedRow.cells[8].innerText;
    var sdt = selectedRow.cells[9].innerText;

    document.getElementById("id").value= id;
    document.getElementById("fname").value= name;
    document.getElementById("gioitinh").value= gioitinh;
    document.getElementById("ngaysinh").value= ngaysinh;
    document.getElementById("position").value= chucvu;
    document.getElementById("room").value= phongban;
    document.getElementById('address').value= diachi;
    document.getElementById('em').value= email;
    document.getElementById('phone').value= sdt;

    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;

    document.getElementById('up').style.display="block";
    document.getElementById('ad').style.display="none";
}

function update() {

    arrEmployee[selectedIndex].id = document.getElementById("id").value;
    arrEmployee[selectedIndex].name = document.getElementById("fname").value;
    arrEmployee[selectedIndex].gioitinh = document.getElementById("gioitinh").value;
    arrEmployee[selectedIndex].ngaysinh = document.getElementById("ngaysinh").value;
    arrEmployee[selectedIndex].chucvu = document.getElementById("position").value;
    arrEmployee[selectedIndex].phongban = document.getElementById("room").value;
    arrEmployee[selectedIndex].diachi = document.getElementById("address").value;
    arrEmployee[selectedIndex].email = document.getElementById("em").value;
    arrEmployee[selectedIndex].sdt = document.getElementById("phone").value;

    Show();

    reSet();

    document.getElementById('up').style.display="none";
    document.getElementById('ad').style.display="block";

}

function Del(el) {
    var selectedRow = el.parentElement.parentElement;
    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;
    if(confirm("Bạn có muốn xóa nhân viên này không ?")){
        arrEmployee.splice(selectedIndex,1);
        Show();
    }
}

function reSet() {

    document.getElementById("id").value=" ";
    document.getElementById("fname").value=" ";
    document.getElementById("gioitinh").value=" ";
    document.getElementById("ngaysinh").value=" ";
    document.getElementById("position").value=" ";
    document.getElementById("room").value=" ";
    document.getElementById('address').value=" ";
    document.getElementById('em').value=" ";
    document.getElementById('phone').value=" ";
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
    var ns = document.getElementById('ngaysinh').value;
    if(ns == "") {
        document.getElementById('ngaysinherr').innerHTML = "Bạn chưa nhập Ngày sinh";
        return false;
    }
    else {
        document.getElementById('ngaysinherr').innerHTML = "";
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
    var dc = document.getElementById('address').value;
    if(dc == "") {
        document.getElementById('addresserr').innerHTML = "Bạn chưa nhập Địa chỉ";
        return false;
    }
    else {
        document.getElementById('addresserr').innerHTML = "";
    }
    var em = document.getElementById('em').value;
    if(em == "") {
        document.getElementById('emerr').innerHTML = "Bạn chưa nhập Email";
        return false;
    }
    else {
        document.getElementById('emerr').innerHTML = "";
    }
    var ph = document.getElementById('phone').value;
    if(ph == "") {
        document.getElementById('phoneerr').innerHTML = "Bạn chưa nhập Số điện thoại";
        return false;
    }
    else {
        document.getElementById('phoneerr').innerHTML = "";
    }
    return result;
}