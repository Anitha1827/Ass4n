var request =  new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

request.onload = function(){
   var response = JSON.parse(request.responseText);

   response.forEach(({flags, name: {common:countryName }}) => {
      console.log(flags, countryName);


      const imgElement = document.createElement('img');
      imgElement.style.height = '100px';
      imgElement.style.widows= '150px';
      imgElement.style.borderRadius = '10px';
      imgElement.style.marginLeft = '2px';
      imgElement.style.marginRight = '2px';
      imgElement.setAttribute('src', flags.svg);
      imgElement.setAttribute('alt',flags.alt || countryName);
      document.body.appendChild(imgElement);
   });
   console.log(response);
}