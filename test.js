editorStart : function(replaceid, p) {
    var bRet = false;
    var _me = this;
    this._replaceNode = document.getElementById(replaceid);
    if (this._replaceNode) {
        this._id = replaceid;
        _$(this._replaceNode).hide();
        if (p) {
            this._params = this._params || {};
            $.extend(this._params, p);
            if (this._params.width !== "undefined") {
                this._size.width = this._params.width;
            }
            if (this._params.height !== "undefined") {
                this._size.height = this._params.height;
            }
        }
        // 변수 정의
        this._events = this.EVENTS(this._params.events);
        this._api = this.API();
        this._command = this.COMMAND();

        this.createUI();
        this.eventBind();
        this._events.OnInitCompleted.call(this);
        bRet = true;
    },
createUI : function () {
        this.createLayout();
        this._events.OnLayoutCompleted.call(this);
        this._events.OnBeforePlugins.call(this);
        this.createToolbar();
        this._events.OnToolbarCompleted.call(this);
        this.createStatusbar();
        this._events.OnStatusbarCompleted.call(this);
        this._api.SetBodyValue();
        this.createEditor();
        this._events.OnEditorCompleted.call(this);
    },


jiranEditor.prototype.EVENTS = function (events) {
    var _self = this;
    OnBeforePlugins : function () {
        console.warn("OnBeforePlugins");
        if (events.BeforePlugins) {
            events.BeforePlugins.call(this, _me);
        }
    },
        OnUICompleted : function() {
            console.warn("OnUICompleted");
            if (events.OnUICompleted) {
                events.OnUICompleted.call(this);
            }
        },
        OnLayoutCompleted: function() {
            console.warn("OnLayoutCompleted");
            if (events.OnLayoutCompleted) {
                events.OnLayoutCompleted.call(this);
            }
        },
        OnToolbarCompleted: function() {
            console.warn("OnToolbarCompleted");
            if (events.OnToolbarCompleted) {
                events.OnToolbarCompleted.call(this);
            }
        },
        OnStatusbarCompleted: function() {
            console.warn("OnStatusbarCompleted");
            if (events.OnStatusbarCompleted) {
                events.OnStatusbarCompleted.call(this);
            }
        },
        OnEditorCompleted : function () {
            console.warn("OnEditorCompleted");
        },
        OnInitCompleted : function () {
            console.warn("OnInitCompleted");
            if (events.OnInitCompleted) {
                events.OnInitCompleted.call(this, _self);
            }
        },
        OnSized : function() {
            console.warn("OnSized");
            if (events.OnSized) {
                events.OnSized.call(this);
            }
        }
    }
}