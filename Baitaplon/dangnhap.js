function loGin() {
    var username = document.getElementById("taikhoan").value;
    var password = document.getElementById("matkhau").value;

    if(username == "quanli" && password == "12345") {
        window.location = "quanli.html";
        return true;
    }
    if(username == "admin" && password == "12345") {
        window.location = "admin.html";
        return true;
    }
    if(username == "nhanvien" && password == "12345") {
        window.location = "nhanvien.html";
        return true;
    }
    if(username == "ketoan" && password == "12345") {
        window.location = "ketoan.html";
        return true;
    }
    if(username == "" && password == "") {
        alert("Bạn chưa nhập thông tin!");
        return false;
    }
    if(username == null || username == "") {
        alert("Bạn chưa nhập tài khoản");
        return false;
    }
    if(password == null || password == "") {
        alert("Bạn chưa nhập mật khẩu");
        return  false;
    }
    else{
        alert("Bạn nhập sai thông tin! Vui lòng kiểm tra lại");
    }
}
function myFunction(){
    window.location="web.html"
}