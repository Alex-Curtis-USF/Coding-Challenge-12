// Task 2

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let startX, startY;

// Event Listeners to see what is being done.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Function to start drawing.
function startDrawing(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
}

function draw(e) {
    if (!isDrawing) return;
    // Task 3
    // This is to have the drawing logic.
    const tool = document.querySelector('input[name="tool"]:checked').value;
    
    // To clear the canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // This is where the drawing logic with shapes begin
    ctx.beginPath();
    switch (tool) {
        case 'line':
            ctx.moveTo(startX, startY);
            ctx.lineTo(e.offsetX, e.offsetY);
            break;
            
        case 'rectangle':
            const width = e.offsetX - startX;
            const height = e.offsetY - startY;
            ctx.rect(startX, startY, width, height);
            break;
            
        case 'circle':
            const radius = Math.sqrt(
                (e.offsetX - startX) ** 2 + 
                (e.offsetY - startY) ** 2
            );
            ctx.arc(startX, startY, radius, 0, Math.PI * 2);
            break;
    }
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

// Actions in order to create shapes.
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);