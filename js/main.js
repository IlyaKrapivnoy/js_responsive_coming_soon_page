const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Jan 1, 2022 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    // Get todays date and time (ms)\
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate - now;

    // Time calculations 
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    countdown.innerHTML = `
    <div>${days} <span>Days</span></div>
    <div>${hours} <span>Hours</div>
    <div>${mins} <span>Minutes</div>
    <div>${seconds} <span>Seconds</div>
    
    `;
}, 1000);