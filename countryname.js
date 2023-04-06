var request =  new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

request.onload = function(){
   var response = JSON.parse(request.responseText);

   response.forEach(({ region, subregion,population,name: {common:countryName } }) => {
      console.log( countryName, region, subregion,population);

      //Country name
        var countryname = document.getElementById('countries');
        const nameElement = document.createElement('li');  
        nameElement.classList.add('list-group-item');
        var t = document.createTextNode(countryName);
        countryname.appendChild(nameElement);
        countryname.appendChild(t);

        // Region
        var countryregion = document.getElementById('regions');

        const regionElement = document.createElement('li');
        regionElement.classList.add('list-group-item');
        var a = document.createTextNode(region);
        countryregion.appendChild(regionElement);
        countryregion.appendChild(a);

        //Sub Region

        var subreion = document.getElementById('subregion');
        const subregionElement = document.createElement('li');
        subregionElement.classList.add('list-group-item');
        var s = document.createTextNode(subregion);
        subreion.appendChild(subregionElement);
        subreion.appendChild(s);

        // Population

        var countrypopulation = document.getElementById('population');

        const populationElement = document.createElement('li');
        populationElement.classList.add('list-group-item');
        var pop = document.createTextNode(population);
        countrypopulation.appendChild(populationElement);
        countrypopulation.appendChild(pop);


   });
   console.log(response);
}