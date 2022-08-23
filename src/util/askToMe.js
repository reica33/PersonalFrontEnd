/* eslint-disable */ 
function askToMeBtn() {
    let fullname = document.querySelector("#fullname");
    let mail_id = document.querySelector("#mail_id");
    let message = document.querySelector("#message");
    
    if (fullname.value == "") { // 해당 입력갑이 없을 경우. 같은 말 : if(!userId.value)
        alert('이름을 입력해 주세요');
        fullname.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }

    if (mail_id.value  == "") {
        alert('사용하시는 이메일을 양식에 맞게 입력해 주세요.');
        mail_id.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }

    if (message.value  == "") {
        alert('문의 내용을 입력해 주세요.');
        message.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }
    else {
        window.location.href="/";
        alert(fullname.value + "님의 문의 내용 전송 완료!");
        // this.$router.push("/");
    }
}

// 펑션 내보내기
export default askToMeBtn;

// <input id=mail_address name="mail_address" type="text" style="width:100px;">
// 이메일 주소 빈칸을 두고 선택입력이 빈 칸에 들어가게 하고 싶을 때
// $('#selectEmail').change(function() {
//     $("#selectEmail option:selected").each(function () {
//         if($(this).val()== '1') { //직접입력일 경우
//         $("#str_email02").val(''); //값 초기화 
//         $("#str_email02").attr("disabled",false); // 활성화
//     }
//         else { //직접입력이 아닐경우
//             $("#str_email02").val($(this).text()); // 선택값 입력
//             $("#str_email02").attr("disabled",true); // 비활성화
//         }
//     }); 
// });
