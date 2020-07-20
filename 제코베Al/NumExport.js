const num = "23421";
const len = 3;

function sol(chars, len) {
  let result = [];

  const f = (pre, chars) => {
    for (let i = 0; i < chars.length; i++) {
      result.push(pre + chars[i]);

      f(pre + chars[i], chars.slice(i + 1));
    }
  };
  f("", chars);
  console.log(result);

  result = result.filter(x => x.length === len);
  console.log(result);
  result.sort((a, b) => b - a);
  return result[0];
}

console.log(sol(num, len));
