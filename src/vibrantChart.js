import * as d3 from 'd3';

import colors from 'britecharts/dist/umd/colors.min.js';
// import <chart> from 'britecharts/dist/umd/<chart>.min.js';

const data = [
    {
        "stack": "Shiny",
        "name": "light",
        "views": 3,
        "date": "2011-01-05"
    },
    {
        "stack": "Shiny",
        "name": "car",
        "views": 10,
        "date": "2011-01-06"
    },
    {
        "stack": "Shiny",
        "name": "bike",
        "views": 16,
        "date": "2011-01-07"
    },
    {
        "stack": "Shiny",
        "name": "window",
        "views": 23,
        "date": "2011-01-08"
    },
    {
        "stack": "Radiant",
        "name": "face",
        "views": 23,
        "date": "2011-01-05"
    },
    {
        "stack": "Radiant",
         "name": "baby",
        "views": 16,
        "date": "2011-01-06"
    },
    {
        "stack": "Radiant",
         "name": "light",
        "views": 10,
        "date": "2011-01-07"
    },
    {
        "stack": "Radiant",
        "name": "house",
        "views": 4,
        "date": "2011-01-08"
    }
];

let barContainer = d3.select('.js-container');
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;
