

const Navbar = ({age, name}) => {
    console.log(name,age)

    // const obj = {
    //     name:'ram',
    //     age:12,
    //     country:'nepal',
    //     location:'ktm'
    // }

    // // destructuring
    // const {location, country} = obj

// console.log( location, country )

  return (
    <div>
      <h1 className="text-green-700 text-red bg-gray-100">I am a navbar {name}</h1>
    </div>
  )
}

export default Navbar
