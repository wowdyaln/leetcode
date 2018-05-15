// https://pjchender.blogspot.tw/2016/05/javascriptclosure-part-3.html


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