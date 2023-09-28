//Use console.log() to 
const greeting = "Welcome to my shop!"
console.log(greeting)

// Use prompt
const name = prompt("What is your name?")

// Use concatination to create complex messages
const shopName = "Latvian Sweets"
const shopSells1 = "candy"
const shopSells2 = "cookies"
const message = shopName + " selling - " + shopSells1 + ", " + shopSells2

// Use alert with interpolation to just display message to user
alert(`Welcome ${name} to ${message}`)

// Use Math.random() to give visitor a random discount
// Math.random() always returns a number lower than 1 
// That is why we use math.floor() to give discount from 0% to 50%
const randDiscount = Math.floor(Math.random() * 51);
alert(`Wow! You are our 100th customer, you got ${randDiscount}% random discount to your purchase`)