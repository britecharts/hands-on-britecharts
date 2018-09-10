# Hands-on Introduction to Britecharts

A hands-on introduction to building beatiful visualizations using _Britecharts_.

# Abstract

The usual workflow when developing interactive data visualizations with D3.js is based on the significant number of examples that the D3 community provides. They are broad and useful, but they are not ideal. Most of the time, they **require a lot of effort to integrate into your code and to make them production-ready**.

There is a different way of building D3.js charts: by using the **Reusable Chart API pattern** – a way of encapsulating D3.js code– and building our components with **Test Driven Development (TDD)**. Following those ideas, and with the help of Eventbrite’s design team, we created Britecharts.

# Set Up

```shell
git clone https://github.com/Golodhros/hands-on-britecharts.git
cd hands-on-britecharts
yarn install
yarn start
```

# Exercise

There is a chart already ready for you to experiment with [`src/barChart.js`](./src/barChart.js). Take a look at the code and pick another `.js` file (e.g. [`src/brilliantChart.js`](./src/brilliantChart.js)) in the same folder. All other files have basic setup and data but there is no chart code. Your task would be to identify which chart the data structure in the file belongs to and draw the chart by importing the appropriate chart. It would be helpful to use [Britecharts API data model documentation](http://eventbrite.github.io/britecharts/global.html#BarChartData) as a reference.

# Content

- [What is Britecharts?](#what-is-britecharts)
- [What problem does Britecharts solve?](#what-problem-does-britecharts-solve)
- [Chart Types](#chart-types)
  - [Categorical Data](#categorical-data)
    - [Bar Chart](#bar-chart)
    - [Grouped Bar Chart](#grouped-bar-chart)
    - [Stacked Bar Chart](#stacked-bar-chart)
    - [Donut Chart](#donut-chart)
  - [Time Series](#time-series)
    - [Line Chart](#line-chart)
    - [Stacked Area Chart](#stacked-area-chart)
    - [Sparkline Chart](#sparkline-chart)
  - [Performance Metrics and Variable Correlations](#performance-metrics-and-variable-correlations)
    - [Bullet Chart](#bullet-chart)
    - [Heatmap](#heatmap)
    - [Scatter Plot and Bullet Chart](#scatter-plot-and-bubble-chart)
  - [Supporting Components](#supporting-components)
    - [Brush](#brush)
    - [Tooltip](#tooltip)
    - [Mini Tooltip](#mini-tooltip)
    - [Legend](#legend)
  - [More on charts and their uses](#more-on-charts-and-their-uses)
- [Setting Up a Basic Chart](#setting-up-a-basic-chart)
  - [More on Britecharts](#more-on-britecharts)
  - [Follow Up Material](#follow-up-material)

---

## What is Britecharts?

[Britecharts](https://github.com/eventbrite/britecharts) is a client-side reusable Charting Library based on [D3.js](https://github.com/d3/d3) v5 that allows easy and intuitive use of charts and components that can be composed together creating beautiful interactive visualizations.

The idea behind Britecharts is twofold: first, we want to allow developers and designers with little experience with D3.js to **build great interactive charts with little initial effort**. Second, we want to propose a framework for helping D3.js developers to create new D3.js charts by following standards like the **Reusable Chart API** and Test **Driven Development**.

## What problem does Britecharts solve?

Britecharts components are an implementation of the Reusable Chart API pattern. This code pattern solves common problems of regular D3.js charts: **monolithic functions**, **lack of modularity**, **high complexity**, **low re-usability** and **poor testability**.

We also wanted to accomplish this with an eye for **aesthetics** so that anybody could have a beautiful chart working out of the box. Britecharts also offers **the set-up** necessary to create charts on a TDD basis as well as a playground for polishing and manually testing them.

## Chart Types

Britecharts supports a great number of charts that are necessary to describe **various types of data**. Here, we will introduce those charts based on their uses and the types of data they usually represent.

### Categorical Data

Categorical data is information **organized into groups or categories**. Let’s see which Britecharts charts work best for this kind of data:

#### Bar Chart

The _Bar Chart_ (or _Column Chart_) is the most common chart for comparing categorical data. It shows how many elements of each category are there. Bar Charts are easy to read for our eyes, as they employ the longitude of the bars to show us comparisons.

![bar chart](/docs/img/bar-chart.png)

#### Grouped Bar Chart

_Grouped Bar Charts_, also named _Multi-Set Bar Charts_, are used to **show multiple data sets visualized and grouped by categories or periods**. They are easy to compare and will work great up to a certain number of categories.

![grouped bar chart](/docs/img/grouped-bar-chart.png)

#### Stacked Bar Chart

The _Stacked Bar Chart_ shows multiple datasets one on top of the other. They **illustrate how one larger category is composed of other smaller categories graphically**.

![stacked bar chart](/docs/img/stacked-bar-chart.png)

#### Donut Chart

_Donut chart_ is a variant of the Pie Chart, and as such, it shows **proportions of a total**. It reads slightly better than the Pie chart as it substitutes the need for the ready to do area calculations for arc calculations, making it easy to compare.

![donut chart](/docs/img/donut-chart.png)

### Time Series

Time Series data is a series of values of a **quantity obtained at successive times**, usually within symmetric intervals in between. We could use the following Britecharts charts for representing them:

#### Line Chart

It is one of the most common chart types in some fields, and it mainly **shows trends** within time series data. They could be mono or multi-line.

#### Stacked Area Chart

With *Stacked Area* chart you can track multiple variables evolving over time, **showing the part-to-whole relationship**, and how each category contributes to the cumulative total.

![stacked area chart](/docs/img/stacked-area-chart.png)

#### Sparkline Chart

Usually a lot smaller in scale than the previous time series charts,
*Sparkline* charts are great for **quick numerical data representation**. Originally conceived to work inserted within a text paragraph, we can also use them in small widgets of dashboards.

![sparkline chart](/docs/img/sparkline-chart.png)

### Performance Metrics and Variable Correlations

Sometimes a simple metric includes:

#### Bullet Chart

*Bullet* chart contains compact visualizations that show performance metrics, and their goals as well as different steps for achievements within those metrics.

![Bullet Chart](/docs/img/bullet-chart.png)

#### Heatmap

*Heatmap* chart shows the relation between two variables, providing a rating based on the color of every cell, using different colors or saturation of the same color to represent the rating. They usually have one category in the rows and another in the cells, and they are used to represent tabular data visually.

![Heatmap Chart](/docs/img/heatmap-chart.png)

#### Scatter Plot and Bubble Chart

A *Scatter Plot* places points in cartesian coordinates representing two variables, and it is of great utility to **surface correlations**. Scatter Plots are popular in research, as they can surface different correlation types among the represented data. A Bubble Chart is merely a Scatter Plot with a third variable represented by the radius of the bubbles.

![scatter plot and bubble chart](/docs/img/scatter-plot-chart.png)

### Supporting Components

We also have components that we can use to build rich data visualizations and dashboards:

#### Brush

You can utilize the *Brush* component to **filter time series data** to show in a chart with a simple drag and drop movement. It also allows users to movie the selection horizontally by clicking and holding to reset the filtering by clicking once somewhere in the chart.

![brush](/docs/img/brush.png)

#### Tooltip

The *Tooltip* component can be used with the line chart, stacked area chart, grouped and stacked bar charts. It features a **configurable “title” line** at the top and the data breakdown in the body of the tooltip.

![tooltip](/docs/img/tooltip.png)

#### Mini Tooltip

Our newer tooltip, *Mini-tooltip*, is currently used in Bar charts and Scatter plot/Bubble charts. It can show a title line and one or two variables in a more **simpler** design:

![mini tooltip](/docs/img/mini-tooltip.png)

#### Legend

You can use our *Legend* component along any chart, and it features two primary configurations: vertical and horizontal. You can listen for mouse events on it:

![Legend](/docs/img/legend.png)

### More on charts and their uses

* [The Data Visualization Catalogue](https://datavizcatalogue.com/index.html)
* [Sparkline theory and practice Edward Tufte](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR) by Edward Tufte
* [Data Visualization 101: How to Choose the Right Chart or Graph for Your Data](https://blog.hubspot.com/marketing/types-of-graphs-for-data-visualization)

## Setting Up A Basic Chart

Here is the description of how we can start up and running with Britecharts. These steps are already done for you in this repository. Look at the `src` folder to see the examples of charts and their data in the `js` files.

For installing the library, you can use NPM or Bower packages, CDN served scripts or directly use the Github repository. Let’s see how we do it using Yarn:

```shell
yarn add britecharts
```

We will need to create an HTML file that lods Britecharts styles and adds a container `div` we will draw our chart in. This was already done in [`index.html`](/index.html) file:

```html
<!DOCTYPE html>
  <head>
      [...]
      <link rel="stylesheet" href="node_modules/britecharts/dist/css/britecharts.min.css">
  </head>
  <body>
      <div class="js-container"></div>
  </body>
</html>
```

Next, we should create a new file where we can import the dependencies. Look at [`src/barChart.js`](/src/barChart.js) for an example. You can import dependencies like so:

```js
import * as d3 from 'd3';
import bar from 'britecharts/dist/umd/bar.min.js';
import colors from 'britecharts/dist/umd/colors.min.js';
```

Next up we will create your first chart. We will start with the data definition. Here, we have a piece of data:

```js
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
```

This data is the result of an imaginary poll we made around our team at Eventbrite. As it is category data, we will use a horizontal bar chart to represent it.

Once we choose the chart type, we need to figure out the required data format to feed the component. We do this by navigating to the “Types” section of the docs – within the “API” drop-down on the documentation homepage– and searching for the bar chart.

The required data format looks like the following snippet:

```
[
    {
        value: 1,
        name: 'glittering'
    },
    {
        value: 1,
        name: 'luminous'
    }
]
```

Our original data shape is pretty much the same, so we won’t need to transform our data.

Now we will need to call our chart, and for that, we will first need to create a container div and attach to it our data. We are going to check the container width and store it in a variable so that our chart adapts to the space given to it in the DOM:

```js
let barContainer = d3.select('.js-container');
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false;
```

Next, we will instantiate a new bar chart, configure it, and bound it together with our data-loaded container:

```js
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
   .colorSchema(colors.colorSchemas.britecharts)
   .width(containerWidth)
   .height(300);

barContainer.datum(data).call(barChart);
```

Every Britechart has series of public properties that are configurable. In this case, we are using `margin`, `horizontal`, `usePercentage`, `percentageAxisToMaxRatio`, `width`, and `height`. You can find a description of all of them in the API Reference of the docs homepage. Here is the [Bar Chart API](http://eventbrite.github.io/britecharts/module-Bar.html).

Here is how your chart should look like now:

![bar chart demo example](/docs/img/bar-chart-example.png)

### Now it's your turn. Clone this repository and pick one of the empty example charts with data. First you have to figure out which chart would you pick to represent this data? Duplicate the example chart and try to render a new chart.

## More on Britecharts

* [Britecharts Documentation Homepage](http://eventbrite.github.io/britecharts) - Docs
* [Introducing Britecharts](https://www.eventbrite.com/engineering/introducing-britecharts/) - Blog Post

## Follow Up Material
* [Create Beautiful Test Driven Data Visualizations with D3](https://www.heartinternet.uk/blog/create-beautiful-test-driven-data-visualisations-with-d3-js) - Heatmap Blog Post
* [React, D3 and their Ecosystem](https://www.smashingmagazine.com/2018/02/react-d3-ecosystem/) - Blog Post
* [Britecharts React](https://eventbrite.github.io/britecharts-react) - Britecharts React wrapper
