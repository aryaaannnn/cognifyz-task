// Button color change
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    const currentColor = this.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    this.style.backgroundColor = newColor;
});

//greeting message
function showGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Hey!! Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    
    alert(greeting);
}

// Basic calculator addition
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    
    document.getElementById('result').textContent = "Result: " + result;
}
