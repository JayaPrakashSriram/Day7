// Day 07:ARRAY METHODS
// a. Get all the countries from the Asia continent /region using the Filter function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}
// Ans: List of 50 countries localted in asia continent


// b. Get all the countries with a population of less than 2 lakhs using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}
// Ans: List of 62 countries localted in asia continent

// c. Print the following details name, capital, flag using forEach function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}
// Ans: List of 150 countries name, capital, 'flag url' as been displayed

// d. Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}
// Ans: 7759438109

// e. Print the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all");
  request.send();
  request.onload=function(){
    var res = JSON.parse(this.response);
    var answer = res.filter((ele) => (ele.currencies!=undefined));  
    var res = answer.filter((ele)=>(ele.currencies[0].code=="USD")).map((country)=>country.name);    
    console.log(res);
  }
// Ans: List of 16 countries name which uses US Dollars as currency