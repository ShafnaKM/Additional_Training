function submitForm() {
    event.preventDefault()
    if ((document.getElementById("email").value).length === 0) {
        document.getElementById("err-email").style.visibility = "visible";
    }
    if ((document.getElementById("name").value).length == 0) {
        document.getElementById("err-name").style.visibility = "visible";
    }
    if ((document.getElementById("purpose").value).length == 0) {
        document.getElementById("err-purpose").style.visibility = "visible";
    }
    if ((document.getElementById("remark").value).length == 0) {
        document.getElementById("err-remark").style.visibility = "visible";
    }
}