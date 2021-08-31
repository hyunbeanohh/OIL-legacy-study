var toolbtn = [
    {key:"newWirte", value:"새글", ui : "far fa-newspaper" ,id : "newWrite", cmd : "none"},
    {key:"bold", value:"강조", ui : "fas fa-bold", cmd :"bold", id : "bold"},
    {key:"italic", value:"기울기", ui : "fas fa-italic", cmd :"italic", id : "italic"},
    {key:"underline", value:"밑줄", ui : "fas fa-underline" , cmd :"underline", id :"underline"},
    {key:"strike", value:"취소선", ui : "fas fa-strikethrough" , cmd :"strikethrough" , id :"strike"},
    {key:"emoji", value:"이모티콘", ui :"far fa-smile" , cmd:"none", id :"emoji"}
];

var options = [
    {key:"h1", value:"제목1", cmd :"h1"},
    {key:"h2", value:"제목2", cmd :"h2"},
    {key:"h3", value:"제목3", cmd :"h3"},
    {key:"h4", value:"제목4", cmd :"h4"},
    {key:"h5", value:"제목5", cmd :"h5"},
    {key:"h6", value:"제목6", cmd :"h6"}
    ];

var footerbtn = [
    {key:"toEdit", value:"편집"},
    {key:"toHtml", value:"HTML"},
    {key:"toPreView", value:"미리 보기"},
    // {key:"setBodyValue", value:"setBodyValue"},
    // {key:"getBodyValue", value:"getBodyValue"},
];
var getsetbtn = [
    {id : "getValue", value : "getValue()"},
    {id : "setValue", value : "setValue()"},
    {id : "getBodyValue", value : "getBodyValue()"},
    {id : "setBodyValue", value : "setBodyValue()"}
]
var emoticon = [
    {title : "윙크", src : '<img alt="윙크" title="윙크" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/02.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "방긋", src : '<img alt="방긋" title="방긋" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/01.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "깔깔", src : '<img alt="깔깔" title="깔깔" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/03.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "사랑", src : '<img alt="사랑" title="사랑" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/04.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "엉엉", src : '<img alt="엉엉" title="엉엉" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/05.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "절규", src : '<img alt="절규" title="절규" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/06.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "파안", src : '<img alt="파안" title="파안" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/07.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "크크", src : '<img alt="크크" title="크크" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/08.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "멋쟁이", src : '<img alt="멋쟁이" title="멋쟁이" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/09.png" style="vertical-align: baseline; cursor: pointer;">'},
    {title : "헤롱", src : '<img alt="헤롱" title="헤롱" src="http://comp.namoeditor.co.kr/ce4/demo/crosseditor/images/emoticon/10.png" style="vertical-align: baseline; cursor: pointer;">'},
];

