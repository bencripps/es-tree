/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:37:18
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 18:58:16
*/

export default class TreeNode {
    constructor(nodeData, index) {
        this.element = document.createElement('li');
        this.element.classList.add('es6-tree-node');
        this.element.innerHTML = nodeData.name;
    }
}