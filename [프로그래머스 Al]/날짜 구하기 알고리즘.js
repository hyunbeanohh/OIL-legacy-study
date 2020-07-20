function Day(a,b){
  let year = 2016;
  let week =['SUN','MON','TUE','WED','THU','FRI','SAT'];
  let month = a;
  let day =b;
  let dayOfweek = week[new Date(year+'-'+month+'-'+day).getDay()];
  return dayOfweek;
}

console.log(Day(5,24));
