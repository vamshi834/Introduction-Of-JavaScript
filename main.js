console.clear()
// adding numbers
var p = 2
var q = 3
var r = 4
p+q+r
var sum = p+q+r
console.log(sum)

// substract numbers
var diff = p-q
console.log(diff)

// multply numbers
var mul = q*r
console.log(mul)

// division
var div = r/p
console.log(div)

// type of variable
var x = 19
var y = 'bro'
console.log(typeof(y))
console.log(typeof(x))

// converting a number to string
console.log(x.toString())

// converting a string to number
console.log(parseInt(y))

// converting  string to float num
var z = '19.99'
console.log(parseFloat(z))

//round it given position in float
var strfloat=3.14285
console.log(strfloat.toFixed(1))
console.log(strfloat.toFixed(5))

// to find the length of the string
var mystring = "I'm a crickter I'm a bowling all-rounder"
console.log(mystring.length)

//find the index of the string
console.log(mystring.indexOf('crickter'))
console.log(mystring.indexOf('a'))

// slice the string

console.log(mystring.slice(10,20))
console.log(mystring.slice(14))
console.log(mystring.slice(15))

//uppercase

console.log(mystring.toUpperCase())

//lowercase
console.log(mystring.toLowerCase())

// caoncat (merging two strings)

var l = "vamshi"
var m ="medipally"
console.log(l+' '+m)

//charat the string

console.log(mystring.charAt(20))
var mystring1="my 1 name 1 is 1 vamshi"
console.log(mystring1.split(1))
