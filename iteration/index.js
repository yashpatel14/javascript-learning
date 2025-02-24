//Reduce

let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Gym Membership", amount: 40, category: "Health" },
    { description: "Movie Night", amount: 25, category: "Entertainment" },
    { description: "Gas for Car", amount: 60, category: "Transport" },
    { description: "Rent", amount: 1200, category: "Housing" },
    { description: "Coffee", amount: 5, category: "Food" },
    { description: "Phone Bill", amount: 80, category: "Utilities" },
    { description: "Book Purchase", amount: 20, category: "Education" },
    { description: "Dining Out", amount: 70, category: "Food" }
];


const expensesReport = expenses.reduce((report,expense)=>{
    report[expense.category] = (report[expense.category] || 0) + expense.amount

    return report
    
},{})

console.log(expensesReport);


let bookings = [
    { guestName: "John Doe", roomType: "Deluxe", nights: 3, pricePerNight: 150 },
    { guestName: "Jane Smith", roomType: "Standard", nights: 2, pricePerNight: 100 },
    { guestName: "Emily Davis", roomType: "Suite", nights: 5, pricePerNight: 250 },
    { guestName: "Michael Brown", roomType: "Deluxe", nights: 1, pricePerNight: 150 }
];



const BookingReport = bookings.reduce((report,booking)=>{
    report[booking.roomType] = (report[booking.roomType] || 0) + booking.pricePerNight

    return report
},{})

console.log(BookingReport);


// Filter and Sort

let tasks = [
    { description: "Write report", completed: false, priority: 1 },
    { description: "Submit assignment", completed: true, priority: 2 },
    { description: "Prepare presentation", completed: false, priority: 3 },
    { description: "Attend meeting", completed: true, priority: 1 },
    { description: "Clean workspace", completed: false, priority: 2 },
    { description: "Update project plan", completed: true, priority: 1 }
];


let pendingSortedTask = tasks.filter((task)=>!task.completed).sort((a,b)=>a.priority-b.priority)

console.log(pendingSortedTask);


// Filter: Get events happening after "2024-06-18".
// Sort: Sort events by date (earliest to latest).
// Filter & Sort: Find events at "Online" and sort by title.

let events = [
    { title: "Team Meeting", date: "2024-06-15", location: "Zoom" },
    { title: "Project Deadline", date: "2024-06-20", location: "Office" },
    { title: "Lunch with Client", date: "2024-06-18", location: "Restaurant" },
    { title: "Workshop", date: "2024-06-22", location: "Conference Hall" },
    { title: "Code Review", date: "2024-06-17", location: "Online" }
];


let eventList = events.filter((events)=>events.date > "2024-06-18").sort((a,b)=>a.date - b.date && a.title - b.title)

console.log(eventList);

// Filter: Get all Sci-Fi movies.
// Sort: Sort movies by rating (highest to lowest).
// Filter & Sort: Find movies with a rating above 8.5 and sort by title.

let movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { title: "The Godfather", genre: "Crime", rating: 9.2 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
    { title: "Parasite", genre: "Thriller", rating: 8.6 },
    { title: "Titanic", genre: "Romance", rating: 7.8 }
];


let getSciFiMovie = movies.filter((movie)=>movie.genre=="Sci-Fi").sort((a,b)=>a.rating + b.rating)

console.log(getSciFiMovie);

// Filter: Get all products in the "Electronics" category.
// Sort: Sort products by price (lowest to highest).
// Filter & Sort: Find products priced under $200 and sort by name.

let products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Chair", category: "Furniture", price: 150 },
    { name: "Headphones", category: "Electronics", price: 200 },
    { name: "Notebook", category: "Stationery", price: 10 },
    { name: "Desk", category: "Furniture", price: 300 }
];


let getProduct = products.filter((product)=>product.category=="Electronics").sort((a,b)=>a.price - b.price)

console.log(getProduct);

// Average Rating: Calculate the average rating for each movie.
// Filter: Find movies with an average rating above 4.
// Sort: Sort movies by their average rating in descending order.

let movieRatings = [
    { title: "Movie A", rating: [4, 5, 3] },
    { title: "Movie B", rating: [5, 5, 4, 4] },
    { title: "Movie C", rating: [3, 2, 4] },
    { title: "Movie D", rating: [4, 4, 4, 5] },
    { title: "Movie E", rating: [2, 3, 1] }
];


let averageRating = movieRatings.map((movie)=>{
    let avgRating = movie.rating.reduce((acc,rate)=>acc+rate,0)
    let average = avgRating / movie.rating.length

    movie.rating = average

    return movie
    // return { title: movie.title, averageRating: average.toFixed(2) };

}).filter((movie)=>movie.rating > 4).sort((a,b)=>a.rating - b.rating)


console.log(averageRating);

// Average Review: Find the average review score for each book.
// Filter: Get books with an average review of 4 or higher.

let bookReviews = [
    { title: "Book A", reviews: [5, 4, 4] },
    { title: "Book B", reviews: [3, 2, 3] },
    { title: "Book C", reviews: [5, 5, 4, 5] },
    { title: "Book D", reviews: [4, 3, 4] },
    { title: "Book E", reviews: [2, 3, 2] }
];


let bookRating = bookReviews.map((book)=>{
    let avgRating = book.reviews.reduce((sum,review)=>sum+review,0);
    let average = avgRating / book.reviews.length

    book.reviews=Number(average.toFixed(2))

    return book
}).filter((book)=>book.reviews>=4)

console.log(bookRating);