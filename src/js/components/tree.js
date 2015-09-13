/* 
* @Author: ben_cripps
* @Date:   2015-09-07 17:49:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 17:27:05
*/

import DomHelper from './dom-helper.js';
import TreeNode from './tree-node.js';

const PREFIX = 'es-tree-';
const NODE_CLASS = PREFIX + 'node';
const NODE_COPY_CLASS = PREFIX + 'node-copy';
const DRAG_OVER_CLASS = PREFIX + 'dragover';
const TOP_LEVEL_CLASS = 'top-level';
const HINT_WIDTH = 60;
const EXPANDED_ICON_CLASSLIST = ['fa', 'fa-plus', PREFIX + 'icon'];
const COLLAPED_ICON_CLASSLIST = ['fa', 'fa-minus', PREFIX + 'icon'];
const NO_CHILDREN_ICON_CLASSLIST = ['fa', 'fa-circle-thin', PREFIX + 'icon'];
const DESTROYABLE_ICON_CLASSLIST = ['fa', 'fa-remove', PREFIX + 'icon', PREFIX + 'remove'];
const SHOW_DESTROY_ICON_CLASS = PREFIX + 'show';

export default class Tree extends DomHelper {

    constructor(selector, data, options) {
        super(selector);
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
            draggable: true,
            destroyable: true,
            expandedOnLoad: true,
            afterDestroy: function(element, nodeData) {},
            afterExpand: function(element, nodeData) {},
            afterCollapse: function(element, nodeData) {},
            afterMove: function(element, nodeData) {}
        };

        this.options = Object.assign(this.defaults, options);
        this.init();
    }

    verify(selector) {
        if (!this.element) throw Error(`No document node with ${selector} selector could be found!`);

        if (!this.data) throw Error('Data must been provided in order to build tree!');
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

        nodes.forEach((node, i) => {
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