# Lab: Restaurant Primer in MongoDB

## I'm testing markup or down of github readme.
### So this may seem random, but..  
    I'm a new line!

I'm writing this line because, I'm testing if line break works?..  
it works?  
#It `works!!!`

Next, I'm testing some kind of putting code to display as code  
```javascript
    const someVar = require('planning').waterFallChart;
```
But whey this is using 3x \`. so why line 5 works?  
    var imTakingSomething = fromCSHarpLibrary(func);
## Hungry? Find a restaurant!!
In this lab, you will practise how to use MongoDb queries to find the most suitable restaurant(s) in the provided dataset.

## Dataset
We will use the [Example Dataset from the MongoDb official web site](https://docs.mongodb.org/getting-started/shell/import-data/).

1. Fork and Clone this lab repo to your local.
1. [Download](https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/dataset.json) the dataset and save it as `primer-dataset.json` in your local repo folder. We have included this file in your `.gitignore` already so it won't be pushed to your own github repo.
1. Make sure your `mongod` is running (if not, run it now!).
1. Run the following command in your repo directory:
```
mongoimport --db test --collection restaurants --drop --file primer-dataset.json
```
1. A successful import will insert all 25359 entries in your DB.

## Your Tasks

1. Write a MongoDB query for each of the scenarios described in the following sections.
1. Collect all your queries in a file called `queries.js`.
1. Push `queries.js` to your repo.
1. Submit a pull request to the project repo.

### Preparations

Read the [documentation](https://docs.mongodb.org/v3.0/tutorial/query-documents/). Try some simple queries first to get an idea how to use it. Use Robomongo write and test your queries.

### Warm up

1. List out all available `cuisine` from the **whole dataset** and sort them in alphabetical order (Hint: read [this](https://docs.mongodb.org/v3.0/reference/method/db.collection.distinct/)).
1. Find out all available `cuisine` from the restaurants that are located on `Cross Bay Boulevard` and whose address uses zip code `11414`.
1. Find the name and address of the `Steak House` owned by your WDI-HK-10 instructor (Hint: You may want to use regular expression).

### Pizza

1. List out the name of all restaurants which **contain** the word `Pizza` in the *cuisine* but  **DO NOT contain** the word `Pizza` or `Pizzeria` in the restaurant **name** (Hint: use regular expression).
1. List out the name of all *straight A* (i.e. the restaurant has only received `A` grade ever) restaurants which contain the word `Pizza` in the `cuisine` and are located in the `Queens` *borough* (Hint: you may want to first find out how many available grade values we have in the entire dataset).

### Hamburgers

1. You are hungry and feel like having a hamburger. Find the number of restaurants listed `Hamburgers` as their main *cuisine*.
1. Geez, there are way too many of them. Let's narrow down our search. You are in Manhattan right now so let's find how many restaurants listed `Hamburgers` as their main `cuisine` in the `Manhattan` *borough*.
1. Let's have something nice and get rid of the `McDonald's` in the results. Find how many restaurants listed `Hamburgers` as their main `cuisine` in `Manhattan` *and* exclude all `Mcdonald's` (Note: In the data set, _McDonald's_ was presented in inconsistent ways, e.g. `McDonald's` and `McDonald'S`. So please use the regular expression `/McDonald/` in your query).
1. Hmm... we are getting closer. Let's also get rid of `Burger King` as well.
1. There are still plenty of choices. Maybe you should just pick one closer to your home. Find out the list of `distinct` `street` based on the results of Question 4.
1. Alright, you are just a block away from `Pearl Street`. Find the `name` of the `Hamburger` restaurant (i.e. your query should return the name of the restaurant only) on `Pearl Street`. Your query should now yield exactly *one* restaurant. What is it? (Submit the query and also the name of the restaurant as a comment)

### Hard (You need to do some research first)

1. Find the name of the restaurants which listed `Japanese` as their main cuisine and have exactly 9 `grades`.
