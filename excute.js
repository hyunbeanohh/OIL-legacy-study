var test = editor({
    root:"root",
    createBtn : {
        url: "./test.png",
        id : 'instagram',
        function :function(){alert("hi")},
    },
    createToolbal : {
        
    }
});
test.startEditor();


// var test2 = editor({
//     root:"wrap",
// })
// test2.startEditor();


// console.log(test.startEditor() === test2.startEditor());