var editor = function(node) {

    this.element = {
        root: document.getElementById(node.root)
    }
    this.width = node.width;
    this.height = node.height;

    function setValueParser(a){
        var b = '';
    
        b = a.replace(/<html>/g,'');
        b = b.replace(/<body>/g,'');
        b = b.replace(/<head>/g,'');
        b = b.replace(/<body>/g,'');
        b = b.replace("</head>",''); 
        b = b.replace("</body>",''); 
        b = b.replace("</html>",''); 
        b= b.replace(/<body style="word-break: break-all;">/,'');
    
        return b;
    };

    function findPtag(str){
        var searchTag = "</p><";
        var h1Tag = "</h1><"
        var pos = 0;

        while(true){
            var foundPos = str.value.indexOf(searchTag,pos);
            var foundH1Pos = str.value.indexOf(h1Tag,pos);
           console.log(foundPos);
            if(foundPos == -1) break;
            var output = [str.value.slice(0,foundPos+4),"\n",str.value.slice(foundPos+4)].join('');
            var replaceAll = output.replaceAll("<p/><","<p>\n<");

            str.value = replaceAll;
            pos = foundPos + 1;
        }
        return str
    }


    function setWidth(){
        var getEditor = this.element.root.querySelector("#Editor");
        getEditor.style.width = this.width;
    };

    function setHeight(){
         var getEditSection = this.element.root.querySelector("#edit_section");
            getEditSection.childNodes[0].style.height = this.height;
    };

    function settingTag(){
        var tempDiv = document.createElement("div");
        tempDiv.id = "Editor"
        this.element.root.appendChild(tempDiv);

        var tagAttribute = ["header_section","edit_section","footer","getsetArea"];
        
        for(var i = 0 ; i<tagAttribute.length; i++){
            var creDiv = document.createElement("div");
            creDiv.id = tagAttribute[i];
            tempDiv.appendChild(creDiv);
        }
     };

     function addSelect(id,name,options){
        var select = document.createElement("select");
        select.id = id;
        select.name = name;

        var option = document.createElement("option");
        option.value = "전체";
        option.text = "제목1~6";
    
        select.appendChild(option);
    
        for(var i in options){
            var option = document.createElement("option");
            option.value = options[i].key;
            option.text = options[i].value;
            //option.setAttribute("data-cmd",`${options[i].cmd}`);
            select.appendChild(option)
        }
        return select;
     };

     function addSelectBtn(){
        var getHeaderSection = this.element.root.querySelector("#header_section");
        var select = addSelect('boxId','boxName',options);
        getHeaderSection.appendChild(select); 
     };

     function addBtn(){
        var getHeaderSection = this.element.root.querySelector("#header_section");
        
        for(var i = 0; i<toolbtn.length; i++){
            var creBtn = document.createElement("button");
            var creUI = document.createElement("i");

            
            creBtn.type = "button";
            creBtn.title = toolbtn[i].value;
            creBtn.id = toolbtn[i].id;
            creBtn.setAttribute("data-cmd",`${toolbtn[i].cmd}`)
    
            creUI.className = toolbtn[i].ui;
            creBtn.appendChild(creUI);
            
            getHeaderSection.appendChild(creBtn);
        };
     };

     function modalView(){ 
        var getEditSection = this.element.root.querySelector("#edit_section");
        var getModalBtn = this.element.root.querySelector("#emoji");
        var edit = getEditDocument();

        getModalBtn.addEventListener("click",function(e){
            var getModalId = document.getElementById("modal")
            if(getModalId === null){
                var creModalDiv = document.createElement("div" );
                creModalDiv.id = "modal";
                
                var creModalContent = document.createElement("div");
                creModalContent.className = "modal-content";
                var creModalHeader = document.createElement("div");
                creModalHeader.className = "modal-header";
                creModalContent.appendChild(creModalHeader);
    
                var creCloseSpan = document.createElement("span");
                var creTextSpan = document.createElement("span");
                creTextSpan.className = "closeText";
                creTextSpan.innerText = "이모티콘"
                creCloseSpan.className = "close";
                creCloseSpan.innerText = "X";
                // 헤더 영역
    
                // 바디 영역
                var creBodyModal = document.createElement("div"); 
                creBodyModal.className = "modal-body";

                for(var i = 0; i<emoticon.length; i ++){
                    var creBodyAnchor = document.createElement("a");
                    creBodyAnchor.style = "margin : 5px 5px 0 0; line-height: 30px"
                    creBodyAnchor.innerHTML = emoticon[i].src;
                    creBodyModal.appendChild(creBodyAnchor);
                }
                
                
                creModalHeader.appendChild(creCloseSpan);
                creModalHeader.appendChild(creTextSpan);
                creBodyModal.appendChild(creBodyAnchor);
                creModalContent.appendChild(creBodyModal);
                creModalDiv.appendChild(creModalContent);
                
                document.body.appendChild(creModalDiv);
                creModalDiv.style.display = "block";

                var creBlockBtn = document.createElement("button");
                creBlockBtn.id = "closeBtn";
                creBlockBtn.style = "position:absolute; width:150%; height:320%; left:-50%; top:-30%; background-color : white; opacity:0.01;"
                document.body.appendChild(creBlockBtn)

                creCloseSpan.addEventListener("click",function(){
                    creModalDiv.style.display = "none";
                    creBlockBtn.style.display = "none";

                });

                var getBodyModal = document.getElementsByClassName("modal-body");
                for(var i = 0; i<getBodyModal[0].childNodes.length; i++){
                    getBodyModal[0].childNodes[i].addEventListener("click",function(e){
                        //console.log(e.target)
                        var sel = getEditSection.childNodes[0].contentWindow.document.getSelection(0);
                        var rng = sel.getRangeAt(0);
                        
                        var node = e.target
                        var cloneNode = node.cloneNode();
                        //sel.removeAllRanges();
                        rng.deleteContents();

                        rng.insertNode(cloneNode);
                        rng.collapse(false);
                        
                        sel.removeAllRanges();
                        sel.addRange(rng);

                        edit.body.focus();
                        creModalDiv.style.display = "none";
                        creBlockBtn.style.display = "none";
                    })
                }
                
            }else{
                var getModalId = document.getElementById("modal");
                getModalId.style.display = "block";
            }

        })
        window.onclick = function(e){
            var getModalId = document.getElementById("modal");
            var getBlockBtn = document.getElementById("closeBtn");
            if(e.target === getBlockBtn){
                console.log(e.target)
                getModalId.style.display = "none";
                getBlockBtn.style.display = "none";
            }
        };
     };

    function titleText(){
        var getHeaderSection =this.element.root.querySelector("#header_section");
        var creSpan = document.createElement("span");
        var txt = document.createTextNode("💻");
        creSpan.id = "editorTextId";
        creSpan.appendChild(txt);
        getHeaderSection.appendChild(creSpan);
     };

    function getEditDocument(){
        return this.editIframe.contentWindow.document;
     };

    function addEditView(){
        var createIframeTag = document.createElement("iframe");
        createIframeTag.style.height = "350px";
        createIframeTag.id = "output";
        createIframeTag.name = "textFiled";
        this.editIframe = createIframeTag;
        var getSection = this.element.root.querySelector("#edit_section");
        getSection.appendChild(createIframeTag);
        var edit = this.element.root.querySelector("#output").contentWindow.document;
        edit.body.style = "word-break: break-all;"
        edit.body.innerHTML = "<p></br></p>";
        edit.designMode = "On";
        edit.body.focus();
     };

    function footerView(){
        var getFooter = this.element.root.querySelector("#footer");
        var creResizeBtn = document.createElement("button");
        var creResizeDiv = document.createElement("div");
        var creReiszeinnerDiv = document.createElement("div");
        creResizeDiv.id = "reSizeDiv";
        creReiszeinnerDiv.id = "resSizeInnerDiv";
        creResizeBtn.id = "resizeBtn";

        for(var i = 0; i<footerbtn.length; i++){
            var creDiv = document.createElement("div");
            creDiv.innerHTML = footerbtn[i].value;
            creDiv.id = footerbtn[i].key;
            getFooter.appendChild(creDiv);
        }
        getFooter.after(creResizeDiv);
        creResizeDiv.appendChild(creReiszeinnerDiv);
        creResizeDiv.appendChild(creResizeBtn);
     };

    function toolbarEvt(){
        var boldId = this.element.root.querySelector("#bold");
        var italicId = this.element.root.querySelector("#italic");
        var underlineId = this.element.root.querySelector("#underline");
        var strikeId = this.element.root.querySelector("#strike");
        var edit = this.element.root.querySelector("#output").contentWindow.document;
    
        boldId.addEventListener("click",function(e){
           
            if(boldId.className === ""){
                boldId.className = "changeBold";
            }else{
                boldId.classList.remove("changeBold");
        }
        edit.body.focus();
    });

    
        italicId.addEventListener("click",function(e){
            if(italicId.className === ""){
                italicId.className = "changeItalic";
            }else{
                italicId.classList.remove("changeItalic")
            }
            edit.body.focus();
        });
    
        underlineId.addEventListener("click",function(e){
           
            if(underlineId.className === ""){
                underlineId.className = "changeUnderline";
            }else{
                underlineId.classList.remove("changeUnderline");
            }
            edit.body.focus();
    });
    
        strikeId.addEventListener("click",function(e){
           
            if(strikeId.className === ""){
                strikeId.className = "changeStrike";
            }else{
                strikeId.classList.remove("changeStrike");
            }
            edit.body.focus();
        });
     };

     function newWriteFunction(){
        var getnewWriteId = this.element.root.querySelector("#newWrite");
        var doc = getEditDocument();
        var boldId = this.element.root.querySelector("#bold");
        var italicId = this.element.root.querySelector("#italic");
        var underlineId = this.element.root.querySelector("#underline");
        var strikeId = this.element.root.querySelector("#strike");
 
         getnewWriteId.addEventListener("click",function(){
             var confirmVal = window.confirm('저장되어 있던 글이 모두 삭제됩니다.');
             
             var edit = doc;
            
             
             if(confirmVal === true){
                 edit.body.innerHTML = "<p></br></p>";
                 
                 boldId.className = "bold";
                 italicId.className = "italic";
                 underlineId.className = "underline";
                 strikeId.className = "strike";
                 this.curState = "Edit";
                 console.log(this.curState);
                 edit.body.focus();
         
             }else{
                 return
             }
         })
     };

     function getStartEndContainer(parentNode){
        while(parentNode !== null){
            if(parentNode.tagName === "P" || parentNode.tagName === "H1" ||  parentNode.tagName === "H2"
            || parentNode.tagName === "H3" || parentNode.tagName === "H4" ||  parentNode.tagName === "H5" 
            || parentNode.tagName === "H6" ){
                return parentNode;
            }
            parentNode = parentNode.parentNode || parentNode.parentElement;
        } 
     };

    function getNextSibling(start,end){
        var siblingArr = [];

        while(start !== end ){
            if(start.tagName === "P" || start.tagName === "H1" ||  start.tagName === "H2"
            || start.tagName === "H3" || start.tagName === "H4" ||  start.tagName === "H5" 
            || start.tagName === "H6" ){
                siblingArr.push(start);
            }else if(start.tagName === "DIV"){
                if(start.childNodes.length > 0){
                    siblingArr.push(getNextSibling(start.firstElementChild, end).flat());
                    break;
                }
            }
            if(start.nextElementSibling !== null){
                start = start.nextElementSibling;
            }else{
                while(start.parentElement !== null){
                    start = start.parentElement;
    
                    if(start.nextElementSibling !== null){
                        start = start.nextElementSibling;
                        break;
                    }
                }
            }
        }

        
        if(start === end){
            siblingArr.push(start);
        }
        return siblingArr.flat();
     };

    function addHeader(node){
        var edit = getEditDocument();
        var curSel = this.element.root.querySelector("#edit_section")
        .childNodes[0].contentWindow.document.getSelection().getRangeAt(0);

        var sel = edit.getSelection();
        var rng = edit.createRange();

        var start = curSel.startContainer;
        var end = curSel.endContainer;
        console.log(start,end);
        var parentNodeArr = [];

        var startParent = getStartEndContainer(start);
        var endParent = getStartEndContainer(end);

        parentNodeArr.push(getNextSibling(startParent,endParent).flat());

        var startIndex = 0;
        var endIndex = 0;

        if(start.parentElement.tagName === "P"||
           start.parentElement.tagName === "H1" || 
           start.parentElement.tagName === "H2" || 
           start.parentElement.tagName === "H2" || 
           start.parentElement.tagName === "H3" || 
           start.parentElement.tagName === "H4" || 
           start.parentElement.tagName === "H5" || 
           start.parentElement.tagName === "H6"){
            for(var i = 0; i< start.parentElement.childNodes.length;i ++){
                if(start.parentElement.childNodes[i] === start){
                    startIndex = i;
                }
            }
        }else{
            for(var i = 0; i<start.parentElement.parentElement.childNodes.length; i++){
                if(start.parentElement.parentElement.childNodes[i] === start.parentElement){
                    startIndex = i;
                }
            }
        }

        if(end.parentElement.tagName === "P" || end.parentElement.tagName === "H1" || end.parentElement.tagName === "H2"||
           end.parentElement.tagName === "H3" || end.parentElement.tagName === "H4" || end.parentElement.tagName === "H5" ||
           end.parentElement.tagName === "H6" 
        ){
            for(var i = 0; i<end.parentElement.childNodes.length; i++){
                if(end.parentElement.childNodes[i] === end){
                    endIndex = i;
                }
            }
        }else{
            for(var i = 0; i<end.parentElement.parentElement.childNodes.length; i++){
                if(end.parentElement.parentElement.childNodes[i] === end.parentElement){
                    endIndex = i;
                }
            }
        }

        var startOffset = curSel.startOffset;
        var endOffset = curSel.endOffset;

        console.log(startOffset, endOffset)


        if(parentNodeArr.flat() !== null){
            var startAnchor = "";
            var endAnchor = "";

            if(node === "p" || node === "h1" || node === "h2" ||
               node === "h3" || node === "h4" || node === "h5" ||
               node === "h6"
            ){
                parentNodeArr.flat().forEach(function(el){
                    var creNode = document.createElement(node);
                    creNode.innerHTML = el.innerHTML;
                    el.outerHTML = creNode.outerHTML;
                    console.log(el)
                })
            }else{
                parentNodeArr.flat().forEach(function(el){
                    var creNode = document.createElement("p");
                    el.style.font = "16px";
                    creNode.innerHTML = el.innerHTML;
                    el.outerHTML = creNode.outerHTML;
                    console.log(el)
                })
            }
        
        
        startAnchor = curSel.startContainer.childNodes[curSel.startOffset];
        endAnchor = curSel.endContainer.childNodes[curSel.endOffset];

        console.log(startAnchor,endAnchor);

        if(startAnchor.childNodes.length > 1 && startIndex !== 0){
            rng.setStart(startAnchor.childNodes[startIndex].childNodes[0],startOffset);

        if(endAnchor.childNodes.length > 1 && endIndex !== 0){
            rng.setEnd(endAnchor.childNodes[endIndex].childNodes[0],endOffset);
        }else{
            rng.setEnd(endAnchor.childNodes[0],endOffset);
            }
        }

        else{
            rng.setStart(startAnchor.childNodes[0],startOffset);
            if(endAnchor.childNodes.length > 1 && endIndex !== 0){
                rng.setEnd(endAnchor.childNodes[endIndex].childNodes[0], endOffset);
            }else{
                rng.setEnd(endAnchor.childNodes[0],endOffset);
            }
        }

        sel.removeAllRanges();
        sel.addRange(rng);
        edit.body.focus();

        edit.body.addEventListener("keyup",function(e){
            if(e.keyCode === 13){   
                var crePtag = document.createElement("P");
                crePtag.innerHTML = "</br>";
                console.log(curSel.endContainer.childNodes);
                if(curSel.endContainer.childNodes[curSel.endContainer.childNodes.length-1].innerHTML === "<br>"){
                    curSel.endContainer.childNodes[curSel.endContainer.childNodes.length-1].remove();
                    curSel.endContainer.childNodes[curSel.endContainer.childNodes.length-1].after(crePtag);
                    
                }
            }
        })
    }
};

function addHeaderFunction(){
    var getSelectBox = this.element.root.querySelector("#boxId");
    t = this;
    
    getSelectBox.addEventListener("change",function(){
        var optionValue = getSelectBox.options[getSelectBox.selectedIndex].value;
        
        if(optionValue === "h1"){
            console.log(optionValue);
            addHeader("h1");
            
        }
        else if(optionValue === "h2"){
            console.log(optionValue);
            addHeader("h2");
            
        }
        else if(optionValue === "h3"){
            console.log(optionValue);
            addHeader("h3");
            
        }
        else if(optionValue === "h4"){
            console.log(optionValue);
            addHeader("h4");
            
        }
        else if(optionValue === "h5"){
            console.log(optionValue);
            addHeader("h5");
           
        }
        else if(optionValue === "h6"){
            console.log(optionValue);
            addHeader("h6");
           
        }
    })
};

function fontFunction(){
    var buttons = this.element.root.querySelectorAll("button");
    var doc = getEditDocument();

    for(var i = 0; i<buttons.length; i++){
    
        buttons[i].addEventListener('click',function(){
        var cmd = this.getAttribute('data-cmd');
        doc.execCommand(cmd,false,null);
        })
    }
};

function backspacePrevent(){
    var edit = this.element.root.querySelector("#output").contentWindow.document;
    edit.addEventListener("keyup",function(evt){
        if(evt.defaultPrevented){
            return
        }
        var handled = false;
        if(event.keyCode === 8 && edit.body.innerHTML === ""){
            handled = true;
            edit.body.innerHTML = "<p></br></p>";
        }
    },true)
};

function btnCheck(){
    var getEditSection = this.element.root.querySelector("#edit_section").childNodes[0].contentWindow.document;
    var boldId = this.element.root.querySelector("#bold");
    var italicId = this.element.root.querySelector("#italic");
    var underlineId =this.element.root.querySelector("#underline");
    var strikeId =this.element.root.querySelector("#strike");

    getEditSection.addEventListener("selectionchange",function(){
        var startContainer  = getEditSection.getSelection(0).getRangeAt(0).startContainer;
        var tagName = startContainer.tagName;
        var arr = [];

        while(true){
            startContainer = startContainer.parentNode;
            tagName = startContainer.tagName;
            arr.push(tagName);
            if(tagName === "BODY"){
                break;
            }
        }
        //console.log(arr);
        
        boldId.classList.remove("changeBold");
        italicId.classList.remove("changeItalic");
        underlineId.classList.remove("changeUnderline")
        strikeId.classList.remove("changeStrike");

        

        for(var i = 0 ; i<arr.length; i++){
            if(arr[i] === "B") boldId.className = "changeBold";
            if(arr[i] === "I") italicId.className = "changeItalic";
            if(arr[i] === "U") underlineId.className = "changeUnderline";
            if(arr[i] === "STRIKE") strikeId.className = "changeStrike";
        }
    })
};

function resizeEvt(){
    var getEditSection = this.element.root.querySelector("#edit_section");
    var getIframe = getEditSection.childNodes[0];
    var getResizeBtn = document.getElementById("resizeBtn");

    getResizeBtn.addEventListener("mousedown",initDrag,false);

    var  startY, startHeight;
    var creDiv = document.createElement("div");
    creDiv.id = "tempDiv";
    creDiv.style = "position: absolute; width: 150%; height: 320%; left: -50%; top: -30%; background-color: white; opacity: 0.01;";
    
    function initDrag(e){
        
        startX = e.clientX;
        startY = e.clientY;

        
        getIframe.after(creDiv);


        if(t.currentState === "Edit"){
            startHeight = parseInt(getIframe.offsetHeight, 10);

            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
           
        }
        else if(t.currentState === "HTML"){
            
            var getTextAreaId = getEditSection.childNodes[1];
            startHeight = parseInt(getTextAreaId.offsetHeight, 10);
            
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);

        }else if(t.currentState === "PreView"){

            startHeight = parseInt(getIframe.offsetHeight, 10);

            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
            
        };
    }
    
    function doDrag(e) {
        if(t.currentState === "Edit"){
            getIframe.style.height = (startHeight + e.clientY - startY) + 'px';
        }
       
        else if(t.currentState === "HTML"){
            var getTextAreaId = getEditSection.childNodes[1];
            getTextAreaId.style.height = (startHeight + e.clientY - startY) + 'px';
        }
        
        else if(t.currentState === "PreView"){
            getIframe.style.height = (startHeight + e.clientY - startY) + 'px';
        }
    };

    function stopDrag(e) {
        document.documentElement.removeEventListener('mousemove', doDrag, false);
        document.documentElement.removeEventListener('mouseup', stopDrag, false);
        creDiv.remove();
    };
    
  
};

