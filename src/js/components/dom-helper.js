/* 
* @Author: ben_cripps
* @Date:   2015-09-08 09:09:32
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-08 09:10:10
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
}