// https://pjchender.blogspot.tw/2016/05/javascriptclosure.html

function buildF(){
  i = 3

  return function(){
    console.log(i)
  }
}

output = buildF()

console.log(output)

output()
output()
output()