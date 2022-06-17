class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

// returns an aray of the values of all the nodes

function getLinkedListArray(node, linkedListArray) {
    if(node.next === null) {
        linkedListArray.push(node.value);
        return linkedListArray;
    }
    linkedListArray.push(node.value);
    return getLinkedListArray(node.next, linkedListArray);
};

// checks if the array is a palindrome

function checkArrayPalindrome(array) {
    if(array.length < 2) {
        return true;
    }
    if(array[0] === array[array.length - 1]) {
        return checkArrayPalindrome(array.slice(1, array.length - 1));
    }
    return false;
}


let a = new Node("a");
let b = new Node("b");
let c = new Node("b");
let d = new Node("a");

a.next = b;
b.next = c;
c.next = d;


console.log(checkArrayPalindrome(getLinkedListArray(a, [])));