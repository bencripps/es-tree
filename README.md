# ES-TREE

## A JS2015 (ES6) Compliant Tree Component

### Installation
    npm install es-tree

#### ES6/JS2015
    import Tree from './src/js/components/tree.js';

#### In a Browser
    <link rel='stylesheet' type='text/css' href='dist/css/estree.css'>
    <script src='path/to/your/built/tree.js'>

#### Sample Tree Initialization
    import Tree from 'path/to/your/built/tree.js';
    
    document.on('DOMContentLoaded', function() {
        var tree = new Tree(
                '#treeMount', // DOM selector
                TreeData, // JSON object containing tree hierarchy
                options // JSON object with tree options
            ); 
    });

#### Test
    npm run test

### Options 
    IS_DRAGGABLE: (boolean) // will determine if tree nodes can be dragged/moved
    IS_DESTROYABLE: (boolean) // will determine if nodes can be destroyed 
    EXPANDED_ON_LOAD: (boolean) // will tree be expanded on initial load
    HINT_WIDTH = 60; (number) // will determine how many pixels are required to imply an insert instead of an append, on drop

### Events

There are a few event callbacks that can be defined. The incoming arguments for each callback is the DOM node, and a JSON object describing the affected node.

    AFTER_DESTROY: (function), arguments: (element, nodeData)
    AFTER_EXPAND: (function), arguments: (element, nodeData)
    AFTER_COLLAPSE: (function), arguments: (element, nodeData)
    AFTER_MOVE: (function), arguments: (element, nodeData)

### Variable Class Names

 The es-tree component has predefined class names for trees, tree-nodes, and tree-icons. However, these can be modified and the tree will function as expected. (The base SCSS/CSS will need to be updated if the variable class names are changed). The variable class name defaults are:

    PREFIX = 'es-tree-'; 
    NODE_CLASS = PREFIX + 'node';
    NODE_COPY_CLASS = PREFIX + 'node-copy';
    DRAG_OVER_CLASS = PREFIX + 'dragover';
    TOP_LEVEL_CLASS = 'top-level';
    EXPANDED_ICON_CLASSLIST = ['fa', 'fa-plus', PREFIX + 'icon'];
    COLLAPED_ICON_CLASSLIST = ['fa', 'fa-minus', PREFIX + 'icon'];
    NO_CHILDREN_ICON_CLASSLIST = ['fa', 'fa-circle-thin', PREFIX + 'icon'];
    DESTROYABLE_ICON_CLASSLIST = ['fa', 'fa-remove', PREFIX + 'icon', PREFIX + 'remove'];
    SHOW_DESTROY_ICON_CLASS = PREFIX + 'show';

### Questions/Issues

For more examples, please clone the repo and checkout the /demo folder. For issues/suggestions please contact me @ [ben@benjamincripps.com](ben@benjamincripps.com).
 
