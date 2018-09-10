# Hands-on Introduction to Britecharts

A hands-on introduction to building beatiful visualizations using _Britecharts_.

# Abstract

The usual workflow when developing interactive data visualizations with D3.js is based on the significant number of examples that the D3 community provides. They are broad and useful, but they are not ideal. Most of the time, they **require a lot of effort to integrate into your code and to make them production-ready**.

There is a different way of building D3.js charts: by using the **Reusable Chart API pattern** – a way of encapsulating D3.js code– and building our components with **Test Driven Development (TDD)**. Following those ideas, and with the help of Eventbrite’s design team, we created Britecharts.

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
