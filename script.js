class Apple{
constructor(weightInit=10){
this.weight=weightInit
}
decrease(){
if(!this.isEmpty()){
  this.weight--
}

}
isEmpty(){
return this.getWeight()==0

}
getWeight(){
return this.weight
}

}
class Human{
constructor(name,gender,weight){
this.name=name;
this.gender=gender;
this.weight=weight;

}
isMale(){
return this.gender=='Male'

}
setGender(gender){
this.gender=gender

}
checkApple(AppleObj){
return !AppleObj.isEmpty()

}
eat(AppleObj){
  if (this.checkApple(AppleObj));
  this.weight++
  AppleObj.decrease()

}


}
let result=new Apple(1)
console.log(result);
let Adam=new Human('Adam','Male',70)
let Eva=new Human('Eva','FeMale',80)
console.log(Eva,Adam)
Adam.eat(result)
Eva.eat(result)
console.log(result)
