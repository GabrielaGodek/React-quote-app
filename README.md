# React Quote App
## Live version: [Quote App](https://gabrielagodek.github.io/React-quote-app/)

<!-- >> The application was created for the purposes of the recruitment process at Grupa IT. I also used a link with quotes from them. -->
The application was created using `create react app` command, however, I only uploaded the key files here. I believe that is enough to see how API works in this case.

Main file with the heart of app is located in `src` folder: App.js

I used `fetch` method to get quotes from API requests, then I iterate over the indexes and use the splice method to extract one previously generated random number and assign it to the array. Because of that in JSX section with setQuote, I can add and subtract index to get next and previous quote.
