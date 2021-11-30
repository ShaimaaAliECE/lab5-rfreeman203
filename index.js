const express = require('express');
let jobsList = require('./jobs.json');

const app = express();

app.use(express.static('static'));

/*
1-The categories mentioned in all the jobs and how many times each category was 
mentioned.
*/

app.get('/categories', (req, res) => {
    let count = {};

    for (j in jobsList){
        for(c of jobsList[j].categories){
            if(c in count){
                count[c]++;
            }
            else{
                count[c] = 1;
            }
        }
    }

    res.send(JSON.stringify(count));

})

/*
3- All jobs in a given city (sent in the querystring)
*/

app.get('/jobs', (req, res) => {
    let cities = {};

    for (j in jobsList){
        if(jobsList[j].title.includes(req.query.cities)){
            cities[j] = jobsList[j];
        }
    }

    res.send(JSON.stringify(cities));

})

/*
2- All the jobs with a given category (sent as a parameter)
*/
app.get('/:category', (req, res) => {
    let jobs = {};

    for (j in jobsList){
        for(c of jobsList[j].categories){
            if (req.params.category == c){
                jobs[j] = jobsList[j];
            }
        }
    }

    res.send(jobs);

})

app.listen(80);