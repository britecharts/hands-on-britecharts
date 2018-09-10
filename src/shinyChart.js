import * as d3 from 'd3';

import colors from 'britecharts/dist/umd/colors.min.js';
// import <chart> from 'britecharts/dist/umd/<chart>.min.js';

const data = [
    {
        "name": "Shiny",
        "x": 112,
        "y": 47
    },
    {
        "name": "Shiny",
        "x": 374,
        "y": 112
    },
    {
        "name": "Shiny",
        "x": 295,
        "y": 250
    },
    {
        "name": "Shiny",
        "x": 195,
        "y": 168
    },
    {
        "name": "Shiny",
        "x": 195,
        "y": 138
    },
    {
        "name": "Shiny",
        "x": 197,
        "y": 173
    },
    {
        "name": "Shiny",
        "x": 137,
        "y": 213
    },
    {
        "name": "Shiny",
        "x": 317,
        "y": 313
    }
];

let barContainer = d3.select('.js-container');
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;
