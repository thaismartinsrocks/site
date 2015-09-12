'use strict';

var app = angular.module('thaisMartins');
app.factory('WorksService', function () {

    var items = [
        {id: 1, name: 'Viva Design Hostel', description: 'Site institucional', path: 'vivahostel', images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Conte�do Interno', image: 'conteudo.jpg'},
            {id: 3, name: 'Listagem de Fotos', image: 'fotos.jpg'},
            {id: 4, name: 'Tour', image: 'tour.jpg'}
        ], tags: ['design', 'layout', 'html', 'css', 'javascript'], url: 'http://www.vivahostel.com.br/'},
        {id: 2, name: 'Apperone', description: 'Layout do Aplicativo', path: 'apperone', images: [
            {id: 1, name: 'Home', image: 'home.jpg'},
            {id: 2, name: 'Busca', image: 'busca.jpg'},
            {id: 3, name: 'Listagem de Estabelecimentos', image: 'lista.jpg'},
            {id: 4, name: 'Conte�do Interno', image: 'detalhes.jpg'}
        ], tags: ['design'], url: ''}
    ];

    return {
        getItems: function() {
            return items;
        },
        getItem: function(id) {
            return items[id];
        }
    };
});