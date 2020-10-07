class Trip {
    constructor(id, userName, isDriver, originAddress, destinationAddress, departureTime, returnTime) {
        this.id = id;
        this.userName = userName;
        this.isDriver = isDriver;
        this.originAddress = originAddress;
        this.destinationAddress = destinationAddress;
        this.departureTime = departureTime;
        this.returnTime = returnTime;
    }
}

const trips = [
    new Trip(1, 'jowong', true, '123 Main St, Seattle, WA', '897 Madison Way, Bellevue, WA', 'October 7, 2020 07:30:00', 'October 7, 2020 17:30:00'),
    new Trip(2, 'blopez', false, '123 Main St, Seattle, WA', '897 Madison Way, Bellevue, WA', 'October 7, 2020 07:45:00', 'October 7, 2020 17:45:00'),
    new Trip(3, 'clacroix', true, '5400 Rainier Way, Renton, WA', '4556 Mercer Dr, Redmond, WA', 'October 8, 2020 07:00:00', 'October 8, 2020 17:00:00'),
];

module.exports = {
    Trip,
    trips
};