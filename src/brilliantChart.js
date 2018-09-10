import * as d3 from 'd3';

import colors from 'britecharts/dist/umd/colors.min.js';
// import <chart> from 'britecharts/dist/umd/<chart>.min.js';

const data = [
    {
        "name": "Shiny",
        "id": 1,
        "quantity": 86,
    },
    {
        "name": "Blazing",
        "id": 2,
        "quantity": 300,
    },
    {
        "name": "Dazzling",
        "id": 3,
        "quantity": 276,
    },
    {
        "name": "Radiant",
        "id": 4,
        "quantity": 195,
    },
    {
        "name": "Sparkling",
        "id": 5,
        "quantity": 36,
    },
    {
        "name": "Other",
        "id": 0,
        "quantity": 814,
    }
];

let barContainer = d3.select('.js-container');
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;
