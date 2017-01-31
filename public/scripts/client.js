  var app = angular.module('introApp', []);

  app.controller('IntroController', function (){
    console.log('IntroController loaded');

    //controller as syntax
    var intro = this;

    intro.fullName = 'Brian Schorn';

    intro.upsilon = ['Brian', 'Ahkillah', 'Jake', 'Rukia'];

    intro.cohorts = [];

    intro.addCohort = function(cohortname){
      intro.cohorts.push(cohortname);
      intro.cohort.name = '';
    };

  });
