// local storage --> permamently store data in bowsers
// session storage --> temporarily stores data in browsers
// cookies --> small amount of data stores.

// setdata, getdata, updatedata, deletedata

// localStorage.setItem("name","ram")

// localStorage.getItem("name")

// localStorage.setItem("name", "ramukaka")

// localStorage.removeItem("name")


// sessionStorage.setItem("age",12)

// cookies
// document.cookie = "email=abc@example.com"
// document.cookie = "age=13"
// document.cookie = "name=abc"

const obj = {
    name:'ram',
    age:30,
    salary:40000
}

localStorage.setItem("obj", JSON.stringify(obj))

