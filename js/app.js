var app = angular.module('app', []);

app.controller('ApplicationCtrl', [
  '$scope',
  '$http',
  '$sce',
  function ($scope, $http, $sce) {
    $scope.repos = {
      'sequelize/sequelize': {
        description: 'Sequelize is an easy-to-use multi sql dialect object-relationship-mapper for node.js. It currently supports MySQL, MariaDB, SQLite and PostgreSQL',
        forks: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=sequelize&repo=sequelize&type=fork&count=true'),
        star: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=sequelize&repo=sequelize&type=watch&count=true')
      },
      'CleverStack/cleverstack-cli': {
        description: 'CLI for CleverStack',
        forks: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=CleverStack&repo=cleverstack-cli&type=fork&count=true'),
        star: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=CleverStack&repo=cleverstack-cli&type=watch&count=true')
      },
      'durango/sequelize-migrator': {
        description: 'Migrate SequelizeJS migrations without SequelizeMeta table dependency and depdency management.',
        forks: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=sequelize-migrator&type=fork&count=true'),
        star: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=sequelize-migrator&type=watch&count=true')
      },
      'durango/authorize-net-request': {
        description: 'Authorize.net request bindings for Node.JS',
        forks: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=authorize-net-request&type=fork&count=true'),
        star: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=authorize-net-request&type=watch&count=true')
      },
      'durango/authorize-net-cim': {
        description: 'Authorize.net CIM bindings for Node.JS',
        forks: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=authorize-net-cim&type=fork&count=true'),
        star: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=authorize-net-cim&type=watch&count=true')
      },
      'durango/authorize-net-types': {
        description: 'Authorize.net data type bindings for Node.JS',
        forks: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=authorize-net-types&type=fork&count=true'),
        star: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=durango&repo=authorize-net-types&type=watch&count=true')
      }
    };
  }
]);
