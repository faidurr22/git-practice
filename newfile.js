document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('exploreButton').addEventListener('click', function() {
       alert('Embark on a journey of flavors and culture with Koca Coffee. Visit us at our cafe to experience the richness of traditional coffee!');
   });

   document.getElementById('bookingForm').addEventListener('submit', function(event) {
       event.preventDefault();
       let formData = new FormData(this);
       let name = formData.get('name');
       let email = formData.get('email');
       let eventDate = formData.get('eventDate');
       let eventDetails = formData.get('eventDetails');
       // Send form data to server or perform other actions
       alert(`Thank you, ${name}! We will contact you at ${email} regarding your event on ${eventDate}. Event details: ${eventDetails}`);
       this.reset(); // Reset form after submission
   });
});

//whoot whoot coot coot dute dute

// This is a new JavaScript file
console.log("Hello, world!");


// This is a new JavaScript file
console.log("Hello, world!");
