"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
// for home component
var Home = React.createClass({
  render: function(){
    return (
        // for multiple line
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p> React, React Router, and Flux for ultra-responsice web apps</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn More
          </Link>
        </div>
    );
  }
});

module.exports = Home;
