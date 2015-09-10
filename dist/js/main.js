(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "title": "The Wonder Years Discography",
    "nodes": [
        {
            "name": "2015",
            "children": [
                {
                    "name": "No Closer To Heaven",
                    "children": [
                        {
                            "name": "Brothers &"
                        },
                        {
                            "name": "Cardinals"
                        },
                        {
                            "name": "A Song For Patsy Cline"
                        },
                        {
                            "name": "I Don't Like Who I Was Then"
                        },
                        {
                            "name": "Cigarettes & Saints"
                        },
                        {
                            "name": "The Bluest Things On Earth"
                        },
                        {
                            "name": "A Song For Ernest Hemingway"
                        },
                        {
                            "name": "Thanks For The Ride"
                        },
                        {
                            "name": "Stained Glass Ceilings"
                        },
                        {
                            "name": "I Wanted So Badly To Be Brave"
                        },
                        {
                            "name": "You In January"
                        },
                        {
                            "name": "Palm Reader"
                        },
                        {
                            "name": "No Closer To Heaven",
                            "children": [
                                {
                                    "name": "TO BE DELETED",
                                    "children": [
                                        {
                                            "name": "TO BE DELETED"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "2013",
            "children": [
                {
                    "name": "The Greatest Generation",
                    "children": [
                        {
                            "name": "There, there"
                        },
                        {
                            "name": "Passing Through A Screen Door"
                        },
                        {
                            "name": "We Could Die Like This"
                        },
                        {
                            "name": "Dismantling Summer"
                        },
                        {
                            "name": "The Bastards, The Vultures, The Wolves"
                        },
                        {
                            "name": "The Devil In My Bloodstream"
                        },
                        {
                            "name": "Teenage Parents"
                        },
                        {
                            "name": "Chaser"
                        },
                        {
                            "name": "An American Religion (FSF)"
                        },
                        {
                            "name": "A Raindance In Traffic"
                        },
                        {
                            "name": "Madelyn"
                        },
                        {
                            "name": "Cul-de-sac"
                        },
                        {
                            "name": "I Just Want To Sell Out My Funeral"
                        }
                    ]
                }
            ]
        },
        {
            "name": "2011",
             "children": [
                {
                    "name": "Suburbia: I've Given You All And Now I'm Nothing",
                    "children": [
                        {
                            "name": "Came Out Swinging"
                        },
                        {
                            "name": "Woke Up Older"
                        },
                        {
                            "name": "Local Man Ruins Everything"
                        },
                        {
                            "name": "Suburbia"
                        },
                        {
                            "name": "My Life As A Pigeon"
                        },
                        {
                            "name": "Summers In PA"
                        },
                        {
                            "name": "I Won't Say The Lord's Prayer"
                        },
                        {
                            "name": "Coffee Eyes"
                        },
                        {
                            "name": "I've Given You All"
                        },
                        {
                            "name": "Don't Let Me Cave In"
                        },
                        {
                            "name": "You Made Me Want To Be A Saint"
                        },
                        {
                            "name": "Hoodie Weather"
                        },
                        {
                            "name": "And Now I'm Nothing"
                        },
                        {
                            "name": "My Life As Rob Gordon"
                        },
                        {
                            "name": "Living Room Song"
                        }
                    ]
                }
            ]
        },
        {
            "name": "2011",
             "children": [
                {
                    "name": "The Upsides",
                    "children": [
                        {
                            "name": "My Last Semester"
                        },
                        {
                            "name": "Logan Circle"
                        },
                        {
                            "name": "Everything I Own Fits In This Backpack"
                        },
                        {
                            "name": "Dynamite Shovel"
                        },
                        {
                            "name": "New Years With Carl Weathers"
                        },
                        {
                            "name": "It's Never Sunny In South Philadelphia"
                        },
                        {
                            "name": "Hostels And Brothels"
                        },
                        {
                            "name": "Melrose Diner"
                        },
                        {
                            "name": "This Party Sucks"
                        },
                        {
                            "name": "Hey Thanks"
                        },
                        {
                            "name": "Washington Square Park"
                        },
                        {
                            "name": "All My Friends Are In Bar Bands"
                        },
                        {
                            "name": "I Was Scared And I'm Sorry"
                        },
                        {
                            "name": "Logan Circle: A New Hope"
                        },
                        {
                            "name": "We Won't Bury You"
                        }
                    ]
                }
            ]
        }
    ]
}
},{}],2:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-08 09:09:32
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-09 20:48:32
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DomHelper = (function () {
    function DomHelper() {
        _classCallCheck(this, DomHelper);
    }

    _createClass(DomHelper, [{
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
        key: 'isEqual',
        value: function isEqual(type, obj1, obj2) {

            if (type === 'array') {
                if (obj1.join(',') === obj2.join(',')) {
                    return true;
                }
            }

            return false;
        }
    }, {
        key: 'ondrop',
        value: function ondrop(e) {
            e.preventDefault();
        }
    }, {
        key: 'ondragover',
        value: function ondragover(e) {
            e.preventDefault();
        }
    }]);

    return DomHelper;
})();

exports['default'] = DomHelper;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-10 09:44:13
*/
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _domHelperJs = require('./dom-helper.js');

var _domHelperJs2 = _interopRequireDefault(_domHelperJs);

var TreeNode = (function (_DomHelper) {
    _inherits(TreeNode, _DomHelper);

    function TreeNode(nodeData, options, tree) {
        _classCallCheck(this, TreeNode);

        _get(Object.getPrototypeOf(TreeNode.prototype), 'constructor', this).call(this);
        this.element = this.get('li', [], null, null);
        this.name = nodeData.name;
        this.children = nodeData.children || [];
        this.tree = tree;

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

        this.initIconEvents(nodeData);

        if (this.options.draggable) {
            this.initDragEvents();
        }

        this.element.appendChild(this.getDisplayText(nodeData.name));
    }

    _createClass(TreeNode, [{
        key: 'getDisplayText',
        value: function getDisplayText(name) {
            return this.get('span', [], name, null);
        }
    }, {
        key: 'getIcon',
        value: function getIcon(nodeData) {
            var _this = this;

            this.icon = this.get('i', []);

            var classlist = this.getIconClass(nodeData);

            classlist.forEach(function (cls) {
                _this.icon.classList.add(cls);
            }, this);

            return this.icon;
        }
    }, {
        key: 'getIconClass',
        value: function getIconClass(nodeData) {

            var classlist;

            if (!nodeData.children || nodeData.children.length < 1) {
                classlist = this.options.icons.noChildren;
            } else {
                classlist = this.options.expandedOnLoad ? this.options.icons.collapseIcon : this.options.icons.expandIcon;
            }

            return classlist;
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
        value: function initIconEvents(nodeData) {
            var _this3 = this;

            this.icon.addEventListener('click', function (e) {

                if (_this3.isEqual('array', _this3.options.icons.noChildren, Array.from(_this3.icon.classList))) return false;

                var isExpanding = _this3.isEqual('array', Array.from(_this3.icon.classList), _this3.options.icons.expandIcon),
                    classList = isExpanding ? _this3.options.icons.collapseIcon : _this3.options.icons.expandIcon,
                    eventFunc = isExpanding ? _this3.options.afterExpand : _this3.options.afterCollapse,
                    classesToString = classList.toString().replace(/,/g, ' ');

                _this3.icon.className = classesToString;

                _this3.element.querySelector('ol').classList[isExpanding ? 'add' : 'remove'](_this3.options.prefix + 'visible');

                if (eventFunc) eventFunc.call(e, _this3);
            }, this);
        }
    }, {
        key: 'ondrag',
        value: function ondrag(e) {
            e.preventDefault();
        }
    }, {
        key: 'ondrop',
        value: function ondrop(e) {
            e.stopPropagation();
            e.preventDefault();

            if (true) {
                this.doDrop(e);
                this.handleNodeCopy(true);
            } else {
                this.handleNodeCopy(false);
            }

            this.removeDragoverClass();
        }
    }, {
        key: 'doDrop',
        value: function doDrop(e) {
            var parentOL = this.element.parentNode;
            var nodeData = JSON.parse(e.dataTransfer.getData('text'));
            var newNode = new TreeNode(nodeData, this.options, this.tree);

            if (nodeData.children && nodeData.children.length > 0) this.addChildNodes(newNode, nodeData.children);

            parentOL.insertBefore(newNode.element, this.element);

            if (this.options.afterMove) this.options.afterMove.call(e, this);
        }
    }, {
        key: 'addChildNodes',
        value: function addChildNodes(newNode, children) {
            var startOL = this.get('ol', ['leaf', 'visible']);
            this.tree.buildHTML.call(this.tree, children, startOL);

            newNode.element.appendChild(startOL);
        }
    }, {
        key: 'removeDragoverClass',
        value: function removeDragoverClass() {
            var _this4 = this;

            Array.from(document.querySelectorAll('.' + this.options.nodeClass)).forEach(function (node) {
                node.classList.remove(_this4.options.dragoverClass);
            }, this);
        }
    }, {
        key: 'toJSON',
        value: function toJSON(dataObj, element) {
            var _this5 = this;

            dataObj.name = element.querySelector('span').innerHTML;
            dataObj.children = [];

            Array.from(element.querySelectorAll('li')).forEach(function (node) {
                if (node.parentNode.parentNode.isSameNode(element)) {
                    dataObj.children.push(_this5.toJSON({}, node));
                }
            }, this);

            return dataObj;
        }
    }, {
        key: 'ondragstart',
        value: function ondragstart(e) {
            e.stopPropagation();
            e.dataTransfer.setData('text', JSON.stringify(this.toJSON({}, this.element)));
            e.target.classList.add(this.options.nodeCopyClass);
        }
    }, {
        key: 'ondragover',
        value: function ondragover(e) {
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'move';
            this.element.classList[e.type === 'dragover' ? 'add' : 'remove'](this.options.dragoverClass);
        }
    }, {
        key: 'handleNodeCopy',
        value: function handleNodeCopy(destroy) {
            if (destroy) {
                document.querySelector('.' + this.options.nodeCopyClass).remove();
            } else {
                document.querySelector('.' + this.options.nodeCopyClass).classList.remove(this.options.nodeCopyClass);
            }
        }
    }, {
        key: 'ondragend',
        value: function ondragend(e) {}
    }]);

    return TreeNode;
})(_domHelperJs2['default']);

exports['default'] = TreeNode;
module.exports = exports['default'];

},{"./dom-helper.js":2}],4:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-10 08:48:58
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _domHelperJs = require('./dom-helper.js');

var _domHelperJs2 = _interopRequireDefault(_domHelperJs);

var _treeNodeJs = require('./tree-node.js');

var _treeNodeJs2 = _interopRequireDefault(_treeNodeJs);

var Tree = (function (_DomHelper) {
    _inherits(Tree, _DomHelper);

    function Tree(selector, data, options) {
        _classCallCheck(this, Tree);

        _get(Object.getPrototypeOf(Tree.prototype), 'constructor', this).call(this);
        this.element = document.querySelector(selector);
        this.data = data;

        this.verify(selector);

        this.defaults = {
            nodeClass: 'es6-tree-node',
            prefix: 'es6-tree-',
            topLevelClass: 'top-level',
            nodeCopyClass: 'es6-tree-node-copy',
            dragoverClass: 'es6-tree-dragover',
            icons: {
                expandIcon: ['fa', 'fa-plus', 'es6-tree-icon'],
                collapseIcon: ['fa', 'fa-minus', 'es6-tree-icon'],
                noChildren: ['fa', 'fa-circle-thin', 'es6-tree-icon']
            },
            draggable: true,
            destroyable: true,
            expandedOnLoad: true,
            afterDestroy: function afterDestroy(node) {},
            afterExpand: function afterExpand(node) {},
            afterCollapse: function afterCollapse(node) {},
            afterMove: function afterMove(node) {}
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
            this.startOL = this.get('ol', ['leaf', 'visible', this.options.topLevelClass], null);
            this.treeFragment.appendChild(this.startOL);
        }
    }, {
        key: 'buildHTML',
        value: function buildHTML(nodes, ol) {
            var Node,
                newOl,
                classList = ['leaf'];

            if (this.options.expandedOnLoad) classList.push('visible');

            nodes.forEach(function (node, i) {
                Node = new _treeNodeJs2['default'](node, this.options, this);
                ol.appendChild(Node.element);

                if (node.children) {
                    newOl = this.get('ol', classList, null);
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
    }]);

    return Tree;
})(_domHelperJs2['default']);

exports['default'] = Tree;
module.exports = exports['default'];

},{"./dom-helper.js":2,"./tree-node.js":3}],5:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:22:43
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-10 09:49:57
*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsTreeJs = require('./components/tree.js');

var _componentsTreeJs2 = _interopRequireDefault(_componentsTreeJs);

var _dataDataJson = require('../../data/data.json');

var _dataDataJson2 = _interopRequireDefault(_dataDataJson);

document.addEventListener('DOMContentLoaded', function () {
    var tree = new _componentsTreeJs2['default']('#tree-mount', _dataDataJson2['default'], {
        expandedOnLoad: true
    });
});

},{"../../data/data.json":1,"./components/tree.js":4}]},{},[5]);
