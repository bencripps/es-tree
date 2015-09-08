/* 
* @Author: ben_cripps
* @Date:   2015-09-07 18:22:43
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-07 18:36:19
*/

'use strict';

import Tree from './tree.js';
import TreeData from '../../data/data.json';

document.addEventListener('DOMContentLoaded', function() {
    var tree = new Tree('#tree-mount', TreeData, {});
});