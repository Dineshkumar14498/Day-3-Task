
//83.Use XMLHTTPrequest in API print all the country name,Region,sub region,Population
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var a = JSON.parse(data);
  console.log(a);
  for (var i = 0; i < a.length; i++)
    console.log(
      "country name:" + " " + a[i].name.common,
      "Region: " + " " + a[i].region,
      "subregion:" + " " + a[i].subregion,
      "population: " + " " + a[i].population
    );
};

//*2.Use XMLHTTPrequest in API Print all the Country flags

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var b = JSON.parse(data);
  console.log(b);
  for (var i = 0; i < b.length; i++)
    console.log("contries Flag: " + " " + b[i].flags.svg);
};

//*1.Compare Two JSON have the same Properties Without order

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let str1 = JSON.stringify(obj1, Object.keys(obj1));
console.log(str1);
let str2 = JSON.stringify(obj2, Object.keys(obj2));
console.log(str2);

if(str1=str2){
  console.log("The JSON objects are equal");
}
else{
  console.log("The JSON objects are not equal");
}

