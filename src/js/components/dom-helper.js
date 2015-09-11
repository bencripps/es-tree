/* 
* @Author: ben_cripps
* @Date:   2015-09-08 09:09:32
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-11 13:18:48
*/

export default class DomHelper {
    constructor() {

    }

    get(type, classes, text, events) {
        var node = document.createElement(type);

        if (classes) {
            classes.forEach((cls) => {
                node.classList.add(this.options.prefix + cls);
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

    destroy(selector) {
        if (selector) selector.remove();
    }

    isEqual(type, obj1, obj2) {

        if (type === 'array') {
            if (obj1.join(',') === obj2.join(',')) {
                return true;
            }
        }

        return false;

    }

    ondrop(e) {
        e.preventDefault();
    }

    ondragover(e) {
        e.preventDefault();
    }
}