var test = editor({
    root:"root",
    // createBtn : {
    //     ui: 'fab fa-instagram',
    //     url: "./test.png",
    //     id : 'instagram',
    //     function :function(){alert("hi")},
    // },
    createToolbar : 
        [
            {key:"bold", value:"강조", ui : "fas fa-bold", cmd :"bold", id : "bold", width:"10%",height:"20px"},
            {key:"italic", value:"기울기", ui : "fas fa-italic", cmd :"italic", id : "italic"},
            {key:"newWirte", value:"새글", ui : "far fa-newspaper" ,id : "newWrite", cmd : "none"},
            {key:"emoji", value:"이모티콘", ui :"far fa-smile" , cmd:"none", id :"emoji"},

        ],
});
test.startEditor();


// var test2 = editor({
//     root:"wrap",
//     width:"800px",
//     height:"1000px",
//     createBtn : {
//         url : "./test.png",
//         id : "test2",
//         function : function(){alert("hi2")}
//     },
//     createToolbar: {
//         id: "test3"
//     }
// })
// test2.startEditor();


// console.log(test.startEditor() === test2.startEditor());