function footerEvt(){
    var getToEdit = this.element.root.querySelector("#toEdit");
    var getToHtml = this.element.root.querySelector("#toHtml");
    var getToPreView = this.element.root.querySelector("#toPreView");
    getToEdit.style.backgroundColor="#f1f2f6"; 

    var edit = getEditDocument();
    var getEditSection = this.element.root.querySelector("#edit_section");

   
    var getBtn = this.element.root.querySelectorAll("button");
    var getBoxId = this.element.root.querySelector("#boxId");
    var getIframe = this.element.root.querySelector("Iframe");
    var getResizeBtn = this.element.root.querySelector("#resizeBtn");

    var creTa = document.createElement("textarea");
    creTa.id = "textAreaId";

    t = this;
    t.currentState = "Edit";

     getToEdit.addEventListener("click",function(){
        getToEdit.style.backgroundColor = "#f1f2f6";
        getToHtml.style.backgroundColor = "";
        getToPreView.style.backgroundColor ="";

        

        if(t.currentState === "HTML"){
            for(var i =0; i<getBtn.length;i++){
                getBtn[i].removeAttribute("disabled","");
                getBtn[i].style.backgroundColor = "";
            }
            getBoxId.removeAttribute("disabled","");
            getResizeBtn.removeAttribute("disabled","");

            

            edit.body.designMode = "On";

            getEditSection.childNodes[1].style.display ="none";
            edit.body.innerHTML = getEditSection.childNodes[1].value;
            getIframe.style =  "";
            getEditSection.childNodes[0].style.height = getEditSection.childNodes[1].style.height;

            t.currentState = "Edit";
            console.log(t.currentState);
            
            
        }else if(t.currentState === "PreView"){
            edit.designMode = "On";
            for(var i = 0; i<getBtn.length;i++){
                getBtn[i].removeAttribute("disabled","");
            }
            getBoxId.removeAttribute("disabled","");
            getResizeBtn.removeAttribute("disabled","");
            t.currentState = "Edit";
           
            console.log(t.currentState);
        
        }   
    }.bind(t));

    getToHtml.addEventListener("click",function(e){ // 소스 보기
        getToEdit.style.backgroundColor = "";
        getToHtml.style.backgroundColor = "#f1f2f6";
        getToPreView.style.backgroundColor ="";
        
        for(var i = 0; i<getBtn.length;i++){
            getBtn[i].setAttribute("disabled",true);
            getBtn[i].style.backgroundColor = "white";
        }
        getBoxId.setAttribute("disabled",true);

        getResizeBtn.removeAttribute("disabled","");
        getResizeBtn.style.backgroundColor ="";
        
        if(t.currentState === "Edit"){ //edit -> html
            edit.designMode = "On";
            
            getResizeBtn.style.backgroundColor ="";
            getEditSection.appendChild(creTa);
            creTa.value = edit.body.innerHTML;

            getIframe.style.display = "none";
            getEditSection.childNodes[1].style = "width:802px; resize:none; font-size:16px; outline:none; font-family: Malgum Gothic; color:#000000; border:1px solid black";
            
            getEditSection.childNodes[1].style.height = getEditSection.childNodes[0].style.height;
            var Text = getEditSection.childNodes[1]
            findPtag(Text)
           

            t.currentState = "HTML";
            console.log(t.currentState);
            
        }else if(t.currentState === "PreView"){ // 미리 보기 -> html

            edit.designMode = "On";
            getResizeBtn.style.backgroundColor ="";
            getIframe.style.display= "none";

            getEditSection.appendChild(creTa);
            getEditSection.childNodes[1].style = "width:802px; height:348px; resize:none; font-size:16px; outline:none; font-family: Malgum Gothic; color:#000000; border:1px solid black";
            getEditSection.childNodes[1].style.height = getEditSection.childNodes[0].style.height;
            creTa.value = edit.body.innerHTML;

            t.currentState = "HTML";
            console.log(t.currentState);
            
        }
       
    }.bind(t));

    getToPreView.addEventListener("click",function(){ // 미리 보기 
        getToEdit.style.backgroundColor = "";
        getToHtml.style.backgroundColor = "";
        getToPreView.style.backgroundColor ="#f1f2f6";

        for(var i = 0; i<getBtn.length;i++){
            getBtn[i].setAttribute("disabled",true);
            getBtn[i].style.backgroundColor = "white";
        }
        
        getBoxId.setAttribute("disabled",true);
        getResizeBtn.removeAttribute("disabled","");

        if(t.currentState === "HTML"){
            edit.designMode= "Off";

            getResizeBtn.style.backgroundColor ="";
            

            getIframe.style= "";
            getEditSection.childNodes[1].style.display ="none";
            edit.body.innerHTML = getEditSection.childNodes[1].value;
            getEditSection.childNodes[0].style.height = getEditSection.childNodes[1].style.height;
            t.currentState="PreView";
            console.log(t.currentState)

        }else if(this.currentState === "Edit"){
            edit.designMode= "Off";
            getResizeBtn.style.backgroundColor ="";
            
            t.currentState="PreView";
            console.log(t.currentState);
            
        }
        
    }.bind(t));
};

