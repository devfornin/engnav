const dbURI = 'localhost';
const dbUsername = 'test_graphapp';
const dbPassword = 'hunter2';
const dbDbName = 'graph_test';

let sql = require('mysql');
let util = require('util');
let conn = sql.createConnection({
    host: dbURI,
    user: dbUsername,
    password: dbPassword,
    database: dbDbName
});
let sqlQuery = util.promisify(conn.query);

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }
    shortestPath(start, end) {
        console.log("hi, not coded yet");
    }
    printEdges() {
        console.log("Edges:");
        for (let edge of this.edges) {
            console.log("Edge " + edge.id + " starts from " + edge.start + " and ends at " + edge.end + ". ");
        }
    }
    printNodes() {
        console.log("Nodes:");
        for (let node of this.nodes) {
            console.log("Node " + node.id + ", " + node.name + ", on floor " + node.floor + " of block " + node.block + ". ");
        }
    }
    printGraph() {
        this.printEdges();
        this.printNodes();
    }
    addNode(node) {
        this.nodes.push(node);
    }
    addEdge(edge) {
        this.edges.push(edge);
    }
}

class Edge {
    constructor(id, start, end, weight, stairs) {
        this.id = id;
        this.start = start;
        this.end = end;
        this.weight = weight;
        this.stairs = stairs;
    }
    printEdge() {
        console.log("Edge " + this.id + " starts from " + this.start + " and ends at " + this.end + ". ");
    }
}

class Node {
    constructor(id, floor, block, name) {
        this.id = id;
        this.floor = floor;
        this.block = block;
        this.name = name;
    }
    printNode() {
        console.log("Node " + this.id + ", " + this.name + ", on floor " + this.floor + " of block " + this.block + ". ");
    }
}

async function populateGraph() {
    let graph = new Graph();
    result = sqlQuery('SELECT * FROM nodes');
    for(let node of results){
        graph.addNode(node);
    }
    result = await sqlQuery('SELECT * FROM edges');
    for(let edge of results){
        graph.addEdge(edge);
    }
    graph.printGraph();
}

populateGraph();

