/*
Question 52: Make a Smartphone Object: Create a simple way to keep track
of a smartphone's details. Include its brand, model, and other key features
like how much storage it has, the size of its screen, and how long its battery lasts.

Explain & TIP: Just like a box can contain smaller boxes, objects can contain
other objects. This helps organize related information neatly.

*/
let phone = {
    brandName: "Techno",
    model: "Spark 6 go",
    spec: {
        storage: "64 GB",
        screenSize: "6.5 inches",
        batteryLife: "5000 mah"
    }
};
console.log(phone);
export {};
