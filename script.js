document.getElementById('coffeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const ratio = parseFloat(document.getElementById('ratio').value);
    const amountWanted = parseFloat(document.getElementById('amountWanted').value);
    
    // Validate inputs
    if (ratio <= 2) {
        alert('Ratio must be greater than 2 for the calculation to work!');
        return;
    }
    
    // Calculate beans and water needed (matching the Python logic)
    const beansNeeded = amountWanted / (ratio - 2);
    const waterNeeded = amountWanted + (beansNeeded * 2);
    
    // Round to 2 decimal places
    const beansRounded = beansNeeded.toFixed(2);
    const waterRounded = waterNeeded.toFixed(2);
    
    // Display results
    document.getElementById('beansResult').textContent = beansRounded + 'g';
    document.getElementById('waterResult').textContent = waterRounded + 'ml';
    document.getElementById('summaryResult').textContent = 
        `For ${amountWanted}ml coffee you need ${beansRounded}g of beans and ${waterRounded}ml of water`;
    
    // Show results section
    document.getElementById('results').classList.remove('d-none');
    
    // Scroll to results smoothly
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

