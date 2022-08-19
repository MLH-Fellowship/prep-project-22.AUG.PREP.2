# Hack2gether Weather

Hack2gether Weather is an app built using React which displays the weather of any location in the world.

This was made possible by the efforts of everyone in Prep Fellowship pod of August 2022 batch, ["Hack2gether"](https://prep-22-aug-prep-2-portfolio.netlify.app)

## Folder Structure
    └───public
        ├───images
        ├───weather
        ├───index.html
    └───scripts
    └───src
        ├───assets
        ├───components
        ├───hooks

## Tech Used

- [React](https://reactjs.org)
- [OpenWeather API](https://openweathermap.org/current)
- [MapBox](https://docs.mapbox.com/api/overview/)
- Netlify
- GitHub Actions for automated deployment and image optimisation

Steps for setting up the API key for openweathermap
To generate an API key for openweathermap, register on openweathermap: https://home.openweathermap.org/api_keys
Rename example.env to .env and put your API key in between single quotes to the right of the REACT_APP_APIKEY variable

## Live website

You can try out the site either at [Netlify](https://prep-22-aug-prep-2-project.netlify.app/) or [GitHub Pages](https://mlh-fellowship.github.io/prep-project-22.AUG.PREP.2/)

## Features

- Detect current user's location using the JavaScript [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- Autocomplete location name when location is typed in the search bar
- Interactive map that allows you to set the location anywhere in the world
- Get weather condtions like temperature, humidity, wind speed, times for sunrise and sunset, and more
- Suggestions for clothing according to the weather
- Automated deployment using GitHub actions
- Image optimisation using [Calibre image-actions](https://github.com/calibreapp/image-actions)

## Installation & Development

1. Fork and clone the repository
2. Ensure Node and NPM are installed on your system with `node -v` and `npm -v`
3. `cd` into the project folder
4. Install the dependencies with `npm install`
5. Start the development server with `npm start`
6. Build the project for production with `npm run build`

More documentation on the scripts can be found [here](https://create-react-app.dev/docs/available-scripts).