function getValue(){
    var getEditSection = this.element.root.querySelector("#edit_section");
    var doc = getEditDocument();
    var getIframe = this.element.root.querySelector("Iframe");
    var edit = doc;
    var fullHtml = edit.body.parentNode.outerHTML;
    if(t.currentState === "Edit"){
        return fullHtml;
    }
    else if(t.currentState === "HTML"){
        getIframe.style.display = "";
        getIframe.style = "left: -10000px; top: -10000px; position:fixed;";
        edit.body.innerHTML = getEditSection.childNodes[1].value;
        fullHtml = edit.body.parentNode.outerHTML;
        return fullHtml;
    }else if(t.currentState === "PreView"){
        return fullHtml;
    }
};

function setValue(data = "<p></br></p>"){
    var edit = getEditDocument();
    var getEditSection = this.element.root.querySelector("#edit_section");
    if(t.currentState === "Edit"){
        edit.body.innerHTML = data;
        edit.body.focus();
    }
    else if(t.currentState === "HTML"){
        getEditSection.childNodes[1].value = setValueParser(data);
        getEditSection.childNodes[1].focus();
    }else if(t.currentState === "PreView"){
         return ;
    }
};

function getBodyValue(){
    var getEditSection = this.element.root.querySelector("#edit_section");
    var doc = getEditDocument();
    var edit = doc;
    if(t.currentState === "Edit"){
        return edit.body.innerHTML;
    }
    else if(t.currentState === "HTML"){
        return getEditSection.childNodes[1].value;
        
    }else if(t.currentState === "PreView"){
        return edit.body.innerHTML;
    }
};

