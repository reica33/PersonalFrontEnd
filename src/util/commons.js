// vue는 $ 표시 사용 불가한데 제이쿼리는 $가 필요

// You may use special comments to disable some warnings.
// Use // eslint-disable-next-line to ignore the next line.
// Use /* eslint-disable */ to ignore all warnings in a file.

/* eslint-disable */ 
// $(document).ready(function () {
//     $('.outer-menu-item').hover(function () {
//         $(this).find('.inner-menu').show();
//     }, function () {
//         $(this).find('.inner-menu').hide();
//     });
// });

// 제이쿼리만 있기 때문에 삭제하면 됨.

// 시간 보여준 후 종료시키기 위해서 수정 들어감. clear부분은 View.vue파일에!
function setCurTime() { // vue에서는 window.onload=가 안 먹혀서 펑션에 아무 이름 지어서 사용
    let resId = 0;
    // 현재시각 보이기
    resId = setInterval(displayNow, 1000);

    function displayNow() {
        // 현재 시간 불러오는 클래스
        let now = new Date();
        // 현재 대한민국에서 쓰는 시간을 저장
        let currentTime = now.toLocaleTimeString();
        document.querySelector('#current').innerHTML = currentTime;
    }

    return resId;
}

function checkAll() {
    let chkAll = document.querySelector('#chkAll');
    let tableComplain = document.querySelector('#tableComplain');

    // 체크박스의 상태가 체크일 때
    if(chkAll.checked == true) {
        for(let i = 1; i < tableComplain.rows.length; i++) {
            // 행, 열 전부 배열. 배열은 대괄호로 접근. i번째 5번째.
            tableComplain.rows[i].cells[5].innerHTML = "완료"; // tr, td들어감. 열기준으로 cells5가 완료
        }
        // i < 가 빠져도 작동되긴 하던데 그래도 반복문이니깐 i < 꼭 넣어주기
    }
    else {
        for(let i = 1; i < tableComplain.rows.length; i++) {
        // 행, 열 전부 배열. 배열은 대괄호로 접근. i번째 5번째. 0 1 2 3 4 5
        tableComplain.rows[i].cells[5].innerHTML = "미완료"; // tr, td들어감. 열기준으로 cells5가 완료
        }
    }
}

export { setCurTime, checkAll }