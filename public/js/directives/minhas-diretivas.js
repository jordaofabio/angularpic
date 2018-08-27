angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

    var ddo = {} //ddo - directive definition object

    ddo.restrict = "AE";//AE A- Atribut E- Element
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'//somente arroba significa que o atributo tem o mesmo nome da propriedade '@titulo'
    };

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});