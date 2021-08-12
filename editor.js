var toolbtn = [
    {key:"newWirte", value:"새글", ui : "far fa-newspaper" ,id : "newWrite", cmd : "none"},
    {key:"bold", value:"강조", ui : "fas fa-bold", cmd :"bold", id : "bold"},
    {key:"italic", value:"기울기", ui : "fas fa-italic", cmd :"italic", id : "italic"},
    {key:"underline", value:"밑줄", ui : "fas fa-underline" , cmd :"underline", id :"underline"},
    {key:"strike", value:"취소선", ui : "fas fa-strikethrough" , cmd :"strikethrough" , id :"strike"},
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
    {key:"fixView", value:"편집"},
    {key:"sourceView", value:"HTML"},
    {key:"afterView", value:"미리 보기"},
    // {key:"setBodyValue", value:"setBodyValue"},
    // {key:"getBodyValue", value:"getBodyValue"},
];
var getsetbtn = [
    {id : "getValue", value : "getValue()"},
    {id : "setValue", value : "setValue()"},
    {id : "getBodyValue", value : "getBodyValue()"},
    {id : "setBodyValue", value : "setBodyValue()"}
]


;(function(global){ // IIFE , 즉시 호출 함수 선언 
         /**
         * SimpleEditor(node:string||Element,options:string,left:string,right:string)
         * @typedef {object} SimpleEditor - editor Object
         * @property {string | Element} node - node type 
         * @property {string| undefined} options - options type
         * @property {string} left - left type
         * @property {string} right - left value
         */

    function SimpleEditor(node,options,width,height){
        this.element = {
            root: document.getElementById(node),
            // Class , 여러가지 사항을 고려해야 함.
            // Json 객체로 받아서 .. target: ~~
            // 이 로직도 옵션 처리해서 부여..
        };
        this.options = options || {
            initValue: ''
        };

        if (!!this.options.initValue) {
            this.getValue(this.options.initValue)
        }
        if (!!this.options.initValue) {
            this.setValue(this.options.initValue)
        }
        if (!!this.options.initValue) {
            this.getBodyValue(this.options.initValue)
        }
        if (!!this.options.initValue) {
            this.setBodyValue(this.options.initValue)
        }

        this.width = this.setWidth(node,"",width,"");
        this.height = this.setHeight(node,"","",height);

        console.log(this.element.root);
    };

    function escapeParser(a){
        var b = '';
    
        b = a.replace(/&lt;/g, '<');
        b = b.replace(/&gt;/g,'>'); 
        b = b.replace(/&nbsp;/g,' ');
        b = b.replace(/&amp;/g, '&');
        b = b.replace(/&quot;/g, '"');
    
        return b;
    };

    SimpleEditor.prototype.setWidth = function(node,options,width,height){
        var getNode = document.getElementById(node);
        
        getNode.style.width = width;
        console.log( getNode.style.width )
    };

    SimpleEditor.prototype.setHeight = function(node,options,width,height){
        var getNode = document.getElementById(node);
        getNode.style.height = height;
        console.log( getNode.style.height )
    };

    SimpleEditor.prototype.getValue = function (){
        var getValueBtn = this.element.root.querySelector("#getValue");
        var doc = this.getEditDocument();
        getValueBtn.addEventListener("click",function(e){

                var getOut = doc;
                var fullHtml = getOut.body.parentNode.outerHTML;
                var getTextArea = document.getElementById("creText");
                
                
                getTextArea.value = fullHtml;
                // for(var i = 0; i< getTextArea.value.length; i++){
                //     if(getTextArea.value[i] === ">"){
                //         getTextArea.value[i+1].push("</br>");
                //     }
                // }
            
        })
    };
            
    SimpleEditor.prototype.setValue = function(){
        var setValueBtn = this.element.root.querySelector("#setValue");
        var doc = this.getEditDocument();

        setValueBtn.addEventListener("click",function(){
            var edit = doc;
            var  getTextArea= document.getElementById("creText");
            edit.body.innerHTML = escapeParser(getTextArea.value);
            edit.body.focus();
        }); 
        
    };
    
    SimpleEditor.prototype.getBodyValue=  function(){
        var getBodyValueId = this.element.root.querySelector("#getBodyValue");
        var getTextArea = this.element.root.querySelector("#creText");
        var doc = this.getEditDocument();

        getBodyValueId.addEventListener("click",function(){
            var edit = doc;
            getTextArea.value = escapeParser(edit.body.innerHTML);

        })
    };

    SimpleEditor.prototype.setBodyValue=  function(){
        var setBodyValueId = this.element.root.querySelector("#setBodyValue");
        var getTextArea = this.element.root.querySelector("#creText");
        var doc = this.getEditDocument();

        setBodyValueId.addEventListener("click",function(){
            var edit = doc;

            edit.body.innerHTML = getTextArea.value;
            edit.body.focus();
        })
    };
    
    SimpleEditor.prototype.settingTag = function(){
        var tagAttribute = ["header_section","edit_section","footer","getsetArea"];
        //var getRoot = document.getElementById("root");
        
        for(var i = 0 ; i<tagAttribute.length; i++){
            var creDiv = document.createElement("div");
            creDiv.id = tagAttribute[i];
            this.element.root.appendChild(creDiv);
        }
    };

    
    SimpleEditor.prototype.addSelect = function(id,name,options){
        var createSpan = document.createElement("span")
        var getHeaderSection = this.element.root.querySelector("#header_section");
    
        createSpan.classList.add("select_box")
        getHeaderSection.appendChild(createSpan);
            
            
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
            option.setAttribute("data-cmd",`${options[i].cmd}`);
            select.appendChild(option)
        }
    
        return select;
    };
    
    SimpleEditor.prototype.addBtn = function(){
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
    
    SimpleEditor.prototype.addEditView = function(){
        var createIframeTag = document.createElement("iframe");
        createIframeTag.id = "output";
        createIframeTag.name = "textFiled";
        this.editIframe = createIframeTag;
        
        var getSection = this.element.root.querySelector("#edit_section");
        getSection.appendChild(createIframeTag);
    
        var edit = this.element.root.querySelector("#output").contentWindow.document;
        edit.body.className = "content";
        edit.body.style ="word-break:break-all";
        edit.body.innerHTML = "<p></br></P>";
        edit.designMode = "On";
        
    };
    SimpleEditor.prototype.addSelectBtn = function(){
        var getHeaderSection = this.element.root.querySelector("#header_section");
        var select = this.addSelect('boxId','boxName',options);
        getHeaderSection.appendChild(select);
    };

    SimpleEditor.prototype.addGetSetBtn = function(){
        var getArea = this.element.root.querySelector("#getsetArea");
        var creDiv = document.createElement("div");
        var creTextArea = document.createElement("textarea");
        getArea.appendChild(creDiv);
        creDiv.id = "creDivId";
        creTextArea.id = "creText";

        for(var i = 0 ; i<getsetbtn.length; i++){
            var creBtn = document.createElement("Input");
            var getCreDivId = this.element.root.querySelector("#creDivId");
            creBtn.id = getsetbtn[i].id;
            creBtn.value = getsetbtn[i].value;
            creBtn.type = "button";

            getCreDivId.appendChild(creBtn);
        }
        getArea.appendChild(creTextArea);
    }

    SimpleEditor.prototype.footerView = function(){
        var getFooter = this.element.root.querySelector("#footer");
    
        for(var i = 0; i<footerbtn.length; i++){
            var creDiv = document.createElement("div");
            creDiv.innerHTML = footerbtn[i].value;
            creDiv.id = footerbtn[i].key;
            getFooter.appendChild(creDiv);
        }
    };

    SimpleEditor.prototype.getEditDocument= function(){
        return this.editIframe.contentWindow.document;
    };

    SimpleEditor.prototype.fontFunction = function(){
        var buttons = this.element.root.querySelectorAll("button");
        var doc = this.getEditDocument();

        for(var i = 0; i<buttons.length; i++){
        
            buttons[i].addEventListener('click',function(){
            var cmd = this.getAttribute('data-cmd');
            doc.execCommand(cmd,false,null);
            })
        }
    };
  

    SimpleEditor.prototype.footerFunction = function(){
        var getfixView = this.element.root.querySelector("#fixView");
        var getSource = this.element.root.querySelector("#sourceView");
        var getAfterView = this.element.root.querySelector("#afterView");
        var edit = this.getEditDocument();
        var getEdit = edit.getElementsByClassName("content")[0];
        var creTa = document.createElement("textarea");
        var getBtn = this.element.root.querySelectorAll("button");
        var getSelect = this.element.root.querySelector("#boxId");

        creTa.id = "textAreaId";
        creTa.style ="width:100%; height:100%; margin :0; padding:0; font-size:16px; font-family:Apple SD Gothic Neo; border:1px solid white; outline:none; resize:none;";
         
        var currentState = "Edit";
       
    
        getfixView.addEventListener("click",function(){
            //currentState = "Edit";
            var getTextAreaId = edit.getElementById("textAreaId");

            if(currentState === "HTML"){
                edit.body.designMode = "On";
                edit.body.innerHTML = getTextAreaId.value;


                currentState = "Edit";
                console.log(currentState);
            }else if(currentState === "PreView"){
                edit.designMode = "On";
                for(var i = 0; i<getBtn.length;i++){
                    getBtn[i].removeAttribute("disabled","");
                }
                getSelect.removeAttribute("disabled","")
                currentState = "Edit";
            }
        });

        getSource.addEventListener("click",function(e){ // 소스 보기
            
            if(currentState === "Edit"){
                edit.designMode = "On";
                
                creTa.textContent = edit.body.innerHTML;
                
                edit.body.innerText= "";
                getEdit.prepend(creTa);
                currentState = "HTML";
                console.log(currentState);
                
            }else if(currentState === "PreView"){
                edit.designMode = "On";
                for(var i = 0; i<getBtn.length;i++){
                    getBtn[i].removeAttribute("disabled","");
                }
                getSelect.removeAttribute("disabled","")
                creTa.textContent = escapeParser(edit.body.innerHTML);
                
                edit.body.innerText= "";
                getEdit.prepend(creTa);
                currentState = "HTML";
                console.log(currentState);
            }
           
        });
    
        getAfterView.addEventListener("click",function(){ // 미리 보기 
            for(var i = 0; i<getBtn.length; i++){
                getBtn[i].setAttribute("disabled",true);
            }
            getSelect.setAttribute("disabled",true);
            if(currentState === "HTML"){
                edit.designMode= "Off";
                edit.body.innerHTML = creTa.value;
                currentState="PreView";
                console.log(currentState)
            }else if(currentState === "Edit"){
                edit.designMode= "Off";
                currentState="PreView";
                console.log(currentState);
            }
            
        });
    };

    SimpleEditor.prototype.titleText = function(){
        var getHeaderSection =this.element.root.querySelector("#header_section");
        var creSpan = document.createElement("span");
        var txt = document.createTextNode("💻");
        creSpan.id = "editorTextId";
        creSpan.appendChild(txt);
        getHeaderSection.appendChild(creSpan);
    };
    
    SimpleEditor.prototype.newWriteFunction = function(){
        var getnewWriteId = this.element.root.querySelector("#newWrite");
        var edit = this.getEditDocument();
        var boldId = this.element.root.querySelector("#bold");
        var italicId = this.element.root.querySelector("#italic");
        var underlineId = this.element.root.querySelector("#underline");
        var strikeId = this.element.root.querySelector("#strike");

        getnewWriteId.addEventListener("click",function(){
            var confirmVal = window.confirm('저장되어 있던 글이 모두 삭제됩니다.');
            
            
            if(confirmVal === true){
                edit.body.innerHTML = "<p></br></p>";
                
                boldId.className = "bold";
                italicId.className = "italic";
                underlineId.className = "underline";
                strikeId.className = "strike";
        
                edit.body.focus();
        
            }else{
                return
            }
        })
    };
    
    SimpleEditor.prototype.backspacePrevent = function(e){
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
    
    SimpleEditor.prototype.btnCheck = function(){
        var editChange = this.element.root.querySelector("#output").contentWindow.document;
        //var editSel = document.getElementById("output").contentWindow.document.getSelection();
        
        var boldId = this.element.root.querySelector("#bold");
        var italicId = this.element.root.querySelector("#italic");
        var underlineId =this.element.root.querySelector("#underline");
        var strikeId =this.element.root.querySelector("#strike");
    
        editChange.addEventListener("selectionchange",function(){
            //var getOut = this.element.root.querySelector("#output");
            var boldCheck = editChange.queryCommandState("bold");
            var italicCheck = editChange.queryCommandState("italic");
            var underlineCheck = editChange.queryCommandState("underline");
            var strikeCheck = editChange.queryCommandState("strikethrough");
    
            if(boldCheck === true){
                boldId.className = "changeBold";
            }else{
                boldId.classList.remove("changeBold");
            }
            
            if(italicCheck === true){
                italicId.className = "changeItalic";
            }else{
                italicId.classList.remove("changeItalic")
            }
    
            if(underlineCheck === true){
                underlineId.className = "changeUnderline";
            }else{
                underlineId.classList.remove("changeUnderline")
            }
    
            if(strikeCheck === true){ 
                strikeId.className = "changeStrike";
            }else{
                strikeId.classList.remove("changeStrike")
            }
        })
    };
    
    SimpleEditor.prototype.startEditor = function(){
        this.settingTag();
    
        this.addEditView();
        this.addBtn();
        this.addSelectBtn();
        this.titleText();
        this.footerView();
        this.fontFunction();
        this.backspacePrevent();
        this.newWriteFunction();
        this.btnCheck();
        this.footerFunction();
    };

    SimpleEditor.prototype.startDevEditor = function(){
        // Editor View Part
        this.settingTag();
        this.addEditView();
        this.addBtn();
        this.addSelectBtn();
        this.addGetSetBtn();
        this.titleText();
        this.footerView();
        // Editor View Part


        // Editor Func Part
        this.fontFunction();
        this.backspacePrevent();
        this.newWriteFunction();
        this.btnCheck();
        this.footerFunction();
        this.getValue();
        this.setValue();
        this.getBodyValue();
        this.setBodyValue();
         // Editor Func Part
    };
    
    global.SimpleEditor = SimpleEditor;
    
})(window);
