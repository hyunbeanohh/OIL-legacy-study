var editor = new SimpleEditor("root");
editor.startEditor()

var editor2 = new SimpleEditor("wrap2","","1340px","1000px");
editor2.startEditor();

var editor3 = new SimpleEditor({
    root: "wrap",
    options:"",
    width: "1000px",
    height: "1000px"
});

editor3.startDevEditor();