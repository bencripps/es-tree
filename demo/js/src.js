/* 
* @Author: ben_cripps
* @Date:   2015-09-14 18:57:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-14 19:01:01
*/

import Tree from '../../src/js/components/tree.js';
import TreeData from '../data/data.json';

document.addEventListener('DOMContentLoaded', function () {
    var tree = new Tree('#tree-mount', TreeData, {
        expandedOnLoad: true
    });
});