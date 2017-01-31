  var app = angular.module('introApp', []);

  app.controller('IntroController', function (){
    console.log('IntroController loaded');

    //controller as syntax
    var intro = this;
    intro.totalSum = 0;

    intro.employees = [];

    intro.addCohort = function(cohortname){
      intro.cohorts.push(cohortname);
      intro.cohort.name = '';
    };

    intro.addEmp = function(employee){

      //Adds the new employee to the employee array
      intro.employees.push(angular.copy(employee));
      console.log("Employee Object from Form:",angular.copy(employee));
      intro.totalSum += Number(employee.salary);
      console.log(intro.totalSum);
      intro.emp = null;

    };

    intro.deleteEmp = function(index){
      console.log(index);
      intro.totalSum -= Number(intro.employees[index].salary);
      intro.employees.splice(index,1);
    }
  });
