/* 
* @Author: ben_cripps
* @Date:   2015-09-13 16:52:15
* @Last Modified by:   ben_cripps
* @Last Modified time: 2015-09-13 17:48:28
*/

import Tree from '../src/js/components/tree.js';
import TreeData from '../demo/data/data.json';
import setup from './test-helper.js';

var selector = 'tree-mount';
var newTree;

beforeEach(() => {
    setup(selector);
    newTree = new Tree('#' + selector, TreeData);
});

describe('ESTREE Component Defaults', () => {

    it('DOM Node should be defined', () => {
        expect(document.querySelector('#' + selector)).toBeDefined();
    });

    it('Should have the options dictionary defined', () => {
        expect(newTree.options).toBeDefined();
    });

    it('Should expose a variety of after event functions', () => {
        expect(newTree.options.afterMove).toBeDefined();
        expect(newTree.options.afterDestroy).toBeDefined();
        expect(newTree.options.afterCollapse).toBeDefined();
        expect(newTree.options.afterExpand).toBeDefined();
    });

});

describe('ESTREE Error Handlings', () => {

    it('Should not throw an error because the DOM node is attached before the class initialization', () => {
        expect(newTree).toBeDefined();
    });

    it('Should throw an error because the DOM node is not attached', () => {
        expect(() => {
            var erroredTree = new Tree('undefined', TreeData);
        }).toThrow(new Error('No document node with undefined selector could be found!'));
    });

    it('Should throw an error because the Tree Data is not defined', () => {
        expect(() => {
            var erroredTree = new Tree('#'+ selector, undefined);
        }).toThrow(new Error('Data must been provided in order to build tree!'));
    });
});

describe('The Rendered Tree', () => {

    it('Should have the correct number of nodes', () => {
        var nodes = newTree.element.querySelectorAll('li');
        expect(nodes.length).toBeDefined();
        expect(nodes.length).toEqual(66);
    });

    it('Should have the correct number of icons', () => {
        var icons = newTree.element.querySelectorAll('li > i');      
        expect(icons.length).toEqual(132);
    });

});