# Mixtli

## About

**Mixtli** is a platform built to showcase data in the shape of charts created for this project, it was built using rather simple technologies such as Zoho Forms and Google Sheets in order to display the data gathered for the project in a simple and friendly way as part of **"The lack of adoption of Cloud Computing in Latin America"** project.

## Tools
This platform was built using:
+ HTML
+ CSS
+ SASS
+ JavaScript
+ jQuery
+ Google Sheets
+ Zoho Forms

To put it in layman's terms, we implement a survey in the shape of an online form, and each time that survey is filled, it feeds an online spreadsheet.

Within that online spreadsheet, using formulas, the data is analyzed, and that analyzed data is pulled by a website (made by the team for this project) that showcases the results in charts available in both English and Spanish (mixtli.info)

To achieve this, we use Zoho Forms, Google Sheets, and a run-of-the-mill cheap web-hosting service.

This is a simplification of the MVC (Model–View–Controller) architecture. In which the Model is replaced by a spreadsheet in Google Sheets, which is fed by a form (Zoho Forms) instead of using something more traditional like a SQL database.

The purpose of using Google Sheets as a database is to be able to replace the Controller, with formulas within the spreadsheet since it’s easier for the team to use those rather than a programming language for data analysis.

For the View, we use a Linux based web-hosting service with cPanel (commonly used for WordPress hosting) to deploy a rather simple website built with JavaScript, HTML, CSS, and a little of jQuery (only for making the charts)

The resulting data from Google Sheets is exported as JSON and pulled by jQuery to render the charts using the FusionCharts library.

Every time the website loads, the charts present the most recent data in the charts without the need to manually update them at any time the source data changes. Consequently, each time a new survey is filled, that new data is automatically considered.

To comply with the Secure Sockets Layer standard, we used CloudFare’s DNS Name Servers to make use of their free SSL certificate.

It’s important to mention that this solution is designed to be as close to free as possible, easy to replicate, and simple to implement by people without a lot of dev experience. It is in no way the most efficient approach to be taken, but it’s easy to modify and replicate.

## Built by **Fernando Del Valle**
[@fer_dv_](https://twitter.com/@fer_dv_) - ferdelvalle@me.com