function setBodyValue(data = "<p></br></p>"){
    var getCreTa = document.querySelector("#creText");
    var getEditSection = this.element.root.querySelector("#edit_section");
    var doc = getEditDocument();
    var edit = doc;
    if(t.currentState === "Edit"){
        edit.body.innerHTML = data;
        edit.body.focus();
    }
    else if(t.currentState === "HTML"){
        getEditSection.childNodes[1].value =  setValueParser(data);
        getEditSection.childNodes[1].focus();
    }else if(t.currentState === "PreView"){
        return false;
    }
};

function renderHeader(){
    addSelect();
    addSelectBtn();
    addBtn();
    titleText();
};

function renderContent(){
    addEditView();
};

function renderFooter(){
    footerView();
};

function addHeaderEvt(){
    toolbarEvt();
    newWriteFunction();
    modalView();
    addHeaderFunction();
    fontFunction();
};

function addContentEvt(){
    backspacePrevent();
    btnCheck();
    resizeEvt(); 
};

function addFooterEvt(){
    footerEvt();   
};

function addAPIEvt(){
    getValue();
    setValue();
    getBodyValue();
    setBodyValue();
};

function startEditor(){
    
    settingTag();

    renderHeader();
    renderContent();
    renderFooter();
    
    setWidth();
    setHeight();

    addHeaderEvt();
    addContentEvt();
    addFooterEvt();
    
    addAPIEvt();
    
}

     return { //사용자 영역
        startEditor : function(){
            return startEditor();
        },
        getValue: function(){
             return getValue();
         },
        setValue : function(data){
            return setValue(data);
        },
        getBodyValue : function(){
            return getBodyValue();
        },
        setBodyValue : function(data){
            return setBodyValue(data);
        }

        
    }
};
