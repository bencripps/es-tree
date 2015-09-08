/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-08 09:11:15
*/

import DomHelper from './dom-helper.js';
import TreeNode from './tree-node.js';

export default class Tree extends DomHelper {

    constructor(selector, data, options) {
        super();
        this.element = document.querySelector(selector);
        this.data = data;

        this.verify(selector);

        this.defaults = {
            nodeClass: 'es6-tree-node',
            prefix: 'es6-tree-',
            topLevelClass:'top-level',
            icons: {
                expandIcon: ['fa', 'fa-plus', 'es6-tree-icon'],
                collapseIcon: ['fa', 'fa-minus', 'es6-tree-icon'],
                noChildren: ['fa', 'fa-circle-thin', 'es6-tree-icon']
            },

            draggable: true,
            destroyable: true,
            expandedOnLoad: true,
            onDestroy: function(node) {},
            onExpand: function(node) {},
            onCollapse: function(node) {},
            onMove: function(node) {}
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
        this.startOL = this.get('ol', ['leaf', 'visible', this.options.topLevelClass]);
        this.treeFragment.appendChild(this.startOL);
    }

    buildHTML(nodes, ol) {
        var Node, newOl;

        nodes.forEach(function(node, i) {

            Node = new TreeNode(node, this.options, i);
            ol.appendChild(Node.element);

            if (node.children) {
                newOl = this.get('ol', ['leaf'], null, {'drop': this.ondrop});
                this.buildHTML(node.children, newOl);
                Node.element.appendChild(newOl);
            }

        }, this);
    }

    createTitle() {
        var title = this.get('div', ['title'], this.data.title);
        this.element.appendChild(title);
    }

    ondrop(e) {
        e.preventDefault();
        e.dataTransfer.getData();
        alert('hi');
    }

}