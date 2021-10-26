// // const key =  'lVuQh5GiGGCZEgFMQrjO6GAAZW1TkmZt'

// // //get weather information
// // const getWeather = async(id) => {
// //     const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
// //     const query = `${id}?apikey=${key}`

// //     const response = await fetch(base+query)
// //     const data = await response.json()

// //     return data
// // }   
// // //get city information
// // const getCity = async (city) => {

// //     const base = `http://dataservice.accuweather.com/locations/v1/cities/search`;
// //     const query = `?apikey=${key}&q=${city}`;

// //     const response = await fetch(base+query)
// //     const data = await response.json()
// //     return data[0]
// // }

// // getCity('Miami')
// // .then(data => {
// // return getWeather(data.Key)
// // })
// // .then(data => console.log(data))
// // .catch(data => console.log(err))

// const key = 'lVuQh5GiGGCZEgFMQrjO6GAAZW1TkmZt'

// //get weather information

// const getWeather = async (id) => {

//    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//    const query = `${id}?apikey=${key}` ;

//    const response = await fetch(base+query)
//    const data = await response.json()
//       return data

// }



// //get city information

// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`

//   const response = await fetch(base + query)
//   const data = await response.json()
//   return data[0]


// }

// console.log('before')

// (async () => {
//   try{
//     console.log('before');
//     const city = await getCity('Maimi');
//     console.log(city.Key)
//     const weather = await getWeather(city.Key);
//     console.log(weather)
//     console.log('after');
//   } catch(error){
//     console.log(error)
//   }
// })();
// // getCity('Miami')
// // .then(data => {
// //     return getWeather(data.Key)
// // })
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// console.log('after')




// getWeather("347936")
// .then(data => console.log(data))
// .catch(err => console.log(err))

const key = 'lVuQh5GiGGCZEgFMQrjO6GAAZW1TkmZt'

//get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base+query)
    const data = await response.json()
    return data
}



// get city information
const getCity = async(city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()
    return data[0];
}

