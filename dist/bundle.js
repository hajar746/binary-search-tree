/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// SINGLE TREE NODE\nfunction NewNode(d) {\n  let left = null;\n  let right = null;\n  return {\n    data: d,\n    left,\n    right\n  };\n}\n\n// BINARY TREE\nfunction Tree(array) {\n  // filter and sorted array\n  const sortedArray = [...new Set(array)].sort((a, b) => a - b);\n  const root = buildTree(sortedArray, 0, sortedArray.length - 1);\n  return {\n    root,\n    insertNode(value) {\n      let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n      if (root === null) {\n        root = NewNode(value);\n        return root;\n      }\n      if (value < root.data) {\n        root.left = this.insertNode(value, root.left);\n      } else if (value > root.data) {\n        root.right = this.insertNode(value, root.right);\n      }\n      return root;\n    },\n    deleteNode(value) {\n      let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n      // base case\n      if (root === null) return root;\n      // Traverse down the tree\n      if (value < root.data) {\n        root.left = this.deleteNode(value, root.left);\n      } else if (value > root.data) {\n        root.right = this.deleteNode(value, root.right);\n      }\n\n      // Value matches -> delete node and update pointers\n      else {\n        // #1: root has only one child\n        if (root.left === null) {\n          // return the child's right so new parent can point to it\n          return root.right;\n        } else if (root.right === null) {\n          // return child's left so new parent can point to it\n          return root.left;\n        }\n        // #2: Node has two children\n        else {\n          // Replace node with next smallest value\n          const smallestVal = function findNextSmallestRightData(root) {\n            let min = root.data;\n            let newRoot = root;\n\n            // Search for a left node with no left children.\n            while (newRoot.left !== null) {\n              min = root.left.data;\n              newRoot = root.left;\n            }\n            return min;\n          };\n          root.data = smallestVal(root.right);\n\n          // Delete the copied node from smallestVal()\n          root.right = this.deleteNode(root.data, root.right);\n        }\n      }\n      return root;\n    },\n    findNode(value) {\n      let root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;\n      if (root === null || root.data === value) return root;\n      if (value < root.data) {\n        return this.findNode(value, root.left);\n      } else if (value > root.data) {\n        return this.findNode(value, root.right);\n      }\n    }\n  };\n}\n\n// BUILDING A BINARY TREE USING A GIVEN ARRAY, FUNCTION RETURNS ROOT NODE\nfunction buildTree(array, start, end) {\n  // base case\n  if (start > end) return null;\n  //   setting root as middle element of array\n  const mid = Math.floor((start + end) / 2);\n  const node = NewNode(array[mid]);\n\n  //   making left and right subtrees\n  node.left = buildTree(array, start, mid - 1);\n  node.right = buildTree(array, mid + 1, end);\n  return node;\n}\nconst prettyPrint = function (node) {\n  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  let isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\nconst tree1 = Tree([14, 21, 5, 11, 9, 6, 1, 4]);\n\n// tree1.insertNode(3);\n// tree1.deleteNode(6);\n// console.log(tree1.deleteNode(14));\n// console.log(tree1.findNode(4));\n// console.log(tree1.findNode(11));\n// console.log(tree1.findNode(21));\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;