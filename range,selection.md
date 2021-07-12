# Selection

셀렉션의 목적은 사용자, 캐럿의 현재 위치에 의해 선택된 텍스트의 범위를 나타낸다.
``` javascript
selection검사 또는 조작을 위해 개체를 얻으려면 document.getSelection()을 호출합니다.
```
+ 사용자는 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽을 선택 할 수 있습니다.
+ 데스크탑 마우스로 선택하면 마우스 버튼을 누른 위치에 앵커가 배치되고 마우스 버튼을 놓은 위치에 포커스가 배치됩니다.

### property
+ Selection.anchorNode - Node선택이 시작되는 위치를 반환합니다. null 문서에 선택 항목이 없는 경우 반환할 수 있습니다.
+ anchorOffset - anchorNode 내에서 선택 앵커의 오프셋을 나타내는 숫자를 반환합니다.
시작 노드가 textnode 이면 커서보다 앞에 있는 ahchorNode의 문자열 수
시작 노드가 element이면 시작 노드보다 앞에 있는 자식 노드의 수
+ focusNode - 끝 노드 반환
+ focusOffset - 끝 노드의 offset 반환
+ isCollapse - selection의 시작과 끝의 동일 여부 반환
+ rangeCount - selection이 포함하고 있는 range의 수, 선택 영역의 범위 수를 반환

- - - - -


# Range
+ ```Range``` 객체는 주어진 document 내의 텍스트 노드들의 보분들과 documents의 단편화에 포함된 노드들을 나타내고 있다. 
+ ```Rnage``` 오브젝트는 document 객체에 포함되어 있는 createRange 메소드를 사용하여 생성할 수 있다. 또한 selection 객체에 포함되어 있는 getRangeAt 메소드를 사용하여 추출할 수 있다.

### property
+ collapsed - Range의 시작점과 끝점이 같은 위치인지를 알 수 있는 boolean 값을 반환한다.
+ commonAncestorContatiner - startContainer와 endContainer 노드들을 포함한 최상위 노드를 반환한다. 
ex)```<body> 결과물 </body>```
+ startContainer - Range의 시작 위치를 포함하는 Node를 반환한다.
+ endContainer - Range의 끝 위치를 포함하는 Node를 반환한다.
+ startOffset - startContainer 안에 있는 Range 시작을 나타내느 offset을 반환한다.
+ endOffset - endContainer 안에 있는 Range 끝을 나타내는 offset을 반환한다.
- - - - -

### 참고 자료
[selection MDN reference](https://developer.mozilla.org/ko/docs/Web/API/Selection)
[range MDN reference](https://developer.mozilla.org/ko/docs/Web/API/Range)