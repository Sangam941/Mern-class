let main = document.querySelector(".main")

let data = []

renderCard()

async function fetchData(){
    try {
        let res = await fetch('https://randomuser.me/api/?results=20')
        let data1 = await res.json()
        data = data1.results

        renderCard()
    } catch (error) {
        console.log(error)
    }
}

function renderCard(){
    console.log(data)
    data.map((data)=>{
        let card = document.createElement('div')
        card.innerHTML = `
        <div class="card flex gap-3 items-center border border-red-500 m-2">
            <img class="h-16" src=${data.picture.thumbnail} alt=""/>
            <div class="details flex flex-col leading-5">
                <div class="name">${data.name.first}hello</div>
                <div class="email">${data.email}</div>
                <div class="city">ktm</div>
            </div>
        </div>
        `

        main.append(card)
    })

}

fetchData()