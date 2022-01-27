var axios = require("axios").default;
const fs = require('fs')   
const json =require('json') 

var res;
const word=window.location.href.valueOf();
const search=word.substr(32).substring(0,word.indexOf('&'));
var options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {q: `${search}`, lang: 'en', sort_by: 'relevancy', page: '1'},
  headers: {
    'x-api-key': 'wyV3Jl10eKmitLuOSnrhcqXWUdqQj7IMHC8_7tMfqxs'
  }
};

axios.request(options).then(function (response) {
     res=response.data;
      
}).catch(function (error) {
	console.error(error);
});






//console.log(search);



module.exports=res;