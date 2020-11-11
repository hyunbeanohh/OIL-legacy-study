var List = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var  i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i =i+1;
    }
}
}

var Body = {
  setColor :  function(color){
      document.querySelector('body').style.color = color;
  },
  setbackgroundColor  : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function NightDayhandler(self){
  var target = document.querySelector('body');
  if(self.value === 'Night'){
  Body.setbackgroundColor('black');
  Body.setColor('white');
  self.value  = 'Day';

  List.setColor('white')

} else{
    Body.setbackgroundColor('white');
    Body.setColor('black');
    self.value  = 'Night';

    List.setColor('blue')

  }
}
