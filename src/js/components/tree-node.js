/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 09:42:25
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
            ],
            mouseEvents: [
                {
                    name: 'mouseover',
                    fn: this.showDestroyIcon
                },
                {
                    name: 'mouseout',
                    fn: this.showDestroyIcon
                }
            ]
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

    addDestroyIcon() {
        this.destroyIcon = this.get('i', []);

        this.options.icons.destroyIcon.forEach((cls) => {
            this.destroyIcon.classList.add(cls);
        }, this); 

        this.destroyIcon.addEventListener('click', this.destroy.bind(this));

        this.options.mouseEvents.forEach((eventObj) => {
            this.element.addEventListener(eventObj.name, eventObj.fn.bind(this));
        }, this);

        this.element.appendChild(this.destroyIcon);
    }

    showDestroyIcon(e) {
        e.stopPropagation();
        this.destroyIcon.classList[e.type === 'mouseover' ? 'add' : 'remove'](this.options.icons.showDestroyIconClass);
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

    destroy() {
        var args = this.getNodeDataForCustomFunction(this.element),
            parentLI = this.element.parentNode.parentNode;

        if (this.toJSON({}, parentLI).children.length === 1) {
            this.element.parentNode.remove();
            this.updateIconClasses(parentLI);
        }
        else {
            this.element.remove();
        }

        if (this.options.afterDestroy) this.options.afterDestroy.apply(this, args);
    }

    getIconClass(nodeData, isDestroyIcon) {

        var classlist;

        if (!nodeData.children || nodeData.children.length < 1) {
            classlist = this.options.icons.noChildren;
        }

        else {
            classlist = this.options.expandedOnLoad ? this.options.icons.collapseIcon : this.options.icons.expandIcon;
        }

        if (isDestroyIcon) {
            classlist = this.options.icons.destroyIcon;
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
                eventFunc = isExpanding ? this.options.afterExpand : this.options.afterCollapse;

            this.icon.className = classList.toString().replace(/,/g, ' ');

            this.element.querySelector('ol').classList[isExpanding ? 'add' : 'remove'](this.options.prefix + 'visible');

            if (eventFunc) eventFunc.apply(e, this.getNodeDataForCustomFunction(this.element));

        }, this);
    }

    ondrag(e) {
        e.preventDefault();
    }

    ondrop(e) {
        var parentLI = document.querySelector('.' + this.options.nodeCopyClass).parentNode.parentNode;

        e.stopPropagation();
        e.preventDefault();

        if (true) {
            this.doDrop(e, e.offsetX > this.options.hintWidth);
            this.handleNodeCopy(true);
            this.updateIconClasses(parentLI);
        }

        else {
           this.handleNodeCopy(false);
        }

        this.removeDragoverClass();
    }

    updateIconClasses(parentLI) {
        parentLI.querySelector('i').className = this.getIconClass(this.toJSON({}, parentLI)).join(' ');
    }

    isCurrentNodeExpanded(node) {
        return this.isEqual('array', Array.from(node.querySelector('i').classList), this.options.icons.collapseIcon) || this.isEqual('array', Array.from(node.querySelector('i').classList), this.options.icons.noChildren);
    }

    doDrop(e, isInsert) {
        var nodeData = JSON.parse(e.dataTransfer.getData('text'));
        var isExpanded = this.isCurrentNodeExpanded(document.querySelector('.' + this.options.nodeCopyClass));
        var newNode = new TreeNode(nodeData, this.options, this.tree);
        var insertedParent = this.element.previousSibling || this.element.parentNode.parentNode;
        var actionableNode;

        if (nodeData.children && nodeData.children.length > 0) this.addChildNodes(newNode, nodeData.children, isExpanded); 
        
        if (!isInsert) {
            actionableNode = newNode.element;
            this.element.parentNode.insertBefore(actionableNode, this.element);
        }

        else {
            actionableNode = insertedParent;
            this.addChildNodes({element: actionableNode}, [nodeData]);
            this.updateIconClasses(actionableNode);
        }

        if (!isExpanded && isExpanded !== undefined) this.reupdateIconClass(!isInsert, newNode.element, insertedParent);

        if (this.options.afterMove) {
            this.options.afterMove.apply(e, this.getNodeDataForCustomFunction(actionableNode));
        }
    }

    reupdateIconClass(isNotInsert, newNode, insertedParent) {

        if (isNotInsert) {
            newNode.querySelector('i').className = this.options.icons.expandIcon.join(' ');
        }

        else {
            console.log(insertedParent);
        }

    }

    addChildNodes(newNode, children, isExpanded) {
        var startOL = newNode.element.querySelector('ol') || this.get('ol', ['leaf', (isExpanded || isExpanded === undefined ? 'visible' : null)]);
        this.tree.buildHTML.call(this.tree, children, startOL);

        if (!newNode.element.querySelector('ol')) newNode.element.appendChild(startOL);
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

        var nodeToDestory = document.querySelector('.' + this.options.nodeCopyClass);
        var hasChildren = nodeToDestory.parentNode.querySelectorAll('li').length > 1;

        if (destroy && !hasChildren) {
            nodeToDestory.parentNode.remove();
        }

        else if (destroy) {
            nodeToDestory.remove();
        }

        else {
            nodeToDestory.classList.remove(this.options.nodeCopyClass);
        }
    }

    ondragend(e) {
        
    }   

    getNodeDataForCustomFunction(node) {
        return [
            node,
            this.toJSON({}, node),
        ];
    }
}