/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-08 09:12:21
*/
import DomHelper from './dom-helper.js';

export default class TreeNode extends DomHelper {
    constructor(nodeData, options, index) {
        super();
        this.element = document.createElement('li');

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

        this.initIconEvents();

        if (this.options.draggable) {
            this.initDragEvents();
        }

        this.element.appendChild(this.getDisplayText(nodeData.name));

    }

    getDisplayText(name) {
        this.displayText = document.createElement('span');
        this.displayText.innerHTML = name;
        return this.displayText;
    }

    getIcon(nodeData) {
        this.icon = document.createElement('i');

        var classlist = !nodeData.children || nodeData.children.length < 1 ? this.options.icons.noChildren : this.options.icons.expandIcon;

        classlist.forEach((cls) => {
            this.icon.classList.add(cls);
        }, this);

        return this.icon;
    }

    initDragEvents() {

        this.element.setAttribute('draggable', true);

        this.options.dragEvents.forEach((eventObj) => {
            this.element.addEventListener(eventObj.name, eventObj.fn.bind(this));
        }, this);
    }

    initIconEvents() {
        this.icon.addEventListener('click', (e) => {

            var isExpanding = this.icon.classList.contains(this.options.icons.expandIcon[1]),
                classList = isExpanding ? this.options.icons.collapseIcon : this.options.icons.expandIcon,
                eventFunc = isExpanding ? this.options.onExpand : this.options.onCollapse,
                classesToString = classList.toString().replace(/,/g, ' ');

            this.icon.className = classesToString;

            this.element.querySelector('ol').classList[isExpanding ? 'add' : 'remove'](this.options.prefix + 'visible');

            if (eventFunc) eventFunc.call(e, this);


        }, this);
    }

    ondrag(e) {

    }

    ondrop(e) {
        e.preventDefault();
    }

    ondragstart(e) {
        e.dataTransfer.setData('application/json', JSON.stringify(this));
        // this.element.remove();
    }

    ondragover(e) {
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'move';
        
        this.element.classList[e.type === 'dragover' ? 'add' : 'remove'](this.options.prefix + 'dragover');

    }

    ondragend(e) {
        
    }   
}