angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

    var ddo = {}

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        titulo: '@'//somente arroba significa que o atributo tem o mesmo nome da propriedade ('@titulo')
    };

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});