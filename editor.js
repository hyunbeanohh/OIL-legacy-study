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


;(function(global){ // IIFE , 즉시 호출 함수 선언 
         /**
         * SimpleEditor(node:string||Element,options:string,left:string,right:string)
         * @typedef {object} SimpleEditor - editor Object
         * @property {string | Element} node - node type 
         * @property {string | undefined} options - options type
         * @property {string} width - editor widht type
         * @property {string} height - editor height type
         */

    function SimpleEditor(node,options,left,top){
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

        // this.left = this.setLeft(node,"",left,"");
        // this.right = this.setTop(node,top);
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
    
    SimpleEditor.prototype.settingTag = function(){
        var tempDiv = document.createElement("div");
        tempDiv.id = "Editor"
        this.element.root.append(tempDiv);

        var tagAttribute = ["header_section","edit_section","footer","getsetArea"];
        
        for(var i = 0 ; i<tagAttribute.length; i++){
            var creDiv = document.createElement("div");
            creDiv.id = tagAttribute[i];
            tempDiv.appendChild(creDiv);
        }
    };SimpleEditor.prototype.addSelect = function(id,name,options){
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
    
    SimpleEditor.prototype.addSelectBtn = function(){
        var getHeaderSection = this.element.root.querySelector("#header_section");
        var select = this.addSelect('boxId','boxName',options);
        getHeaderSection.appendChild(select);
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
    };

    SimpleEditor.prototype.titleText = function(){
        var getHeaderSection =this.element.root.querySelector("#header_section");
        var creSpan = document.createElement("span");
        var txt = document.createTextNode("💻");
        creSpan.id = "editorTextId";
        creSpan.appendChild(txt);
        getHeaderSection.appendChild(creSpan);
    };


    SimpleEditor.prototype.getEditDocument= function(){
        return this.editIframe.contentWindow.document;
    };


    SimpleEditor.prototype.addEditView = function(){
        var createIframeTag = document.createElement("iframe");
        createIframeTag.style.height = "350px";
        createIframeTag.id = "output";
        createIframeTag.name = "textFiled";
        this.editIframe = createIframeTag;
        var getSection = this.element.root.querySelector("#edit_section");
        getSection.appendChild(createIframeTag);
        var edit = this.element.root.querySelector("#output").contentWindow.document;
        edit.body.style = "word-break: break-all;"
        edit.body.innerHTML = "<p></br></P>";
        edit.designMode = "On";
        
    };

    SimpleEditor.prototype.footerView = function(){
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
   
    SimpleEditor.prototype.toolbarEvt = function(){
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
        
    
    SimpleEditor.prototype.newWriteFunction = function(){
       var getnewWriteId = this.element.root.querySelector("#newWrite");
       var doc = this.getEditDocument();
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

    SimpleEditor.prototype.resizeEvt = function(){
        var getEditSection = this.element.root.querySelector("#edit_section");
        var getIframe = getEditSection.childNodes[0];
        var getResizeBtn = document.getElementById("resizeBtn");

        getResizeBtn.addEventListener("mousedown",initDrag,false);
        
        var startX, startY, startWidth, startHeight;
        
        
        function initDrag(e){
            
            startX = e.clientX;
            startY = e.clientY;

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
                
            }
            
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
        }
        
    
        function stopDrag(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
    }

    SimpleEditor.prototype.footerEvt = function(){
        var getToEdit = this.element.root.querySelector("#toEdit");
        var getToHtml = this.element.root.querySelector("#toHtml");
        var getToPreView = this.element.root.querySelector("#toPreView");
        getToEdit.style.backgroundColor="#f1f2f6"; 

        var edit = this.getEditDocument();
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

    SimpleEditor.prototype.getValue = function(){
        var getEditSection = this.element.root.querySelector("#edit_section");
        var doc = this.getEditDocument();
        var getIframe = this.element.root.querySelector("Iframe");
        var edit = doc;
        var fullHtml = edit.body.parentNode.outerHTML;
        if(t.currentState === "Edit"){
            return fullHtml
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
    }
           
SimpleEditor.prototype.setValue = function(data = "<p></br></p>"){
    var getCreText = document.querySelector("#creText");
    var edit = this.getEditDocument();
    var getEditSection = this.element.root.querySelector("#edit_section");
    if(t.currentState === "Edit"){
        edit.body.innerHTML = data;
    }
    else if(t.currentState === "HTML"){
        getEditSection.childNodes[1].value = setValueParser(data);
    }else if(t.currentState === "PreView"){
         return ;
    }
};
   

SimpleEditor.prototype.getBodyValue =  function(){
    var getEditSection = this.element.root.querySelector("#edit_section");
    var doc = this.getEditDocument();
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

SimpleEditor.prototype.setBodyValue=  function(data = "<p></br></p>"){
    var getCreTa = document.querySelector("#creText");
    var getEditSection = this.element.root.querySelector("#edit_section");
    var doc = this.getEditDocument();
    var edit = doc;
    if(t.currentState === "Edit"){
        edit.body.innerHTML = data;
    }
    else if(t.currentState === "HTML"){
        getEditSection.childNodes[1].value =  setValueParser(data);
    }else if(t.currentState === "PreView"){
        return false;
    }
};

    SimpleEditor.prototype.renderHeader = function(){
        this.addSelect();
        this.addSelectBtn();
        this.addBtn();
        this.titleText();
    }
    
    SimpleEditor.prototype.renderContent = function(){
        this.addEditView();
    }

    SimpleEditor.prototype.renderFooter = function(){
        this.footerView();
    }
    
    SimpleEditor.prototype.renderAPI = function(){
        this.addGetSetBtn();
    }

    SimpleEditor.prototype.addHeaderEvt = function(){
        this.toolbarEvt();
        this.newWriteFunction();
        this.fontFunction();
      }
      
    SimpleEditor.prototype.addContentEvt = function(){
        this.backspacePrevent();
        this.btnCheck();
        
    }  
    
    SimpleEditor.prototype.addFooterEvt = function(){
        this.footerEvt();   
        this.resizeEvt(); 
    };

    SimpleEditor.prototype.addAPIEvt = function(){
        this.getValue();
        this.setValue();
        this.getBodyValue();
        this.setBodyValue();
    }


    // 에디터 시작 함수
    SimpleEditor.prototype.startEditor = function(){
        this.settingTag();
    
        this.renderHeader();
        this.renderContent();
        this.renderFooter();

        this.addHeaderEvt();
        this.addContentEvt();
        this.addFooterEvt();
        this.addAPIEvt();
        
    };
    
    global.SimpleEditor = SimpleEditor;
    
})(window);
