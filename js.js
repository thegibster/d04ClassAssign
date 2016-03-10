//1

function fibonacci(num){
  var x,y,z;
  var count=3;
  for (var thing=1;thing<num;thing++){
        if(thing===1){
          console.log("1");
        }
        else if(thing===2){
          console.log("2");
        }
        else{
          x=1;y=2;
          while(count< num){

          z= x+y;
          console.log(z);

        x=y;
        y=z;
        count++;
}}

}}




//done

function triangle(){
  var num = 1;
  var range = 11;
  for (num; num<range;num++){
    console.log(multiplylist(num));
  }




  //console.log(multiplylist(num));
}


function multiplylist(x){
  var arr =[];
  for(var i=0; i<x;i++){
    arr.push("1");
  }
  return arr;
}





function sumList(arr1,arr2){
  mainarr =[];
  for(x in arr1){
    for(y in arr2){
      if((parseInt(arr1[x])+parseInt(arr2[y])).toString() in mainarr){
        console.log("in");

        }
      else {
      mainarr.push(parseInt(arr1[x])+parseInt(arr2[y]));
            }
    }
  } console.log(mainarr);

  }

//afternoon

var bicycle = {
  numGears: 4,
  getGears: function(){
    return this.numGears;
  }};

var person ={name:"Sam",getname:function(){return this.name}};
//console.log(person.name);
//console.log(person.getname());
var coolArray={

    array:[person]

};
//console.log(coolArray.array[0].getname());
for(var i=0; i< coolArray.array.length; i++){
  console.log(coolArray.array[i].getname());
  console.log("hi");
}



























