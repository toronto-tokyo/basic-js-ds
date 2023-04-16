const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class treeNode {
  constructor(x){
    this.data = x,
    this.left = null,
    this.right = null
  }
}

class BinarySearchTree {

  constructor(){
    this.base = null
  }

  root() {
    return this.base
  }

  add(value) {
    this.base = addValue(this.base, value)

    function addValue (node, value){
      if(!node){
        return new treeNode(value)
      }

      if(node.data == value){
        return node
      }

      if(value < node.data){
        node.left = addValue(node.left, value)
      } else {
        node.right = addValue(node.right, value)
      }

      return node
    }
  }

  has(value) {
    return hasValue(this.base, value)

    function hasValue(node, value){
      if(!node) return false
      if(node.data == value) return true

      if(value < node.data){
        return hasValue(node.left, value)
      } else {
        return hasValue(node.right, value)
      }
    }
  }

  find(value) {

    return findNode(this.base, value)

    function findNode(node, value){
      if(!node) return null
      if(node.data == value) return node
      if(value < node.data){
        return findNode(node.left, value)
      } else {
        return findNode(node.right, value)
      }
    }
  }

  remove(value) {
    this.base = removeElement(this.base, value)

    function removeElement(node, value){
      if(!node){
        return null
      }

      if(value == node.data){
        if(node.left == null && node.right == null) return null
        if(node.left == null) return node.right
        if(node.right == null) return node.left
        
        let minValueFromRightTree = node.right
        while(minValueFromRightTree.left){
          minValueFromRightTree = minValueFromRightTree.left
        }
        node.data = minValueFromRightTree.data

        node.right = removeElement(node.right, minValueFromRightTree.data)
      }

      if(value < node.data){
        node.left = removeElement(node.left, value)
      } else {
        node.right = removeElement(node.right, value)
      }
      
      return node
      }
    }
    
  min() {
    return findMinValue(this.base)

    function findMinValue(node){
      if(!node.left) return node.data
      return findMinValue(node.left)
    }
  }

  max() {
    return findMaxValue(this.base)

    function findMaxValue(node){
      if(!node.right) return node.data
      else return findMaxValue(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};