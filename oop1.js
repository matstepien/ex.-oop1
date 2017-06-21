function Phone(brand, price, color, country) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
	this.country = country;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
		console.log("The phone was designed in " + this.country + ".");
}

var samsungGalaxyS6 = new Phone("Samsung", 1500, "blue", "South Korea");
	iPhone6S = new Phone("Apple", 2250, "silver", "USA");
	onePlusOne = new Phone("One Plus", 500, "black", "China");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();