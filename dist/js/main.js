(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "title": "JS2015 Tree",
    "nodes": [
        {
            "name": "Node 1",
            "children": [
                {
                    "name": "Node 1-A"
                },
                {
                    "name": "Node 1-B"
                }
            ]
        },
        {
            "name": "Node 2"
        },
        {
            "name": "Node 3",
            "children": [
                {
                    "name": "Node 3-A"
                }
            ]
        },
        {
            "name": "Node 4",
            "children": [
                {
                    "name": "Node 4-A"
                }
            ]
        }
    ]
}
},{}],2:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 18:58:16
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TreeNode = function TreeNode(nodeData, index) {
    _classCallCheck(this, TreeNode);

    this.element = document.createElement('li');
    this.element.classList.add('es6-tree-node');
    this.element.innerHTML = nodeData.name;
};

exports['default'] = TreeNode;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:22:43
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 18:36:19
*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _treeJs = require('./tree.js');

var _treeJs2 = _interopRequireDefault(_treeJs);

var _dataDataJson = require('../../data/data.json');

var _dataDataJson2 = _interopRequireDefault(_dataDataJson);

document.addEventListener('DOMContentLoaded', function () {
    var tree = new _treeJs2['default']('#tree-mount', _dataDataJson2['default'], {});
});

},{"../../data/data.json":1,"./tree.js":4}],4:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 19:08:05
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _componentsTreeNodeJs = require('./components/tree-node.js');

var _componentsTreeNodeJs2 = _interopRequireDefault(_componentsTreeNodeJs);

var Tree = (function () {
    function Tree(selector, data, options) {
        _classCallCheck(this, Tree);

        this.element = document.querySelector(selector);
        this.data = data;
        this.prefix = 'es6-tree-';

        this.verify();

        this.defaults = {
            nodeClass: 'es6-tree-node',
            draggable: true,
            destroyable: true,
            onDestroy: function onDestroy() {},
            onMove: function onMove() {}
        };

        this.options = Object.assign(this.defaults, options);

        this.init();
    }

    _createClass(Tree, [{
        key: 'verify',
        value: function verify() {
            if (!this.element) throw Error('No document node with ' + selector + ' selector could be found!');

            if (!this.data) throw Error('Data must been provided in order to build tree');
        }
    }, {
        key: 'init',
        value: function init() {
            this.createTitle();
            this.setup();
            this.buildHTML(this.data.nodes, this.startOL);

            this.element.appendChild(this.treeFragment);
        }
    }, {
        key: 'setup',
        value: function setup() {
            this.treeFragment = document.createDocumentFragment();
            this.startOL = this.get('ol', ['leaf']);
            this.treeFragment.appendChild(this.startOL);
        }
    }, {
        key: 'buildHTML',
        value: function buildHTML(nodes, ol) {
            var Node, newOl;

            nodes.forEach(function (node, i) {

                Node = new _componentsTreeNodeJs2['default'](node, i);
                ol.appendChild(Node.element);

                if (node.children) {
                    newOl = this.get('ol', ['leaf']);
                    this.buildHTML(node.children, newOl);
                    Node.element.appendChild(newOl);
                }
            }, this);
        }
    }, {
        key: 'createTitle',
        value: function createTitle() {
            var title = this.get('div', ['title'], this.data.title);
            this.element.appendChild(title);
        }
    }, {
        key: 'get',
        value: function get(type, classes, text) {
            var _this = this;

            var node = document.createElement(type);

            if (classes) {
                classes.forEach(function (cls) {
                    node.classList.add(_this.prefix + cls);
                }, this);
            }

            if (text) {
                node.innerHTML = text;
            }

            return node;
        }
    }]);

    return Tree;
})();

exports['default'] = Tree;
module.exports = exports['default'];

},{"./components/tree-node.js":2}]},{},[3,4]);
