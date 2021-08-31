var test = editor({
    root:"root",
    // width: "1200px",
    // height:"700px"
});
test.startEditor();

var test2 = editor({
    root:"wrap",
})
test2.startEditor();


// console.log(test.startEditor() === test2.startEditor());