// let loginBtn();
function loginBtn() {
    let userId = document.querySelector("#userId"); // userId라는 id에 의헤 구분되는 element를 가져와서 그것의 값을 보여라
    // let userId = document.getElementById("userId").value;
    // let userId = document.querySelector('#userId').value;
    let userPwd = document.querySelector("#userPwd"); // userPwd라는 id에 의헤 구분되는 element를 가져와서 그것의 값을 보여라
    // let userPwd = document.getElementById("userPwd").value; 
    // let userPwd = document.querySelector('#userPwd').value;
    if(userId.value == "") {
        alert("아이디를 입력해주세요.");
        return false;
    }

    if(userPwd.value == "") {
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    // userId = "test" , userPwd = "1234"

    if(userId.value === "test" && userPwd.value === 1234 ){
        window.location.href="/";
        alert("로그인되었습니다.");
    } 
    else
    {
        alert("로그인 정보를 다시 확인해 주세요.");
    }
}

export default loginBtn()