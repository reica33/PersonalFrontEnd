/* eslint-disable */ 
function signupBtn() {
    let userId = document.getElementById("userId");
    let userPwd = document.getElementById("userPwd");
    let fullname = document.getElementById("fullname");
    let tel = document.getElementById("tel");
    // let mail = document.getElementById("mail");
    
    if (userId.value == "") { // 해당 입력갑이 없을 경우. 같은 말 : if(!userId.value)
        alert('아이디를 입력해 주세요');
        userId.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }

    if (userPwd.value == "") { // 해당 입력갑이 없을 경우.
        alert('비밀번호를 입력해 주세요');
        userPwd.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }

    if (fullname.value == "") { // 해당 입력갑이 없을 경우.
        alert('회원명을 입력해 주세요');
        fullname.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }

   
    if (tel.value == "") {
        alert('전화번호를 양식에 맞게 입력해 주세요.');
        tel.focus() // focus()  커서 깜빡깜빡
        return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    }

    // if (mail.value == "") {
    //     alert('이메일 주소를 입력해 주세요.');
    //     mail.focus() // focus()  커서 깜빡깜빡
    //     return false; // return: 반환하다 return false: 아무것도 반환하지 말아라 아래코드부터 아무것도 작동하지마
    // }
    else {
        window.location.href="/";
        alert(userId.value + '(' + fullname.value + ") 님의 \n 회원가입이 완료되었습니다.");
    }

}

// $(function () {
//     $.datepicker.setDefaults({
//         dateFormat: 'yy-mm-dd',
//         prevText: '이전 달',
//         nextText: '다음 달',
//         monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//         dayNames: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//         dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
//         showMonthAfterYear: true,
//         yearSuffix: '년'
//     });

//     $("#datepicker").datepicker(); // 달력
// });

export default signupBtn;