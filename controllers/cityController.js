const cities = require('../data/cities.json');

/**
 * Retrieve all cities
 * @param req
 * @param res
 */
exports.listOfCities = (req, res) => {
    res.json(cities);
};

/**
 * Retrieve the cities by name
 * @param req
 * @param res
 */
exports.getCityByName = (req, res) => {
    const name = req.params.name.toLowerCase();
    const citiesMatched = cities
        .filter(city => city.name.toLowerCase().includes(name));

    if (citiesMatched.length > 0) {
        return res.json(citiesMatched);
    }

    res.status(404);
    return res.json({
        status: 404,
        error: `There is not matched cities by ${name}`
    })
};

/**
 * Add a new city to the Database
 * @param req
 * @param res
 */
exports.addNewCity = (req, res) => {
    console.log('TODO: Adding new city...');
    res.send('this method needs to be implemented...');
};