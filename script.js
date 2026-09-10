document.getElementById('coffeeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const ratio = parseFloat(document.getElementById('ratio').value);
    const amountWanted = parseFloat(document.getElementById('amountWanted').value);
    const isIced = document.getElementById('iced').checked;
    
    // Validate inputs
    if (ratio <= 2) {
        alert('Ratio must be greater than 2 for the calculation to work!');
        return;
    }
    
    // Calculate beans and water needed (matching the Python logic)
    const beansNeeded = amountWanted / (ratio - 2);
    const waterNeeded = amountWanted + (beansNeeded * 2);
    const iceNeeded = waterNeeded * 0.38;
    const hotWaterNeeded = waterNeeded * 0.62;
    
    // Round to 2 decimal places
    const beansRounded = beansNeeded.toFixed(2);
    const waterRounded = waterNeeded.toFixed(2);
    
    // Display results
    document.getElementById('beansResult').textContent = beansRounded + 'g';
    document.getElementById('waterResult').textContent = waterRounded + 'ml';

    const iceResultCard = document.getElementById('iceResultCard');
    const hotWaterResultCard = document.getElementById('hotWaterResultCard');
    if (isIced) {
        const iceRounded = iceNeeded.toFixed(2);
        const hotWaterRounded = hotWaterNeeded.toFixed(2);
        document.getElementById('iceResult').textContent = iceRounded + 'ml';
        document.getElementById('hotWaterResult').textContent = hotWaterRounded + 'ml';
        iceResultCard.classList.remove('d-none');
        hotWaterResultCard.classList.remove('d-none');
        document.getElementById('summaryResult').textContent =
            `For ${amountWanted}ml iced coffee you need ${beansRounded}g of beans, ${iceRounded}ml of ice, and ${hotWaterRounded}ml of hot water`;
    } else {
        iceResultCard.classList.add('d-none');
        hotWaterResultCard.classList.add('d-none');
        document.getElementById('summaryResult').textContent =
            `For ${amountWanted}ml coffee you need ${beansRounded}g of beans and ${waterRounded}ml of water`;
    }
    
    // Show results section
    document.getElementById('results').classList.remove('d-none');
    
    // Scroll to results smoothly
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
