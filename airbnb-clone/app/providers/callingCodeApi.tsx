const axios = require('axios');

export const options = {
  method: 'GET',
  url: 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
  }
};

const CallingCodeAll = async () => {
    const CallingCode = await axios.request(options)


    return(
        console.log(CallingCode)
    )
}
/* 
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
} */