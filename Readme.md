# [Selection](https://developer.mozilla.org/ko/docs/Web/API/Selection)

Selection는 사용자, 캐럿의 현재 위치에 의해 선택된 텍스트의 범위를 나타냅니다.
사용자가 마우스를 통해 드래그하거나, 키보드를 통해 선택한 텍스트의 범위를 나타냅니다.
브라우저에서는 사용자가 선택한 텍스트에 대한 처리를 지원하기 위해 Selection API를 지원합니다.

+ selection검사 또는 조작을 위해 객체를 얻으려면 ```document.getSelection()```을 호출합니다.
+ 사용자는 왼쪽에서 오른쪽 또는 오른쪽에서 왼쪽을 선택 할 수 있습니다.<strong>(방향성 존재)</strong>
+ 데스크탑 마우스로 선택하면 마우스 버튼을 누른 위치에 앵커가 배치되고 마우스 버튼을 놓은 위치에 포커스가 배치됩니다.

### property
+ ```anchorNode``` - 드래그 또는 키보드 이벤트로 선택이 시작된 노드를 반환합니다.
없다면 null을 반환합니다.
+ ```anchorOffset``` - 선택이 시작된 노드에서 시작된 텍스트의 시작 지점을 의미합니다.
노드의 처음 시작점의 offset은 0 입니다.
    - ```Hello world```문장에서 선택된 문장이 ```world```라면 시작 지점은 7, 끝 지점은 11 입니다. `anchorOffset`은 7이 됩니다.
    - 시작 노드가 ```Text_Node``` 이면 커서보다 앞에 있는 ```ahchorNode```의 문자열 수
    - 시작 노드가 ```Element_Node``` 이면 시작 노드보다 앞에 있는 자식 노드의 수
+ ```focusNode``` - 선택이 종료된 지점에 있는 노드를 반환합니다. 없다면 null을 반환합니다.
+ ```focusOffset``` - 선택이 종료된 노드에서 텍스트의 종료 지점을 의미합니다. 노드의 처음 시작점의 offset은 0 입니다.
+ ```isCollapse``` - selection의 시작과 끝의 동일 여부를 반환합니다. -> 캐럿인지 판별
+ ```rangeCount``` - selection이 포함하고 있는 range의 수, 선택 영역의 범위 수를 반환합니다.
+ ```type```
    - ```Caret```: collapsed 상태 
    - ```Range``` : 범위가 선택된 상태
    - ```None``` : 아무런 이벤트가 발생되지 않은 경우

### method
+ ```selection.getRangeAt(index)``` - index에 있는 Range 객체를 반환합니다.
+ ```selection.addRange(range)``` - 현재 Selection에 Range를 추가합니다.
+ ```selection.collapse(node,offset)``` - 넘겨진 노드와 offset으로 Range를 접습니다.
offset을 지정해 이동시킬 노드가 자식 노드를 갖고 있는 경우, 몇 번째 자식 노드에서 접을지 지정할 수 있습니다.
+ ```selection.collapseToend()``` - 선택된 range의 끝 지점으로 접습니다.
+ ```selection.collapseTostart()``` - 선택된 range의 시작 지점으로 접습니다.
+ ```selection.containsNode(node, containmnet)``` - 주어진 노드가 선택된 범위 안에 존재하는지 확인하여 ```boolean``` 값으로 반환합니다.
    - ```true``` : 노드와 선택된 범위가 동일할 때, 포함된 것으로 인식.
    - ```false``` : 노드와 선택된 범위가 동일할 때, 포함되지 않은 것으로 인식.
+ ```selection.deleteFromDocument()``` - 선택된 범위를 Document 객체에서 제거합니다. 
(선택된 범위를 문서에서 제거합니다.)
+ ```selection.removeAllRanges()``` - Selection 객체 안에 모든 Range를 제거하여 아무것도 선택되지 않은 상태로 만듭니다.
+ ```selection.removeRange(range```) - 특정 Range를 Selection 객체 안에서 제거합니다.
제거할 Range 객체는 Selection 객체 안에 포함되어 있어야 합니다.
+``` selection.extend(node,offset)``` - anchor는 가만히 두고, focus만 주어진 노드와 offset으로 이동시킵니다.
+ ```setBaseAndExtend(anchorNode,anchorOffset,focusNode,focusOffset)``` - 주어진 노드로 선택 범위와 끝 지점을 지정합니다.
+ ```selection.selectAllChildren(parentNode)``` - 부모 노드를 넘겨주면 부모 노드 아래에 있는 모든 자식 노드가 선택됩니다.
+ ```selection.setPosition()``` - ```selection.collapse()``` 메소드와 동일합니다.
+ ```selection.empty()``` - ```removeAllRanges()``` 메소드와 동일합니다.

### event
+ ```selectStart``` - 유저의 드래그나 클릭에 의해 새로운 Range 객체가 연결될 때 발생하는 이벤트
+ ```selectchange``` - 현재 붙어있는 Range 객체가 아닌, 새로운 Range 객체가 붙거나, 현재 Range 객체의 경계선이 변형될 때 발생하는 이벤트

- - - - -


# [Range](https://developer.mozilla.org/ko/docs/Web/API/Range)
+ ```Range``` 객체는 주어진 document 내의 텍스트 노드들의 보분들과 documents의 단편화에 포함된 노드들을 나타내고 있다. 
+ ```Rnage``` 오브젝트는 document 객체에 포함되어 있는 createRange 메소드를 사용하여 생성할 수 있다. 또한 selection 객체에 포함되어 있는 getRangeAt 메소드를 사용하여 추출할 수 있다.
+ ```Selection.getRange(0);``` 을 통해 Range를 얻는다.
+ 다중 선택시 rangeCount 값을 이용해 Range를 구할 수 있다.
+ 일반적으로 하나의 Selection은 보통 하나의 Range를 갖고 있다. 하지만 Friefox의 경우, 한 Selection에 여러개의 Range객체를 가질수 있다.
    - 위와 같은 특성으로 인해 해당 브라우저를 지원하는 경우, 브라우저를 대응하는 코드 작성이 필요할 수 있다.

