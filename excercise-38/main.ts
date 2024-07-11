// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value.
//  Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city_name:string,country_name="pakistan"){
    console.log(`${city_name} is in ${country_name}`)

}
describe_city("karachi")
describe_city("paris","france")
describe_city("dubai","UAE")
describe_city("seoul","korea")