function makeFunctionArray(){
  const arr = []

  for (var i = 0; i < 11; i+= 2){
    i
    arr.push(function () { console.log(i) })    
  }
  return arr
};


const functionArr = makeFunctionArray()

functionArr

// a = functionArr[0]
// a

// b = functionArr[0]();
functionArr[2]()


kkuu = (function (){
  let count = 0
count
  return {
    inc: function(){ count += 1},
    get: function(){ console.log(count)},
  }
})()

kkuu.get()
kkuu.inc()
kkuu.inc()
kkuu.get()
kkuu.inc()
kkuu.get()
kkuu.inc()
kkuu.inc()

kkuu.get()
