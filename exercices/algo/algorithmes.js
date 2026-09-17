function FizzBuzz(number) {
    
    for (let i = 1; i < number+1; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}
// FizzBuzz(15)

function isPalindrome(text) {
    let str = text.trim()
    let reverse = str.split("").reverse().join().replaceAll(',', '')

    if (str === reverse) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// isPalindrome("kayak")

function strAnagramms(textOne, textTwo) {
    let strOne = textOne.split("").sort().join()
    let strTwo = textTwo.split("").sort().join()

    let same = strOne.length === strTwo.length

    if (same && strOne === strTwo) {
        console.log(true);
    } else {
        console.log(false)
    }
}

// strAnagramms('listen', 'silent')


function fibonacci(n) {
    if(n === 0 || n === 1) {
        console.log(n);
    }

    beforeOne = 0
    before = 1
    newValue = 0

    for (let i = 0; i < n + 1; i++) {
        newValue = before + beforeOne

        beforeOne = before
        before = newValue

        console.log(newValue);
    }
    
}

// fibonacci(10)



const products = [
 { id: 1, name: "Laptop", price: 999, category: "Electronics" },
 { id: 2, name: "Phone", price: 699, category: "Electronics" },
 { id: 3, name: "Desk", price: 299, category: "Furniture" },
 { id: 4, name: "Chair", price: 199, category: "Furniture" },
 { id: 5, name: "Monitor", price: 299, category: "Electronics" }
];


function filterByCategory(article, category) {
    return article.filter(item => item.category === category)
}

console.log(filterByCategory(products, 'Furniture'));

