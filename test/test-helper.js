/* 
* @Author: ben_cripps
* @Date:   2015-09-13 17:47:24
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 17:48:54
*/

var setup = function(selector) {
    var treemount = document.createElement('div'),
        previousMount = document.querySelector('#' + selector);

    treemount.id = selector;

    if (previousMount) {
        previousMount.remove();
    }

    document.body.appendChild(treemount);
};


export default setup;