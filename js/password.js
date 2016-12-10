/**
 * 验证密码输入框事件
 * */
function RepassOnblur() {
    var Password = $("#password").val();
    var SurePassword = $("#sure_password").val();

    if (Password.length == 0) {
        $("#messages").html("密码不能为空");
        $("#Fix").attr("disabled", true);
        return false;
    } else if (Password.length < 6 || Password.length > 16) {
        $("#messages").html("密码长度小于6位或大于16位");
        $("#Fix").attr("disabled", true);
        return false;
    } else {
        $("#messages").html("");
        $("#Fix").attr("disabled", true);
    }

    if (SurePassword.length == 0) {
        $("#messages").html("确认密码不能为空");
        $("#Fix").attr("disabled", true);
        return false;
    } else if (SurePassword.length < 6 || SurePassword.length > 16) {
        $("#messages").html("密码长度小于6位或大于16位");
        $("#Fix").attr("disabled", true);
        return false;
    } else if (SurePassword != Password) {
        $("#messages").html("密码不一致");
        $("#Fix").attr("disabled", true);
        return false;
    } else {
        $("#messages").html("");
        $("#Fix").attr("disabled", false);
    }
}
