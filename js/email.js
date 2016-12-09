/**
 * 这里是验证邮箱输入框事件
 */
function Onblur() {
    var Email = $("#email").val();
    var EmailReg = /^([a-zA-Z0-9_-]{1,11})@([a-zA-Z0-9]{2,4}|126|163|189)\.([a-zA-Z0-9]{2,3})$/;

    if (Email.length == 0) {
        $("#message").html("邮箱不能为空");
        $("#Next").attr("disabled", true);
        return;
    } else if (!EmailReg.test(Email)) {
        $("#message").html("邮箱格式不正确      例:123456@126.com");
        $("#Next").attr("disabled", true);
        return;
    } else {
        $.ajax({
            type: "POST",
            dataType: "text",
            url: "checkEmail",
            data: {
                "email": Email
            },
            success: function (data) {

                if (data == "") {
                    $("#message").html("");
                    $("#Next").attr("disabled", false);

                } else {
                    $("#message").html(data);
                    $("#Next").attr("disabled", true);
                }
            },
            error: function () {
                alert("通讯有问题,请稍候尝试...");
            }
        });

    }
}
/**
 * 修改下一步按钮ID
 */
$(function () {
    $("body").on("click", "#Next", function () {
        $("#filedset1").hide();
        $("#filedset2").removeAttr("hidden");
        $("#Next").attr("id", "Fix");
    });

    $("body").on("click", "#Fix", function () {
        var Password = $("#password").val();
        var SurePassword = $("#sure_password").val();

        $.ajax({
            type: "POST",
            dataType: "text",
            url: "UpdatePassByEmail",
            data: {
                "Password": Password,
                "sure_password": SurePassword
            },
            success: function (data) {
                alert(data);
            },
            error: function () {
                alert("通讯有问题,请稍候尝试...");
            }
        });
    });
});