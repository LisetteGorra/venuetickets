var venue = {
    name: "Madison Square Garden!!!",
    ticketPrice: 30.00, 
    seatsAvailable: [201, 202, 203, 204, 205, 206],
    seatsBooked: [],
    
    numberOfSeatsAvailable: function() {
        return this.seatsAvailable.length;
    },
    numberOfSeatsBooked: function() {
        return this.seatsBooked.length;
    },
    totalNumberOfSeatsAvailable: function() {
        return this.seatsAvailable.length + this.seatsBooked.length;
    },
    bookTicket: function() {
        if (this.numberOfSeatsAvailable() > 0 ) {
            this.seatsBooked.splice(this.seatsAvailable.splice, 0)
            this.seatsBooked.unshift(this.seatsAvailable.splice(0, 1)[0]);
        }
        
    },
};

document.getElementById("venueName").innerText = venue.name;

var seatList = "<ul>";

document.getElementById("seatsAvail").innerHTML = seatList;

var selectSeatList = "<form style=\"text-align:center;\"> <select id='selectedSeat'>";
for ( var i = 0; i < venue.seatsAvailable.length; i++ ) {
    selectSeatList += "<option value ="+venue.seatsAvailable[i]+">"+venue.seatsAvailable[i]+ "</option>";
}
selectSeatList += "</select> </form> ";

document.getElementById("selectSeat").innerHTML = selectSeatList;
