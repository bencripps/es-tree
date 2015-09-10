/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-10 09:44:13
*/
import DomHelper from './dom-helper.js';

export default class TreeNode extends DomHelper {
    constructor(nodeData, options, tree) {
        super();
        this.element = this.get('li', [], null, null);
        this.name = nodeData.name;
        this.children = nodeData.children || [];
        this.tree = tree;

        this.defaults = {
            dragEvents: [
                {
                    name: 'dragstart',
                    fn: this.ondragstart
                },
                {
                    name: 'ondrag',
                    fn: this.ondrag
                },
                {
                    name: 'dragend',
                    fn: this.ondragend
                },
                {
                    name: 'dragover',
                    fn: this.ondragover
                },
                {
                    name: 'dragleave',
                    fn: this.ondragover
                },
                {
                    name: 'drop',
                    fn: this.ondrop
                }
            ]
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

    getDisplayText(name) {
        return this.get('span', [], name, null);
    }

    getIcon(nodeData) {
        this.icon = this.get('i', []);

        var classlist = this.getIconClass(nodeData);

        classlist.forEach((cls) => { this.icon.classList.add(cls); }, this);

        return this.icon;
    }

    getIconClass(nodeData) {

        var classlist;

        if (!nodeData.children || nodeData.children.length < 1) {
            classlist = this.options.icons.noChildren;
        }

        else {
            classlist = this.options.expandedOnLoad ? this.options.icons.collapseIcon : this.options.icons.expandIcon;
        }

        return classlist;
    }

    initDragEvents() {

        this.element.setAttribute('draggable', true);

        this.options.dragEvents.forEach((eventObj) => {
            this.element.addEventListener(eventObj.name, eventObj.fn.bind(this));
        }, this);
    }

    initIconEvents(nodeData) {

        this.icon.addEventListener('click', (e) => {

            if (this.isEqual('array', this.options.icons.noChildren, Array.from(this.icon.classList))) return false;

            var isExpanding = this.isEqual('array', Array.from(this.icon.classList), this.options.icons.expandIcon),
                classList = isExpanding ? this.options.icons.collapseIcon : this.options.icons.expandIcon,
                eventFunc = isExpanding ? this.options.afterExpand : this.options.afterCollapse,
                classesToString = classList.toString().replace(/,/g, ' ');

            this.icon.className = classesToString;

            this.element.querySelector('ol').classList[isExpanding ? 'add' : 'remove'](this.options.prefix + 'visible');

            if (eventFunc) eventFunc.call(e, this);


        }, this);
    }

    ondrag(e) {
        e.preventDefault();
    }

    ondrop(e) {
        e.stopPropagation();
        e.preventDefault();

        if (true) {
            this.doDrop(e);
            this.handleNodeCopy(true);
        }

        else {
           this.handleNodeCopy(false);
        }

        this.removeDragoverClass();
    }

    doDrop(e) {
        var parentOL = this.element.parentNode;
        var nodeData = JSON.parse(e.dataTransfer.getData('text'));
        var newNode = new TreeNode(nodeData, this.options, this.tree);

        if (nodeData.children && nodeData.children.length > 0) this.addChildNodes(newNode, nodeData.children); 
        
        parentOL.insertBefore(newNode.element, this.element);

        if (this.options.afterMove) this.options.afterMove.call(e, this);
    }

    addChildNodes(newNode, children) {
        var startOL = this.get('ol', ['leaf', 'visible']);
        this.tree.buildHTML.call(this.tree, children, startOL);

        newNode.element.appendChild(startOL);
    }

    removeDragoverClass() {
        Array.from(document.querySelectorAll('.' + this.options.nodeClass)).forEach((node) => { node.classList.remove(this.options.dragoverClass); }, this);
    }

    toJSON(dataObj, element) {

        dataObj.name = element.querySelector('span').innerHTML;
        dataObj.children = [];

        Array.from(element.querySelectorAll('li')).forEach((node) => {
            if (node.parentNode.parentNode.isSameNode(element)) {
                dataObj.children.push(this.toJSON({}, node));
            }
        }, this);

        return dataObj;
    }


    ondragstart(e) {
        e.stopPropagation();
        e.dataTransfer.setData('text', JSON.stringify(this.toJSON({}, this.element)));
        e.target.classList.add(this.options.nodeCopyClass);
    }

    ondragover(e) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        this.element.classList[e.type === 'dragover' ? 'add' : 'remove'](this.options.dragoverClass);
    }

    handleNodeCopy(destroy) {
        if (destroy) {
            document.querySelector('.' + this.options.nodeCopyClass).remove();
        }

        else {
            document.querySelector('.' + this.options.nodeCopyClass).classList.remove(this.options.nodeCopyClass);
        }
    }

    ondragend(e) {
        
    }   
}