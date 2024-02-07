class Topic {
    constructor(name, numberOfConnections, originConnection) {
        this.name = name;
        this.numberOfConnections = numberOfConnections;
        this.originConnection = originConnection;
    }

    // Method to display the connection details
    displayDetails() {
        return `Name: ${this.name}, Number of Connections: ${this.numberOfConnections}, Origin Connection: ${this.originConnection}`;
    }
}

class Project extends Topic {
    constructor(name, originConnection) {
        super(name, 0, originConnection);
    }

    // Method to display the project details
    displayDetails() {
        return `Project Name: ${this.name}, Number of Connections: ${this.numberOfConnections}, Parent Connection: ${this.originConnection}`;
    }
}


// Create an SVG element
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '400');
svg.setAttribute('height', '400');

// Create a line element
const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('x1', '50');
line.setAttribute('y1', '50');
line.setAttribute('x2', '350');
line.setAttribute('y2', '350');
line.setAttribute('stroke', 'black');

// Add the line to the SVG
svg.appendChild(line);

// Add the SVG to the body of the document
document.body.appendChild(svg);




export function returnDetails(topic) {
    return topic.displayDetails();
}

let connection1 = new Topic('Connection1', 5, 'Origin1');
console.log(connection1.displayDetails());
