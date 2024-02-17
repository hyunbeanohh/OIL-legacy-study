const selection = document.getSelection();
// selection.getRangeAt(0) 메소드를 사용해 Range를 얻는다.
// 다중 선택을 지원하는 경우, 아래와 같이 rangeCount 값을 이용해 Range를 구할 수 있다.
for(let i = 0 ; i<selection.rangeCount; i++){
    console.log(selection.getRangeAt(0).cloneContents())
}

// selection 조작하기

//selection에 직접 접근
selection.setBaseAndExtent(...from...to...);
//selection의 range를 생성
selection.removeAllRanges();
selection.addRange(range)
