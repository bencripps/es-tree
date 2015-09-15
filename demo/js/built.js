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
* @Date:   2015-09-14 18:57:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-14 19:01:01
*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcJsComponentsTreeJs = require('../../src/js/components/tree.js');

var _srcJsComponentsTreeJs2 = _interopRequireDefault(_srcJsComponentsTreeJs);

var _dataDataJson = require('../data/data.json');

var _dataDataJson2 = _interopRequireDefault(_dataDataJson);

document.addEventListener('DOMContentLoaded', function () {
    var tree = new _srcJsComponentsTreeJs2['default']('#tree-mount', _dataDataJson2['default'], {
        expandedOnLoad: true
    });
});

},{"../../src/js/components/tree.js":5,"../data/data.json":1}],3:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-08 09:09:32
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 09:06:31
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DomHelper = (function () {
    function DomHelper(selector) {
        _classCallCheck(this, DomHelper);

        this.element = document.querySelector(selector);
    }

    _createClass(DomHelper, [{
        key: 'get',
        value: function get(type, classes, text, events) {
            var _this = this;

            var node = document.createElement(type);

            if (classes) {
                classes.forEach(function (cls) {
                    if (cls) node.classList.add(_this.options.prefix + cls);
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

},{}],4:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 20:04:39
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
            }],
            mouseEvents: [{
                name: 'mouseover',
                fn: this.showDestroyIcon
            }, {
                name: 'mouseout',
                fn: this.showDestroyIcon
            }]
        };

        this.options = Object.assign(this.defaults, options);

        this.element.classList.add(this.options.nodeClass);

        this.element.appendChild(this.getIcon(nodeData));

        if (this.options.draggable) {
            this.initDragEvents();
        }

        this.element.appendChild(this.getDisplayText(nodeData.name));

        if (this.options.destroyable) {
            this.addDestroyIcon();
        }

        this.initIconEvents(nodeData);
    }

    _createClass(TreeNode, [{
        key: 'addDestroyIcon',
        value: function addDestroyIcon() {
            var _this = this;

            this.destroyIcon = this.get('i', []);

            this.options.icons.destroyIcon.forEach(function (cls) {
                _this.destroyIcon.classList.add(cls);
            }, this);

            this.destroyIcon.addEventListener('click', this.destroy.bind(this));

            this.options.mouseEvents.forEach(function (eventObj) {
                _this.element.addEventListener(eventObj.name, eventObj.fn.bind(_this));
            }, this);

            this.element.appendChild(this.destroyIcon);
        }
    }, {
        key: 'showDestroyIcon',
        value: function showDestroyIcon(e) {
            e.stopPropagation();
            this.destroyIcon.classList[e.type === 'mouseover' ? 'add' : 'remove'](this.options.icons.showDestroyIconClass);
        }
    }, {
        key: 'getDisplayText',
        value: function getDisplayText(name) {
            return this.get('span', [], name, null);
        }
    }, {
        key: 'getIcon',
        value: function getIcon(nodeData) {
            var _this2 = this;

            this.icon = this.get('i', []);

            var classlist = this.getIconClass(nodeData);

            classlist.forEach(function (cls) {
                _this2.icon.classList.add(cls);
            }, this);

            return this.icon;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var args = this.getNodeDataForCustomFunction(this.element),
                parentLI = this.element.parentNode.parentNode;

            if (this.toJSON({}, parentLI).children.length === 1) {
                this.element.parentNode.remove();
                this.updateIconClasses(parentLI);
            } else {
                this.element.remove();
            }

            if (this.options.afterDestroy) this.options.afterDestroy.apply(this, args);
        }
    }, {
        key: 'getIconClass',
        value: function getIconClass(nodeData, isDestroyIcon) {

            var classlist;

            if (!nodeData.children || nodeData.children.length < 1) {
                classlist = this.options.icons.noChildren;
            } else {
                classlist = this.options.expandedOnLoad ? this.options.icons.collapseIcon : this.options.icons.expandIcon;
            }

            if (isDestroyIcon) {
                classlist = this.options.icons.destroyIcon;
            }

            return classlist;
        }
    }, {
        key: 'initDragEvents',
        value: function initDragEvents() {
            var _this3 = this;

            this.element.setAttribute('draggable', true);

            this.options.dragEvents.forEach(function (eventObj) {
                _this3.element.addEventListener(eventObj.name, eventObj.fn.bind(_this3));
            }, this);
        }
    }, {
        key: 'initIconEvents',
        value: function initIconEvents(nodeData) {
            var _this4 = this;

            this.icon.addEventListener('click', function (e) {

                if (_this4.isEqual('array', _this4.options.icons.noChildren, Array.from(_this4.icon.classList))) return false;

                var isExpanding = _this4.isEqual('array', Array.from(_this4.icon.classList), _this4.options.icons.expandIcon),
                    classList = isExpanding ? _this4.options.icons.collapseIcon : _this4.options.icons.expandIcon,
                    eventFunc = isExpanding ? _this4.options.afterExpand : _this4.options.afterCollapse;

                _this4.icon.className = classList.toString().replace(/,/g, ' ');

                _this4.element.querySelector('ol').classList[isExpanding ? 'add' : 'remove'](_this4.options.prefix + 'visible');

                if (eventFunc) eventFunc.apply(e, _this4.getNodeDataForCustomFunction(_this4.element));
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
            var parentLI = document.querySelector('.' + this.options.nodeCopyClass).parentNode.parentNode;

            e.stopPropagation();
            e.preventDefault();

            if (true) {
                this.doDrop(e, e.offsetX > this.options.hintWidth);
                this.handleNodeCopy(true);
                this.updateIconClasses(parentLI);
            } else {
                this.handleNodeCopy(false);
            }

            this.removeDragoverClass();
        }
    }, {
        key: 'updateIconClasses',
        value: function updateIconClasses(parentLI) {
            parentLI.querySelector('i').className = this.getIconClass(this.toJSON({}, parentLI)).join(' ');
        }
    }, {
        key: 'isCurrentNodeExpanded',
        value: function isCurrentNodeExpanded(node) {
            return this.isEqual('array', Array.from(node.querySelector('i').classList), this.options.icons.collapseIcon) || this.isEqual('array', Array.from(node.querySelector('i').classList), this.options.icons.noChildren);
        }
    }, {
        key: 'doDrop',
        value: function doDrop(e, isInsert) {
            var nodeData = JSON.parse(e.dataTransfer.getData('text'));
            var isExpanded = this.isCurrentNodeExpanded(document.querySelector('.' + this.options.nodeCopyClass));
            var newNode = new TreeNode(nodeData, this.options, this.tree);
            var insertedParent = this.element.previousSibling || this.element.parentNode.parentNode;
            var actionableNode;

            if (nodeData.children && nodeData.children.length > 0) this.addChildNodes(newNode, nodeData.children, isExpanded);

            if (!isInsert) {
                actionableNode = newNode.element;
                this.element.parentNode.insertBefore(actionableNode, this.element);
            } else {
                actionableNode = insertedParent;
                this.addChildNodes({ element: actionableNode }, [nodeData]);
                this.updateIconClasses(actionableNode);
            }

            if (!isExpanded && isExpanded !== undefined) this.reupdateIconClass(!isInsert, newNode.element, insertedParent);

            if (this.options.afterMove) {
                this.options.afterMove.apply(e, this.getNodeDataForCustomFunction(actionableNode));
            }
        }
    }, {
        key: 'reupdateIconClass',
        value: function reupdateIconClass(isNotInsert, newNode, insertedParent) {

            if (isNotInsert) {
                newNode.querySelector('i').className = this.options.icons.expandIcon.join(' ');
            } else {
                // do nothing -- we want to expand nodes if theyre being inserted
            }
        }
    }, {
        key: 'addChildNodes',
        value: function addChildNodes(newNode, children, isExpanded) {
            var startOL = newNode.element.querySelector('ol') || this.get('ol', ['leaf', isExpanded || isExpanded === undefined ? 'visible' : null]);
            this.tree.buildHTML.call(this.tree, children, startOL);

            if (!newNode.element.querySelector('ol')) newNode.element.appendChild(startOL);
        }
    }, {
        key: 'removeDragoverClass',
        value: function removeDragoverClass() {
            var _this5 = this;

            Array.from(document.querySelectorAll('.' + this.options.nodeClass)).forEach(function (node) {
                node.classList.remove(_this5.options.dragoverClass);
            }, this);
        }
    }, {
        key: 'toJSON',
        value: function toJSON(dataObj, element) {
            var _this6 = this;

            dataObj.name = element.querySelector('span').innerHTML;
            dataObj.children = [];

            Array.from(element.querySelectorAll('li')).forEach(function (node) {
                if (node.parentNode.parentNode.isSameNode(element)) {
                    dataObj.children.push(_this6.toJSON({}, node));
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

            var nodeToDestory = document.querySelector('.' + this.options.nodeCopyClass);
            var hasChildren = nodeToDestory.parentNode.querySelectorAll('li').length > 1;

            if (destroy && !hasChildren) {
                nodeToDestory.parentNode.remove();
            } else if (destroy) {
                nodeToDestory.remove();
            } else {
                nodeToDestory.classList.remove(this.options.nodeCopyClass);
            }
        }
    }, {
        key: 'ondragend',
        value: function ondragend(e) {}
    }, {
        key: 'getNodeDataForCustomFunction',
        value: function getNodeDataForCustomFunction(node) {
            return [node, this.toJSON({}, node)];
        }
    }]);

    return TreeNode;
})(_domHelperJs2['default']);

exports['default'] = TreeNode;
module.exports = exports['default'];

},{"./dom-helper.js":3}],5:[function(require,module,exports){
/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 18:40:50
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

var PREFIX = 'es-tree-';
var NODE_CLASS = PREFIX + 'node';
var NODE_COPY_CLASS = PREFIX + 'node-copy';
var DRAG_OVER_CLASS = PREFIX + 'dragover';
var TOP_LEVEL_CLASS = 'top-level';
var HINT_WIDTH = 60;
var EXPANDED_ICON_CLASSLIST = ['fa', 'fa-plus', PREFIX + 'icon'];
var COLLAPED_ICON_CLASSLIST = ['fa', 'fa-minus', PREFIX + 'icon'];
var NO_CHILDREN_ICON_CLASSLIST = ['fa', 'fa-circle-thin', PREFIX + 'icon'];
var DESTROYABLE_ICON_CLASSLIST = ['fa', 'fa-remove', PREFIX + 'icon', PREFIX + 'remove'];
var SHOW_DESTROY_ICON_CLASS = PREFIX + 'show';
var AFTER_DESTROY = function AFTER_DESTROY(element, nodeData) {};
var AFTER_EXPAND = function AFTER_EXPAND(element, nodeData) {};
var AFTER_COLLAPSE = function AFTER_COLLAPSE(element, nodeData) {};
var AFTER_MOVE = function AFTER_MOVE(element, nodeData) {};
var IS_DRAGGABLE = true;
var IS_DESTROYABLE = true;
var EXPANDED_ON_LOAD = true;

var Tree = (function (_DomHelper) {
    _inherits(Tree, _DomHelper);

    function Tree(selector, data, options) {
        _classCallCheck(this, Tree);

        _get(Object.getPrototypeOf(Tree.prototype), 'constructor', this).call(this, selector);
        this.data = data;

        this.verify(selector);

        this.defaults = {
            nodeClass: NODE_CLASS,
            prefix: PREFIX,
            topLevelClass: TOP_LEVEL_CLASS,
            nodeCopyClass: NODE_COPY_CLASS,
            dragoverClass: DRAG_OVER_CLASS,
            hintWidth: HINT_WIDTH,
            icons: {
                expandIcon: EXPANDED_ICON_CLASSLIST,
                collapseIcon: COLLAPED_ICON_CLASSLIST,
                noChildren: NO_CHILDREN_ICON_CLASSLIST,
                destroyIcon: DESTROYABLE_ICON_CLASSLIST,
                showDestroyIconClass: SHOW_DESTROY_ICON_CLASS
            },
            draggable: IS_DRAGGABLE,
            destroyable: IS_DESTROYABLE,
            expandedOnLoad: EXPANDED_ON_LOAD,
            afterDestroy: AFTER_DESTROY,
            afterExpand: AFTER_EXPAND,
            afterCollapse: AFTER_COLLAPSE,
            afterMove: AFTER_MOVE
        };

        this.options = Object.assign(this.defaults, options);
        this.init();
    }

    _createClass(Tree, [{
        key: 'verify',
        value: function verify(selector) {
            if (!this.element) throw Error('No document node with ' + selector + ' selector could be found!');

            if (!this.data) throw Error('Data must been provided in order to build tree!');
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
            var _this = this;

            var Node,
                newOl,
                classList = ['leaf'];

            if (this.options.expandedOnLoad) classList.push('visible');

            nodes.forEach(function (node, i) {
                Node = new _treeNodeJs2['default'](node, _this.options, _this);
                ol.appendChild(Node.element);

                if (node.children && node.children.length > 0) {
                    newOl = _this.get('ol', classList, null);
                    _this.buildHTML(node.children, newOl);
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

},{"./dom-helper.js":3,"./tree-node.js":4}]},{},[2]);
