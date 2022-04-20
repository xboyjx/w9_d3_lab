use hotel_bookings;
db.dropDatabase();

db.customers.insertMany([
    {
        name:"Jacob",
        email:"Jacob@email.com",
        checkInStatus: true
    },

    {
        name:"Stephanie",
        email:"stephanie@email.com",
        checkInStatus: false
    }
]);
