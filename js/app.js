angular
  .module('screen', [])
  .factory('DataService', DataService)
  .controller('DataTableCtrl', DataTableCtrl);

var mockData = [
  {
    object: {
      title: 'Advanced Technology - TMS',
      description: 'Active Advanced Technology List'
    },
    platform: 'Teradata',
    function: 'Reference',
    subcategory: 'TMS'
  },
  {
    object: {
      title: 'Some other object',
      description: 'Some random description'
    },
    platform: 'Platform Y',
    function: 'Reference',
    subcategory: 'ABC'
  },
  {
    object: {
      title: 'Another object here',
      description: 'Another random description'
    },
    platform: 'Platform X',
    function: 'Reference',
    subcategory: 'TMS'
  },
  {
    object: {
      title: 'Yet another title indeed',
      description: 'Yet another random description'
    },
    platform: 'Platform Z',
    function: 'Reference',
    subcategory: 'DEF'
  }
];

function DataService() {
  return {
    getAllData: function() {
      return mockData;
    }
  };
}

function DataTableCtrl(DataService) {
  var vm = this;
  vm.results = DataService.getAllData();
  console.log(vm.results);
}

DataTableCtrl.$inject = ["DataService"];
