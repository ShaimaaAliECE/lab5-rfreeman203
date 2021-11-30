const express = require('express');
let jobsList = require('./jobs.json');

const app = express();

app.use(express.static('static'));

/*
1-The categories mentioned in all the jobs and how many times each category was 
mentioned.
*/
app.get('/categories', (req, res) => {
    
    for(j in jobsList){
        for(c in j){
            console.log(c + " -> " + j[c]);
        }
    }
    /*
    var categoriesList = [];

    for (c of jobsList.categories)
    {
        console.log(c);

        
        for (let c of j.categories){
            if(c in categoriesList.categories)
            {
                //increase qty of category here
                continue;
            }
            else
            {
                var category = {
                    category: c,
                    qty : 0
                }

                categoriesList.push(category)
            }
        }
        
    }
    */
})

/*
2- All the jobs with a given category (sent as a parameter)
*/


/*
3- All jobs in a given city (sent in the querystring)
*/


app.listen(80);