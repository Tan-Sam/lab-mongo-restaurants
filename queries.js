use test;
let rests = db.restaurants;


// 1. List out all available `cuisine` from the **whole dataset** and
//    sort them in alphabetical order
//    (Hint: read [this](https://docs.mongodb.org/v3.0/reference/method/db.collection.distinct/)).
  // ans:
  // db.restaurants.distinct("cuisine").sort();

// 1. Find out all available `cuisine` from the restaurants that are located on
// `Cross Bay Boulevard` and whose address uses zip code `11414`.
  // ans:
    //  db.restaurants.distinct("cuisine",
    //                          {$and:[
    //                            {"address.zipcode":"11414"},
    //                            {"address.street":"Cross Bay Boulevard"}
    //                          ]});

// 1. Find the name and address of the `Steak House`
//    owned by your WDI-HK-10 instructor (Hint: You may want to use regular expression).

  // ans:
  // rests.find({"name":{$regex: /willie.+steak/, $options:'i'}},
  //            {"name":1, "address":1, "_id":0}).pretty();

// 1. List out the name of all restaurants which **contain** the word
//    `Pizza` in the *cuisine* but  **DO NOT contain** the word
//    `Pizza` or `Pizzeria` in the restaurant **name** (Hint: use regular expression).

// step 1
// rests.find({"cuisine":{$regex:/pizza/, $options:'i'}}, {"cuisine":1, "name":1, "_id":0});
  // works with array; albeit only one element.
// rests.find({"cuisine":{$in:[/pizza/i]}}, {"cuisine":1, "name":1, "_id":0});

// step 2 (final)/ ans:
  // let res = rests.find({$and:[{"cuisine":{$regex:/pizza/, $options:'i'}},
  //                             {"name":{ $nin:[/pizza/i,/pizzeria/i]}}]},
  //                      {"cuisine":1, "name":1, "_id":0});
  // "result length: " + res.count();
  // res;

1. List out the name of all *straight A*
   (i.e. the restaurant has only received `A` grade ever)
   restaurants which contain the word `Pizza` in the `cuisine` and
   are located in the `Queens` *borough*
   (First find out how many available grade values
    we have in the entire dataset).

    // step 1
    rests.distinct("grades.grade"); //[ "A", "B", "Z", "C", "P", "Not Yet Graded" ]

    // fail
    // rests.find({"grades.grade":{$regex:/A/}}).pretty();

    // fail
    // rests.find({"grades.grade":"A"}).pretty();

    //  seems to work. reverse result to verify..
    rests.find({"grades.grade":{$nin:[""B", "Z", "C", "P", "Not Yet Graded""]}},
               {"name":1, "grades.grade":1, "_id":0}).pretty();

   //  yes it works
   rests.find({"grades.grade":{$nin:["A"]}},
              {"name":1, "grades.grade":1, "_id":0}).pretty();


  //  hard to verify. proceeding to step 2 & 3.

  let resFound = rests.find({$and:[{"cuisine":{$regex:/pizza/i}},
                                   {"borough":{$regex:/queens/i}}]});
  resFound.count() //  ==> 379.    When factor in straight A's, should be less.


  // now to combine 1,2 & 3. works.
  //  ans:
  let resFound = rests.find({$and:[
                               {"grades.grade":{$nin:["B", "Z", "C", "P", "Not Yet Graded"]}},
                               {"cuisine":{$regex:/pizza/i}},
                               {"borough":{$regex:/queens/i}}]},
                            {"name":1, "grades.grade":1, "_id":0}).pretty();
  resFound.count() //  ==> 209.    When factor in straight A's, should be less.
