
var a =[2,4,8,18,20,30]



var newarr =[];
Array.prototype.myEvery = function (callback){
    for (let index = 0; index < this.length; index++) {
        if(!callback(this[index]))
            return false;
        
       
        
    }
    return true;
}
const test =a.myEvery(function(num){
    return num % 2 ===0;
})
console.log(test);
