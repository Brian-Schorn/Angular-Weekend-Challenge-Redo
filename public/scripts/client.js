  var app = angular.module('introApp', []);

  app.controller('IntroController', function (){
    console.log('IntroController loaded');

    //controller as syntax
    var intro = this;

    intro.employees = [];

    intro.addCohort = function(cohortname){
      intro.cohorts.push(cohortname);
      intro.cohort.name = '';
    };

    intro.addEmp = function(employee){

      //Adds the new employee to the employee array
      intro.employees.push(angular.copy(employee));
      console.log("Employee Object from Form:",angular.copy(employee));

    };

    intro.deleteEmp = function(index){
      console.log(index);
      intro.employees.splice(index,1);
    }
  });
