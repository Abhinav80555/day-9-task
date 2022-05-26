// step 01 : create an XHR object
var request = new XMLHttpRequest();
// step 02:request a connection(which data you need to recieve)
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.open("GET","https://www.anapioficeandfire.com/api/books/1");

// step 03: sending a connection request
request.send();
// sttep 04: once the data sucessfully received
// from the server(200)
request.onload=function(){
    var data=JSON.parse(request.response);


    // 1) Get all the countries from Asia continent /region using Filter function

        var countries= data.filter((element)=>element.region=== "Asia"); 
        console.log(countries);

    // 2) Get all the countries with a population of less than 2 lakhs using Filter function
    
        var population= data.filter((element)=>element.population > 200000);
        console.log(population)

     // 3) Print the following details name, capital, flag using forEach function   
        
         data.forEach((element)=>
         console.log(`Name : ${element.name}, Capital : ${element.capital}, Flag : ${element.flag}`)
         );

     // 4) Print the total population of countries using reduce function
         
          var totalpopulation = data.filter((ele)=>ele.region ==="Asia")
          .reduce((sum,cv)=>sum+cv.population,0);
          console.log(totalpopulation);

     // 5) Print the country which uses US Dollars as currency.
     
          var dollar = data.filter((ele)=>ele.currencies[0].code==="USD")
          .map((ele)=>ele.name);
          console.log(dollar);


}
