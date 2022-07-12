# Searching for a Movie using the OMDB API

Star this repo if you found it helpful! 

I created a project that would allow the user to look up basic information about a movie. I built it as a MERN application, using create-react-app and the CSS frameworks, styled-components and Bootstrap. 

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Next-Steps](#Next-Steps)

## Installation
Feel free to fork this repo if you want to run it on your local machine. For this application, I also used Robo 3T to make sure my routes were working, but you are free to use MongoDB Compass as well. 

Open your terminal (if on a Mac) and make sure you run the command: 

```
npm install
```

on **BOTH** the root folder and inside the client folder, in order to install the necessary dependencies for both the front-end and back-end of this application. 

Once that is done, then *cd* back to the root of this application and run the command: 

```
npm start
```

The server and the client side should open at the same time. Thus, the browser will open to `localhost:3000` and you should see a page similar to this: 

![Search and Result Cards](/Search.png)

## Usage
In this application, the user will type the name of a movie in the search form. After clicking the "submit" button, a search result will appear on the right side of the page. If the user likes the movie, he/she/they can click the "save" button and it will be added to the list at the bottom of the page, titled "My Saved Movies". If the user looks at the list and decides she/he/they do not want the movie anymore, they are free to click the "delete" button.  

![Saved Movies List](/Saved.png)

## Contributing
If you are interested in contributing to this project, please feel free to make a PR or email me directly at mairagarcia.codes@gmail.com

## Next Steps
This is a very basic MERN application that taught me many important concepts, such as passing props in React, using `onClick()` listeners to retrieve data from the OMDB API and post it to the database, and how to use a *new* CSS framework.

I do plan to continue working on it - I am looking to add more movie details and styling to it. I also realize that certain movies have same names, but only the most popular movie of that certain name appears on the result box. Thus, I am intrigued on doing further analyzing of my code so that user may have the ability to find a certain movie they like and add it to their "Saved Movies" list, rather than succumb to the current only option from the API. Lastly, as I know testing is very important in the coding world, I am looking forward to learning about different testing frameworks, such as Jest and apply it to this project. 
