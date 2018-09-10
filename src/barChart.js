import * as d3 from 'd3';

import bar from 'britecharts/dist/umd/bar.min.js';
import colors from 'britecharts/dist/umd/colors.min.js';

const data = [
    {
        "name": "Radiating",
        "value": 0.08167
    },
    {
        "name": "Opalescent",
        "value": 0.0492
    },
    {
        "name": "Shining",
        "value": 0.02782
    },
    {
        "name": "Vibrant",
        "value": 0.04253
    },
    {
        "name": "Vivid",
        "value": 0.02702
    },
    {
        "name": "Brilliant",
        "value": 0.02288
    }
];

let barContainer = d3.select('.js-container');
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;

let barChart = new bar();

barChart
   .margin({
        left: 120,
        right: 20,
        top: 20,
        bottom: 40
    })
   .isHorizontal(true)
   .hasPercentage(true)
   .percentageAxisToMaxRatio(1.3)
   .width(containerWidth)
   .colorSchema(colors.colorSchemas.britecharts)
   .height(300);

barContainer.datum(data).call(barChart);

export default barChart;