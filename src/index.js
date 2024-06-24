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

// BINARY TREE
function Tree(array) {
  // filter and sorted array
  const sortedArray = [...new Set(array)].sort((a, b) => a - b);

  const root = buildTree(sortedArray, 0, sortedArray.length - 1);
  return {
    root,
    insertNode(value, root = this.root) {
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
console.log(tree1);
