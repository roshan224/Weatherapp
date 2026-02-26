# Glass Morphism Weather App

A modern weather application built using HTML, Tailwind CSS, CSS
animations, and JavaScript.\
This project fetches real-time weather data from the OpenWeatherMap API
and displays dynamic background animations based on temperature
conditions.

------------------------------------------------------------------------

## Features

-   Search weather by city name
-   Real-time temperature data using OpenWeatherMap API
-   Glass morphism UI design
-   Animated gradient background
-   Dynamic weather animations:
    -   Fire animation for hot temperatures
    -   Snow animation for cold temperatures
    -   Wind animation for moderate temperatures
-   Responsive layout using Tailwind CSS
-   Clean and simple project structure

------------------------------------------------------------------------

## Temperature Logic

-   Temperature ≥ 30°C → Fire animation\
-   Temperature ≤ 10°C → Snow animation\
-   Temperature between 11°C and 29°C → Wind animation

------------------------------------------------------------------------

## Project Structure

    WeatherApp
    │── index.html
    │── style.css
    │── script.js
    │── README.md

------------------------------------------------------------------------

## Technologies Used

-   HTML5
-   Tailwind CSS (via CDN)
-   CSS3 (Glass morphism + animations)
-   JavaScript (DOM manipulation + Fetch API)
-   OpenWeatherMap API

------------------------------------------------------------------------

## How to Run the Project

1.  Download or clone the project.

2.  Open the folder in Visual Studio Code.

3.  Open `script.js`.

4.  Replace:

    ``` js
    const apiKey = "YOUR_API_KEY";
    ```

    with your actual OpenWeatherMap API key.

5.  Save all files.

6.  Install the Live Server extension in VS Code (if not installed).

7.  Right-click on `index.html`.

8.  Click **Open with Live Server**.

The app will open in your browser.

------------------------------------------------------------------------

## How to Get API Key

1.  Go to https://openweathermap.org\
2.  Create a free account\
3.  Navigate to the API Keys section\
4.  Copy your key\
5.  Paste it inside `script.js`

Note: It may take a few minutes after generating the key before it
becomes active.

------------------------------------------------------------------------

## How It Works

1.  User enters a city name.
2.  JavaScript captures the input using DOM methods.
3.  Fetch API sends a request to OpenWeatherMap.
4.  Response is converted to JSON.
5.  Temperature is extracted.
6.  Based on temperature, appropriate CSS animation is injected into the
    DOM.
7.  Results are displayed inside the glass card.

------------------------------------------------------------------------

## Concepts Used

-   DOM Manipulation
-   Event Listeners
-   Fetch API
-   Promises
-   Conditional Logic
-   CSS Animations
-   Glass Morphism (backdrop-filter + transparency)
-   Responsive Design with Tailwind

------------------------------------------------------------------------

## Future Improvements

-   Add rain animation
-   Add lightning animation
-   Dynamic background color based on temperature
-   Add weather icons
-   Add loading spinner
-   Improve error handling
-   Deploy to Netlify or Vercel

------------------------------------------------------------------------

## Author

Roshan senaa S
