document.addEventListener('DOMContentLoaded', function() {
    function Bansuri(totalLength) {
        const blowingHole = `The blowing hole value is: ${Number(((12.5 / 100) * totalLength).toFixed(3))} cm`;
        const tuningHole = `The tuning hole value is: ${Number(((90.978 / 100) * totalLength).toFixed(3))} cm`;
        const firstHole = `The 1st hole value is: ${Number(((47.9 / 100) * totalLength).toFixed(3))} cm`;
        const secondHole = `The 2nd hole value is: ${Number(((53.36 / 100) * totalLength).toFixed(3))} cm`;
        const thirdHole = `The 3rd hole value is: ${Number(((59.5 / 100) * totalLength).toFixed(3))} cm`;
        const fourthHole = `The 4th hole value is: ${Number(((67.5 / 100) * totalLength).toFixed(3))} cm`;
        const fifthHole = `The 5th hole value is: ${Number(((72.17 / 100) * totalLength).toFixed(3))} cm`;
        const sixthHole = `The 6th hole value is: ${Number(((80 / 100) * totalLength).toFixed(3))} cm`;

        return [blowingHole, tuningHole, firstHole, secondHole, thirdHole, fourthHole,fifthHole, sixthHole];
    }

    // Get the form element
    let form = document.getElementById('lengthForm');

    // Add event listener to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get the total length from the input field
        let totalLength = parseFloat(document.getElementById('totalLength').value);

        // Get the calculated values
        let holes = Bansuri(totalLength);

        // Get the results container
        let resultContainer = document.querySelector('.result');

        // Clear previous results
        resultContainer.innerHTML = '';

        // Create and append elements to display the results
        holes.forEach(hole => {
            let resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.textContent = hole;
            resultContainer.appendChild(resultDiv);
        });
    });
});




// Punamflutes measurement 

// document.addEventListener('DOMContentLoaded', function() {
//     function Bansuri(totalLength) {
//         const blowingHole = `The blowing hole value is: ${Number(((87.92 / 100) * totalLength).toFixed(3))} cm`;
//         const tuningHole = `The tuning hole value is: ${Number(((10.49 / 100) * totalLength).toFixed(3))} cm`;

//         const sixthHole = `The 6th hole value is: ${Number(((52.49 / 100) * totalLength).toFixed(3))} cm`;
//         const fifthHole = `The 5th hole value is: ${Number(((46.98 / 100) * totalLength).toFixed(3))} cm`;
//         const fourthHole = `The 4th hole value is: ${Number(((40.81 / 100) * totalLength).toFixed(3))} cm`;
//         const thirdHole = `The 3rd hole value is: ${Number(((32.80 / 100) * totalLength).toFixed(3))} cm`;
//         const secondHole = `The 2nd hole value is: ${Number(((29 / 100) * totalLength).toFixed(3))} cm`;
//         const firstHole = `The 1st hole value is: ${Number(((20.99 / 100) * totalLength).toFixed(3))} cm`;
     
     
      
        
      

//         return [blowingHole, tuningHole, firstHole, secondHole, thirdHole, fourthHole, fifthHole, sixthHole];
//     }

//     // Get the form element
//     let form = document.getElementById('lengthForm');

//     // Add event listener to handle form submission
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form from submitting

//         // Get the total length from the input field
//         let totalLength = parseFloat(document.getElementById('totalLength').value);

//         // Get the calculated values
//         let holes = Bansuri(totalLength);

//         // Get the results container
//         let resultContainer = document.querySelector('.result');

//         // Clear previous results
//         resultContainer.innerHTML = '';

//         // Create and append elements to display the results
//         holes.forEach(hole => {
//             let resultDiv = document.createElement('div');
//             resultDiv.className = 'result';
//             resultDiv.textContent = hole;
//             resultContainer.appendChild(resultDiv);
//         });
//     });
// });
