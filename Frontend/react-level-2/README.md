# Github user search

## Instructions

Create an input text in which as the user types in, launch a search against
Github users and return a result list.

### The subject

1. Query against Github Api: GET https://api.github.com/search/users?q={USER}.
2. Try to not add any dependency library on a freshly created
   [create react app](https://github.com/facebook/create-react-app).
3. Don't forget to check against modern ways to make HTTP requests on frontend side.
4. Bonus: manage edge cases (no results, github api rate limit)

## How to use

I used create-react-app for this exercice without any external libraries. Use 
``
yarn start
``
to launch the app in localhost mode.
