const { BinaryTree, BinaryTreeNode } = require('./binary-tree');

const rootNode = new BinaryTreeNode(1);
rootNode.left = new BinaryTreeNode(2);
rootNode.right = new BinaryTreeNode(3);
rootNode.left.left = new BinaryTreeNode(4);
rootNode.left.right = new BinaryTreeNode(5);

const binaryTree = new BinaryTree(rootNode);

// Test methods
console.log('Minimum depth:', binaryTree.minDepth()); // Output: 2
console.log('Maximum depth:', binaryTree.maxDepth()); // Output: 3
console.log('Maximum sum:', binaryTree.maxSum()); // Output: 15
console.log('Next larger element after 2:', binaryTree.nextLarger(2)); // Output: 3
