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
  return root;
}

// BUILDING A BINARY TREE USING A GIVEN ARRAY, FUNCTION RETURNS ROOT NODE
function buildTree(array, start, end) {
  // base case
  if (start > end) return null;
  //   setting root as middle element of array
  let mid = Math.round((start + end) / 2);
  let node = NewNode(array[mid]);

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
