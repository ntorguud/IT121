// Set up the object
var hotel = new Object();
 
hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;  
}; 

hotel.pool = false;
 
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = 'Hotel Name: ' + hotel.name; // Update HTML with property of the object
 
var elRooms = document.getElementById('rooms'); // Get element
elRooms.textContent = 'Rooms Available: ' + hotel.checkAvailability(); // Update HTML with result of method

console.log(checkAvailability);