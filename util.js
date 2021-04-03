export const rando = (min, max) =>
{
    //returns a number between min and max
    return Math.floor(Math.random() * max) + min;
};

export const pokeFetch = (resource, options) => 
{
    const baseRoute = 'https://pokeapi.co/api/v2/';


    return fetch(`${baseRoute}/${resource}/${options}`)
    .then(function(response)
    {
        // if i were smart
        // i would put some error handling here
        // just in case there is no json response

        return response.json();
    })
    .then((data) =>
    {
        return data;
    })
    .catch((err) =>
    {
        // should do something
        console.log(`Error fetching: ${err}`);
    })
}