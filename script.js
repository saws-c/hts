document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const successMessage = document.getElementById('success-message');
    const warningMessage = document.getElementById('warning-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name && email) {
            // Save participant info (simulate server by storing in localStorage)
            let participants = JSON.parse(localStorage.getItem('participants')) || [];
            
            if (participants.length >= 200) {
                alert('Sorry, the giveaway is full for today.');
            } else {
                participants.push({ name: name, email: email });
                localStorage.setItem('participants', JSON.stringify(participants));
                successMessage.innerText = 'You’ve registered successfully! Redirecting...';
                
                // Simulate redirect after registration
                setTimeout(() => {
                    window.location.href = 'testimonials.html'; // Redirect to a different page (if needed)
                }, 2000);
            }
        } else {
            alert('Please fill out both your name and email.');
        }
    });

    // Countdown Timer (1 minute for urgency)
    const countdownElement = document.getElementById('timer');
    let timeLeft = 120 * 1; // 1 minute countdown
    
    const timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        
        countdownElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(timer);
            warningMessage.innerText = '⚠️ Time is up! You can no longer register for today’s giveaway.';
        }
    }, 1000);

    // Testimonials Section
    const testimonialsList = document.getElementById('testimonials-list');
    
    const testimonials = [
        { name: 'John Doe', comment: 'This is amazing! I won $100,000 in just a few seconds!', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Jane Smith', comment: 'Can’t believe I was one of the lucky 20! Thank you!', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Chris Lee', comment: 'Fastest registration ever and now I’m rich!', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Maria Garcia', comment: 'What a great opportunity! I’m so happy I registered in time.', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'Michael Brown', comment: 'This is life-changing, I was one of the fastest today!', profilePic: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { name: 'Emily Johnson', comment: 'Simple, easy, and $100,000 richer. Incredible!', profilePic: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { name: 'David Wilson', comment: 'I was one of the fastest 20 and now I have $100,000!', profilePic: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { name: 'Sophia Martinez', comment: 'I couldn’t believe it when I won! This is real!', profilePic: 'https://randomuser.me/api/portraits/women/8.jpg' },
        { name: 'James Davis', comment: 'I was skeptical, but now I’m a winner. Best decision ever!', profilePic: 'https://randomuser.me/api/portraits/men/9.jpg' },
        { name: 'Isabella Clark', comment: 'I’m so happy! Thank you for the opportunity to win!', profilePic: 'https://randomuser.me/api/portraits/women/10.jpg' }
    ];
    
    testimonials.forEach((testimonial, index) => {
        const li = document.createElement('li');
        
        // Generate random timestamp
        const timestamp = new Date(Date.now() - Math.floor(Math.random() * 100000000)).toLocaleString();
        
        li.innerHTML = `<img src="${testimonial.profilePic}" alt="Profile Picture" /> <strong>${testimonial.name}</strong> <span>${timestamp}</span><br> ${testimonial.comment}`;
        testimonialsList.appendChild(li);
    });
});
