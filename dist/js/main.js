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
                    "name": "Node 1-B",
                    "children": [
                        {
                            "name": "Node 1-B-A"
                        }
                    ]
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
* @Last Modified time: 2015-09-07 22:52:56
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TreeNode = (function () {
    function TreeNode(nodeData, options, index) {
        _classCallCheck(this, TreeNode);

        this.element = document.createElement('li');

        this.defaults = {
            dragEvents: [{
                name: 'dragstart',
                fn: this.ondragstart
            }, {
                name: 'ondrag',
                fn: this.ondrag
            }, {
                name: 'dragend',
                fn: this.ondragend
            }, {
                name: 'dragover',
                fn: this.ondragover
            }, {
                name: 'dragleave',
                fn: this.ondragover
            }, {
                name: 'drop',
                fn: this.ondrop
            }]
        };

        this.options = Object.assign(this.defaults, options);

        this.element.classList.add(this.options.nodeClass);

        this.element.appendChild(this.getIcon(nodeData));

        this.initIconEvents();

        if (this.options.draggable) {
            this.initDragEvents();
        }

        this.element.appendChild(this.getDisplayText(nodeData.name));
    }

    _createClass(TreeNode, [{
        key: 'getDisplayText',
        value: function getDisplayText(name) {
            this.displayText = document.createElement('span');
            this.displayText.innerHTML = name;
            return this.displayText;
        }
    }, {
        key: 'getIcon',
        value: function getIcon(nodeData) {
            var _this = this;

            this.icon = document.createElement('i');

            this.options.icons.expandIcon.forEach(function (cls) {
                _this.icon.classList.add(cls);
            }, this);

            if (!nodeData.children || nodeData.children.length < 1) {
                this.icon.classList.add('hidden');
            }

            return this.icon;
        }
    }, {
        key: 'initDragEvents',
        value: function initDragEvents() {
            var _this2 = this;

            this.element.setAttribute('draggable', true);

            this.options.dragEvents.forEach(function (eventObj) {
                _this2.element.addEventListener(eventObj.name, eventObj.fn.bind(_this2));
            }, this);
        }
    }, {
        key: 'initIconEvents',
        value: function initIconEvents() {
            var _this3 = this;

            this.icon.addEventListener('click', function (e) {

                var isExpanding = _this3.icon.classList.contains(_this3.options.icons.expandIcon[1]),
                    classList = isExpanding ? _this3.options.icons.collapseIcon : _this3.options.icons.expandIcon,
                    eventFunc = isExpanding ? _this3.options.onExpand : _this3.options.onCollapse,
                    classesToString = classList.toString().replace(/,/g, ' ');

                _this3.icon.className = classesToString;

                _this3.element.querySelector('ol').classList[isExpanding ? 'add' : 'remove'](_this3.options.prefix + 'visible');

                if (eventFunc) eventFunc.call(e, _this3);
            }, this);
        }
    }, {
        key: 'ondrag',
        value: function ondrag(e) {}
    }, {
        key: 'ondrop',
        value: function ondrop(e) {
            e.preventDefault();
        }
    }, {
        key: 'ondragstart',
        value: function ondragstart(e) {
            e.dataTransfer.setData('application/json', JSON.stringify(this));
        }
    }, {
        key: 'ondragover',
        value: function ondragover(e) {
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'move';

            this.element.classList[e.type === 'dragover' ? 'add' : 'remove'](this.options.prefix + 'dragover');
        }
    }, {
        key: 'ondragend',
        value: function ondragend(e) {}
    }]);

    return TreeNode;
})();

exports['default'] = TreeNode;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:22:43
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 20:09:22
*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _treeJs = require('./tree.js');

var _treeJs2 = _interopRequireDefault(_treeJs);

var _dataDataJson = require('../../data/data.json');

var _dataDataJson2 = _interopRequireDefault(_dataDataJson);

document.addEventListener('DOMContentLoaded', function () {
    var tree = new _treeJs2['default']('#tree-mount', _dataDataJson2['default'], {
        expandedOnLoad: false
    });
});

},{"../../data/data.json":1,"./tree.js":4}],4:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 22:59:00
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

        this.verify(selector);

        this.defaults = {
            nodeClass: 'es6-tree-node',
            prefix: 'es6-tree-',
            topLevelClass: 'top-level',
            icons: {
                expandIcon: ['fa', 'fa-plus', 'es6-tree-icon'],
                collapseIcon: ['fa', 'fa-minus', 'es6-tree-icon']
            },

            draggable: true,
            destroyable: true,
            expandedOnLoad: true,
            onDestroy: function onDestroy(node) {},
            onExpand: function onExpand(node) {},
            onCollapse: function onCollapse(node) {},
            onMove: function onMove(node) {}
        };

        this.options = Object.assign(this.defaults, options);
        this.init();
    }

    _createClass(Tree, [{
        key: 'verify',
        value: function verify(selector) {
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
            this.startOL = this.get('ol', ['leaf', 'visible', this.options.topLevelClass]);
            this.treeFragment.appendChild(this.startOL);
        }
    }, {
        key: 'buildHTML',
        value: function buildHTML(nodes, ol) {
            var Node, newOl;

            nodes.forEach(function (node, i) {

                Node = new _componentsTreeNodeJs2['default'](node, this.options, i);
                ol.appendChild(Node.element);

                if (node.children) {
                    newOl = this.get('ol', ['leaf'], null, { 'drop': this.ondrop });
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
        value: function get(type, classes, text, events) {
            var _this = this;

            var node = document.createElement(type);

            if (classes) {
                classes.forEach(function (cls) {
                    node.classList.add(_this.options.prefix + cls);
                }, this);
            }

            if (text) {
                node.innerHTML = text;
            }

            if (events) {
                for (var ev in events) {
                    node.addEventListener(ev, events[ev].bind(this));
                }
            }

            return node;
        }
    }, {
        key: 'ondrop',
        value: function ondrop(e) {
            e.preventDefault();
            e.dataTransfer.getData();
            alert('hi');
        }
    }]);

    return Tree;
})();

exports['default'] = Tree;
module.exports = exports['default'];

},{"./components/tree-node.js":2}]},{},[3,4]);
