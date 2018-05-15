// https://pjchender.blogspot.tw/2017/05/javascript-closure.html
function dogHouse() {
  var count = 0
  function countDogs() {
    count += 1
    console.log(count + ' dogs')
  }
  return countDogs
}


doit = dogHouse()

doit()
doit()
doit()
doit()
doit()

// 內層的 function 可以簡化成爲匿名函式，直接 return

function cute_closure(){
  var count = 0
  return function(){
    count += 1
    console.log(`cute ${count} times !`)
  }
}

cuteIt = cute_closure()
cuteIt()
cuteIt()
cuteIt()
cuteIt()
cuteIt()

// 可以再分派給其他變數！ 每個變數執行的環境是獨立的

cuteItAgain = cute_closure()
cuteItAgain()
cuteItAgain()

cuteItAgain_2 = cute_closure()
cuteItAgain_2()
cuteItAgain_2()
cuteItAgain_2()


////// 將參數代入閉包中
function argToClosure( arg ){
  var count = 0
  return function(){
    count += 1
    console.log(`this is ${arg}, ${count} times !`)
  }
}


apple = argToClosure("Apple")
monkey = argToClosure("Monkey")
banana = argToClosure("Banana")
cramp = argToClosure("monkey never cramps !")

banana()
apple()
banana()
cramp()
cramp()
cramp()
monkey()