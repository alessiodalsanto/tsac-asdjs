/**
 * Created by Alessio on 04/12/2015.
 */

function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}

var array = initialArray();

function esercizio_1(array){
    var count;
    if(array.length != 0)
    {
        if(array[0] == 5070){
            count = 1 + esercizio_1(array.slice(1));
            return count;
        }else{
            count = esercizio_1(array.slice(1));
            return count;
        }
    }else{
        return 0
    }
}

console.log(esercizio_1(array));

function esercizio_2(array){
    var myarray = initialArray();
    var pari = myarray.filter(function(val){return val % 2 === 0})
    var quadrati = pari.map(function(val){return val * val;})
    var somma = quadrati.reduce(function(a, b){return a + b;});
    var ris = Math.sqrt(somma);
    return ris;
}

console.log(esercizio_2());














/*function esercizio_3(){
    var val1;
    var val2;
    var stack;
}*/

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    //this.myarray[this.myarray.length] = e;
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.myarray.length == 0;
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluate(callback) {
    callback(_0xd10d[0]);
}














function es_albero(){
    myarray = initialArray();
    var tree = new BST();
    for(i = 0; i < myarray.length; i++){
        tree.add(myarray[i]);
    }
    return albero;
}

console.log(es_albero());

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        if (currentNode.l == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode);
    } else {
        if (currentNode.r == null)
            currentNode.r = newNode;
        else
            this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function inOrder(tree, callback) {
    if (tree != null) {
        inOrder(tree.l, callback)
        callback(tree.item)
        inOrder(tree.r, callback)
    }
}

function inPreOrder(tree, callback) {
    if (tree != null) {
        callback(tree.item)
        inPreOrder(tree.l, callback)
        inPreOrder(tree.r, callback)
    }
}


function inPostOrder(tree, callback) {
    if (tree != null) {
        inPostOrder(tree.l, callback)
        inPostOrder(tree.r, callback)
        callback(tree.item)
    }
}

function searchTree(node, e) {
    if (node == null) {
        return false;
    }

    if (e == node.item) {
        return true;
    } else {
        if (e < node.item) {
            return searchTree(node.l, e)
        } else if (e > node.item) {
            return searchTree(node.r, e)
        }
    }
}