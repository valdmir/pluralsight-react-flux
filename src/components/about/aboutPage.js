"use strict";

var React = require('react');

// for home component
var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback){
      if(!confirm('Are you sure read a page that\s this boring?')){
        transition.about();
      }
      else{
        callback();
      }
    },
    
    willTransitionFrom: function(transition, component){
      if(!confirm('Are you sure you leave a page that\'s this exciting?')){
        transition.about();
      }
    }
  },
  render: function(){
    return (
        // for multiple line
        <div>
          <h1>About</h1>
          <p>
            This application uses the following technologies:
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Flux</li>
              <li>Node</li>
              <li>Gulp</li>
              <li>Browserify</li>
              <li>Bootstrap</li>
            </ul>
          </p>
        </div>
    );
  }
});

module.exports = About;
