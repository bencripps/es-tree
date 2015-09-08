/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 19:08:05
*/

import TreeNode from './components/tree-node.js';

export default class Tree {

    constructor(selector, data, options) {
        this.element = document.querySelector(selector);
        this.data = data;
        this.prefix = 'es6-tree-';

        this.verify();

        this.defaults = {
            nodeClass: 'es6-tree-node',
            draggable: true,
            destroyable: true,
            onDestroy: function() {},
            onMove: function() {}
        };

        this.options = Object.assign(this.defaults, options);

        this.init();
    }

    verify() {
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
        this.startOL = this.get('ol', ['leaf']);
        this.treeFragment.appendChild(this.startOL);
    }

    buildHTML(nodes, ol) {
        var Node, newOl;

        nodes.forEach(function(node, i) {

            Node = new TreeNode(node, i);
            ol.appendChild(Node.element);

            if (node.children) {
                newOl = this.get('ol', ['leaf']);
                this.buildHTML(node.children, newOl);
                Node.element.appendChild(newOl);
            }

        }, this);
    }

    createTitle() {
        var title = this.get('div', ['title'], this.data.title);
        this.element.appendChild(title);
    }

    get(type, classes, text) {
        var node = document.createElement(type);

        if (classes) {
            classes.forEach((cls) => {
                node.classList.add(this.prefix + cls);
            }, this);
        }

        if (text) {
            node.innerHTML = text;
        }

        return node;
    }   

}