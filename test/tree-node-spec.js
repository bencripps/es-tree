/* 
* @Author: ben_cripps
* @Date:   2015-09-13 17:35:11
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 18:00:26
*/

import Tree from '../src/js/components/tree.js';
import TreeNode from '../src/js/components/tree-node.js';
import TreeData from '../demo/data/data.json';
import setup from './test-helper.js';

var selector = 'tree-mount';
var newTree;
var newTreeNode;
var testNodeName = 'Test TreeNode';
var testChildren = [
    {
        name: 'testChild'
    },
    {
        name: 'testChild2',
        children: [
            {
                name: 'testChild2-1'
            }
        ]
    }
];

beforeEach(() => {
    setup(selector);
    newTree = new Tree('#' + selector, TreeData);
    newTreeNode = new TreeNode({name: testNodeName, children: testChildren}, newTree.options, newTree);
});

describe('Tree Node Defaults', () => {

    it('Should have drag events defined', () => {
        expect(newTreeNode.defaults.dragEvents).toBeDefined();
        expect(newTreeNode.defaults.dragEvents.length).toEqual(6);
    });

    it('Should have mouse events defined', () => {
        expect(newTreeNode.defaults.mouseEvents).toBeDefined();
        expect(newTreeNode.defaults.mouseEvents.length).toEqual(2);
    });

});

describe('Tree Node Behaivor', () => {

    it('Should have a collapse icon', () => {
        expect(newTreeNode.element.querySelector('i').classList.contains('fa-minus')).toBe(true);
    });

    it('Should not have two icons', () => {
        expect(newTreeNode.element.querySelectorAll('i').length).toBe(2);
    });

    it('Should have correctly added the node name', () => {
        expect(newTreeNode.element.querySelector('span').innerHTML).toBe(testNodeName);
    });

    it('Should have correct number of children', () => {
        expect(newTreeNode.children.length).toBe(testChildren.length);
    });

});

