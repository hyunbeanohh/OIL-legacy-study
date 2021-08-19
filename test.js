function getStartEndContainer(caretParentNode) {
    while (caretParentNode !== null) {
      if (
        caretParentNode.tagName === "P" ||
        caretParentNode.tagName === "H1" ||
        caretParentNode.tagName === "H2" ||
        caretParentNode.tagName === "H3" ||
        caretParentNode.tagName === "LI"
      ) {
        return caretParentNode;
      }
      caretParentNode =
        caretParentNode.parentNode || caretParentNode.parentElement;
    }
  }

// -------------------------------------------------------//

  function test(start, end) {
    var testArr = [];

    while (start !== end) {
      if (
        start.tagName === "P" ||
        start.tagName === "H1" ||
        start.tagName === "H2" ||
        start.tagName === "H3" ||
        start.tagName === "LI"
      ) {
        testArr.push(start);
      } else if (start.tagName === "DIV") {
        if (start.childNodes.length > 0) {
          testArr.push(test(start.firstElementChild, end).flat());
          break;
        }
      }

      if (start.nextElementSibling !== null) {
        start = start.nextElementSibling;
      } else {
        while (start.parentElement !== null) {
          start = start.parentElement;
 
          if (start.nextElementSibling !== null) {
            start = start.nextElementSibling;
            break;
          }
        }
      }
    }
    if (start === end) {
      testArr.push(start);
    }
    return testArr.flat();
  }

// -------------------------------------------------------//

  Editor.prototype.addHeadingDeco = function (headingName) {
    var caret = this.element.caret;
    var sel = document.getSelection();
    var rng = document.createRange();

    var start = caret.startContainer;
    var end = caret.endContainer;

    var arr = [];
    // parentNode구하기

    var startParent = getStartEndContainer(start);
    var endParent = getStartEndContainer(end);

    arr.push(test(startParent, endParent).flat());

    var startIndex = 0;
    var endIndex = 0;
    if (
      start.parentElement.tagName === "P" ||
      start.parentElement.tagName === "H1" ||
      start.parentElement.tagName === "H2" ||
      start.parentElement.tagName === "H3"
    ) {
      for (var i = 0; i < start.parentElement.childNodes.length; i++) {
        if (start.parentElement.childNodes[i] === start) {
          startIndex = i;
        }
      }
    } else {
      for (var i = 0; i < start.parentElement.parentElement.childNodes.length;i++){
        if (
          start.parentElement.parentElement.childNodes[i] === start.parentElement){
          startIndex = i;
        }
      }
    }
    if (
      end.parentElement.tagName === "P" ||
      end.parentElement.tagName === "H1" ||
      end.parentElement.tagName === "H2" ||
      end.parentElement.tagName === "H3"
    ) {
      for (var i = 0; i < end.parentElement.childNodes.length; i++) {
        if (end.parentElement.childNodes[i] === end) {
          endIndex = i;
        }
      }
    } else {
      for (var i = 0; i < end.parentElement.parentElement.childNodes.length; i++) {
        if (end.parentElement.parentElement.childNodes[i] === end.parentElement){
          endIndex = i;
        }
      }
    }

    var startOffset = this.element.caret.startOffset;
    var endOffset = this.element.caret.endOffset;

    if (arr.flat() !== null) {
      var stAnch = "";
      var enAnch = "";

      if (
        headingName === "h1" ||
        headingName === "h2" ||
        headingName === "h3"
      ) {
        arr.flat().forEach(function (el, index) {
          var node = document.createElement(headingName);
          node.innerHTML = el.innerHTML;
          el.outerHTML = node.outerHTML;
        });
      } else {
        arr.flat().forEach(function (el, index) {
          var node = document.createElement("p");
          el.style.font = "14px Verdana";
          node.innerHTML = el.innerHTML;
          el.outerHTML = node.outerHTML;
        });
      }

      stAnch =
        this.element.caret.startContainer.childNodes[
          this.element.caret.startOffset
        ];
      enAnch =
        this.element.caret.endContainer.childNodes[
          this.element.caret.endOffset
        ];

      if (stAnch.childNodes.length > 1 && startIndex !== 0) {
        rng.setStart(
          stAnch.childNodes[startIndex].childNodes[0],
          startOffset
        );
        if (enAnch.childNodes.length > 1 && endIndex !== 0) {
          rng.setEnd(enAnch.childNodes[endIndex].childNodes[0], endOffset);
        } else {
          rng.setEnd(enAnch.childNodes[0], endOffset);
        }
      } else {
        rng.setStart(stAnch.childNodes[0], startOffset);
        if (enAnch.childNodes.length > 1 && endIndex !== 0) {
          rng.setEnd(enAnch.childNodes[endIndex].childNodes[0], endOffset);
        } else {
          rng.setEnd(enAnch.childNodes[0], endOffset);
        }
      }
      sel.removeAllRanges();
      sel.addRange(rng);

      // range 저장하는 방법
      // 1. outerHTML 수정
      // 2. appendChild를 통해 기존 태그의 자식을 삽입 후 기존 태그를 지운다
      // 3. 기존 range에 span태그를 생성 후 내용을 지운 뒤에 새로 만든 태그를 넣어준다.
    }
  };