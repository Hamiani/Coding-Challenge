This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## `npm install`
to install all the dependecies 

## `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

I worked with react-infinite-scroller https://www.npmjs.com/package/react-infinite-scroller it helps a lot in building an infinit-scroll

I worked with axios https://www.npmjs.com/package/axios to make http request 

I used moment https://www.npmjs.com/package/moment to get the diffrence in days between dates


## Idea of the App
The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. You'll be fetching the sorted JSON data directly from the Github API.

## Features
1.As a User I should be able to list the most starred Github repos that were created in the last 30 days.
2.As a User I should see the results as a list. One repository per row.
3.As a User I should be able to see for each repo/row the following details :
    -Repository name
    -Repository description
    -Number of stars for the repo.
    -Number of issues for the repo.
    -Username and avatar of the owner.
4.As a User I should be able to keep scrolling and new results should appear (pagination).