### property
+ ```collapsed``` - Range의 시작점과 끝점이 같은 위치인지를 알 수 있는 boolean 값을 반환한다.
+ ```commonAncestorContatiner``` - startContainer와 endContainer 노드들을 포함한 최상위 노드를 반환한다. 
ex)```<body> 결과물 </body>```
+ ```startContainer``` - 범위가 시작하는 부분을 포함하고 있는 노드
+ ```endContainer``` - 범위가 끝나는 부분을 포함하고 있는 노드
+ ```startOffset``` - ```startContainer``` 안에 있는 Range 시작을 나타내느 offset을 반환한다.
    - ```startContainer``` 가 Text_Node 라면 문자의 갯수
    - ```startContainer``` 가 Element_Node 라면 자식 노드의 인덱스
+ ```endOffset``` - ```endContainer``` 안에 있는 Range 끝을 나타내는 offset을 반환한다.

### method
+ ```range.setStart(refNode,startOffset)``` - 범위의 시작 지점을 ```refNode```, ```startOffset으로``` 지정합니다.
+ ```range.setEnd(refNode, endOffset)``` - 범위의 마지막 지점을 ```refNode``` ```,endOffset```으로 지정합니다.
+ ```range.setStartBefore(refNode)``` - 범위의 시작지점이```refNode```의 앞으로 지정되며, ```refNode```가 첫 번째 노드가 됩니다.
+ ```range.setStartAfter(refNode)``` - 범위의 시작 지점이```refNode```의 다음으로 지정되며, ```refNode```.```nextSibling이``` 첫번째 노드가 됩니다.
+ ```range.setEndBefore(refNode)``` - 범위의 마지막 지점이 ```refNode```앞으로 지정되며, ```refNode```.```previousSibling``` 이 마지막 노드가 됩니다.
+ ```range.selectNode(refNode)``` - element를 포함한 전체 노드를 선택합니다.(outerHtml)
+ ```range.selectNodeContents(refNode)``` - element의 하위 노드를 선택합니다.(innerHtml)
+ ```range.collapse(bool)``` : 선택된 범위를 접습니다.
    - ```true``` : 시작점으로 접습니다.
    - ```false``` : 끝점으로 접습니다.
+ ```range.cloneContents() ```- 범위를 복제한 뒤 , 복제한 범위의 DocumentFrament객체를 반환합니다.
+ ```range.deleteContents()``` - 범위를 제거합니다.
+ ```range.extractContents()``` : 범위를 삭제한 뒤 , 삭제된 범위으 DocumentFragment 객체를 반환합니다.
+ ```range.insertNode(newNode)``` : 범위의 앞에 ```newNode```를 삽입합니다.
+ ```range.surroundContents(newNode)``` : 콘텐츠를 ```newNode```로 감쌉니다.
    - 범위를 추출합니다 (```extractContents```)
    - ```newNode```를 범위의 위치에 추가합니다.(```insetNode```)
    - 추출한 콘텐츠를 newNode에 감쌉니다.(```appendChild```)
    - ```newNode```로 감싸기 위해서는 ```startContainer```,```endContainer```,```commonAncestorContainer``` 값이 동일해야합니다.
+ ```ragne.compareBounduryPoints(how,sourceRange)``` - 범위 경계가 겹치는지 확인합니다.

    + #### how(비교 방법)
+ ```range.START_TO_START(0)``` - ```range의 시작점```과 ```sourceRange의 시작점```을 비교합니다.
+ ```range.START_TO_END(1)``` - ```range의 시작점```과 ```sourceRange의 끝점```을 비교합니다.
+ ```range.END_TO_END(2)``` - ```range의 끝점```과 ```sourceRange의 끝점```을 비교합니다.
+ ```range_END_TO_START(3)``` - ```range의 끝점```과 ```sourceRange의 시작점```을 비교합니다.

    + #### 반환값 
+ range의 비교 지점과 sourceRange의 비교 지점을 비교하여 반환합니다.
    - ```-1```: range의 비교 지점이 앞에 있을 때
    - ```0```: range와 sourceRange의 비교 지점이 일치할 때
    - ```1```: range의 비교 지점이 뒤에 있을 때
+ ```range.cloneRange()``` - 범위를 복제할 수 있습니다.
+ ```range.detach()``` - 범위로 할 일이 끝났다면 메모리를 회수합니다.
- - - - -

### anchor , focus

+ Selection은 anchor 값과 focus 값을 가집니다.
    - `anchor` : 텍스트를 선택한 지점
    - `focust` : 선택이 종료된 지점
    - Selection은 방향을 가진다는 것을 알 수 있습니다.
+ 좌측에서 우측으로 마우스 드래그를 한다면 ```focus```값이 더 클 것이고, 반대로 우측에서 좌측으로 드래그 한다면 ```anchor```값이 더 클것입니다.

- - - - -
### 참고 자료
[selection MDN reference](https://developer.mozilla.org/ko/docs/Web/API/Selection)</br>
[range MDN reference](https://developer.mozilla.org/ko/docs/Web/API/Range)</br>
[selection interface](https://w3c.github.io/selection-api/#selection-interface)</br>
[캐럿 브라우징에 대해서](https://zkim0115.tistory.com/1983)<br/>