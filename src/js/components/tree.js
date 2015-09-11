/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-11 13:54:40
*/

import DomHelper from './dom-helper.js';
import TreeNode from './tree-node.js';

const PREFIX = 'es6-tree';
const NODE_CLASS = PREFIX + '-node';
const NODE_COPY_CLASS = PREFIX + '-node-copy';
const DRAG_OVER_CLASS = PREFIX + '-dragover';
const TOP_LEVEL_CLASS = 'top-level';

export default class Tree extends DomHelper {

    constructor(selector, data, options) {
        super();
        this.element = document.querySelector(selector);
        this.data = data;

        this.verify(selector);

        this.defaults = {
            nodeClass: NODE_CLASS,
            prefix: PREFIX,
            topLevelClass: TOP_LEVEL_CLASS,
            nodeCopyClass: NODE_COPY_CLASS,
            dragoverClass: DRAG_OVER_CLASS,
            icons: {
                expandIcon: ['fa', 'fa-plus', 'es6-tree-icon'],
                collapseIcon: ['fa', 'fa-minus', 'es6-tree-icon'],
                noChildren: ['fa', 'fa-circle-thin', 'es6-tree-icon']
            },
            draggable: true,
            destroyable: true,
            expandedOnLoad: true,
            afterDestroy: function(node) {},
            afterExpand: function(node) {},
            afterCollapse: function(node) {},
            afterMove: function(node) {}
        };

        this.options = Object.assign(this.defaults, options);
        this.init();
    }

    verify(selector) {
        if (!this.element) throw Error(`No document node with ${selector} selector could be found!`);

        if (!this.data) throw Error('Data must been provided in order to build tree');
    }

    init() {
        this.createTitle();
        this.setup();
        this.buildHTML(this.data.nodes, this.startOL);

        this.element.appendChild(this.treeFragment);
    }

    setup() {
        this.treeFragment = document.createDocumentFragment();
        this.startOL = this.get('ol', ['leaf', 'visible', this.options.topLevelClass], null);
        this.treeFragment.appendChild(this.startOL);
    }

    buildHTML(nodes, ol) {
        var Node, newOl, classList = ['leaf'];

        if (this.options.expandedOnLoad) classList.push('visible');

        nodes.forEach(function(node, i) {
            Node = new TreeNode(node, this.options, this);
            ol.appendChild(Node.element);

            if (node.children && node.children.length > 0) {
                newOl = this.get('ol', classList, null);
                this.buildHTML(node.children, newOl);
                Node.element.appendChild(newOl);
            }

        }, this);
    }

    createTitle() {
        var title = this.get('div', ['title'], this.data.title);
        this.element.appendChild(title);
    }
}