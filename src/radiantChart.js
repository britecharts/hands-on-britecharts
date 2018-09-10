import * as d3 from 'd3';

import colors from 'britecharts/dist/umd/colors.min.js';
// import <chart> from 'britecharts/dist/umd/<chart>.min.js';

const data = [
    {
        "name": "Radiant",
        "id": -1,
        "value": 15,
        "date": "2015-12-30T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 16,
        "date": "2015-12-31T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 15,
        "date": "2016-01-01T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 18,
        "date": "2016-01-02T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 16,
        "date": "2016-01-03T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 14,
        "date": "2016-01-04T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 10,
        "date": "2016-01-05T00:00:00-08:00"
    },
    {
        "name": "Radiant",
        "id": -1,
        "value": 12,
        "date": "2016-01-06T00:00:00-08:00"
    }
];

let barContainer = d3.select('.js-container');
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;

