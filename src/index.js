// SINGLE TREE NODE
function NewNode(d) {
  let left = null;
  let right = null;

  return {
    data: d,
    left,
    right,
  };
}

// BINARY SEARCH TREE
function Tree(array) {
  // filter and sort array
  const sortedArray = [...new Set(array)].sort((a, b) => a - b);

  const root = buildTree(sortedArray, 0, sortedArray.length - 1);
  return {
    root,
    insertNode(value, root = this.root) {
      // base case
      if (root === null) {
        root = NewNode(value);
        return root;
      }
      if (value < root.data) {
        root.left = this.insertNode(value, root.left);
      } else if (value > root.data) {
        root.right = this.insertNode(value, root.right);
      }
      return root;
    },
    deleteNode(value, root = this.root) {
      // base case
      if (root === null) return root;
      // Traverse down the tree
      if (value < root.data) {
        root.left = this.deleteNode(value, root.left);
      } else if (value > root.data) {
        root.right = this.deleteNode(value, root.right);
      }

      // Value matches -> delete node and update pointers
      else {
        // #1: root has only one child
        if (root.left === null) {
          // return the child's right so new parent can point to it
          return root.right;
        } else if (root.right === null) {
          // return child's left so new parent can point to it
          return root.left;
        }
        // #2: Node has two children
        else {
          // Replace node with next smallest value
          const smallestVal = function findNextSmallestRightData(root) {
            let min = root.data;
            let newRoot = root;

            // Search for a left node with no left children.
            while (newRoot.left !== null) {
              min = root.left.data;
              newRoot = root.left;
            }

            return min;
          };

          root.data = smallestVal(root.right);

          // Delete the copied node from smallestVal()
          root.right = this.deleteNode(root.data, root.right);
        }
      }

      return root;
    },
    findNode(value, root = this.root) {
      if (root === null || root.data === value) return root;
      if (value < root.data) {
        return this.findNode(value, root.left);
      } else if (value > root.data) {
        return this.findNode(value, root.right);
      }
    },
    levelOrder(arr = [], queue = [], root = this.root) {
      if (root === null) return;

      arr.push(root.data);
      // psuh child nodes to queue
      queue.push(root.left);
      queue.push(root.right);
      // go to next level
      while (queue.length) {
        const level = queue[0];
        queue.shift();
        this.levelOrder(arr, queue, level);
      }
      return arr;
    },
    inOrder(arr = [], root = this.root) {
      // base case
      if (root === null) return;

      if (root.left !== null) {
        this.inOrder(arr, root.left);
      }
      arr.push(root.data);
      if (root.right !== null) {
        this.inOrder(arr, root.right);
      }
      return arr;
    },
    preOrder(arr = [], root = this.root) {
      if (root === null) return;
      arr.push(root.data);
      if (root.left) {
        this.preOrder(arr, root.left);
      }
      if (root.right) {
        this.preOrder(arr, root.right);
      }
      return arr;
    },
    postOrder(arr = [], root = this.root) {
      if (root === null) return;
      if (root.left) {
        this.postOrder(arr, root.left);
      }
      if (root.right) {
        this.postOrder(arr, root.right);
      }
      arr.push(root.data);
      return arr;
    },
    height(root = this.root) {
      if (root === null) return 0;
      let leftHeight = this.height(root.left);
      let rightHeight = this.height(root.right);

      if (leftHeight > rightHeight) {
        return leftHeight + 1;
      } else {
        return rightHeight + 1;
      }
    },
    depth(node, root = this.root, depth = 0) {
      if (root === null || node === null) return;
      if (node === root) return `Depth: ${depth}`;
      if (node.data < root.data) {
        return this.depth(node, root.left, (depth += 1));
      } else {
        return this.depth(node, root.right, (depth += 1));
      }
    },
    isBalanced(root = this.root) {
      const leftHeight = this.height(root.left);
      const rightHeight = this.height(root.right);
      if (leftHeight - rightHeight > 1) {
        return false;
      }
      return true;
    },
  };
}

// BUILDING A BINARY TREE USING A GIVEN ARRAY, FUNCTION RETURNS ROOT NODE
function buildTree(array, start, end) {
  // base case
  if (start > end) return null;
  //   setting root as middle element of array
  const mid = Math.floor((start + end) / 2);
  const node = NewNode(array[mid]);

  //   making left and right subtrees
  node.left = buildTree(array, start, mid - 1);
  node.right = buildTree(array, mid + 1, end);

  return node;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const tree1 = Tree([14, 21, 5, 11, 9, 6, 1, 4]);

// tree1.insertNode(3);
// tree1.deleteNode(6);
// console.log(tree1.deleteNode(14));
// console.log(tree1.findNode(4));
// console.log(tree1.findNode(11));
// console.log(tree1.findNode(21));
console.log(tree1.levelOrder());
console.log(tree1.inOrder());
console.log(tree1.preOrder());
console.log(tree1.postOrder());
console.log(tree1.depth(tree1.findNode(9)));
console.log(tree1.isBalanced());
