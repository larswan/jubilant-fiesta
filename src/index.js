console.log("working, lets go!! no problem sendaroony doony")

const filmList = document.getElementById("films")
const tixLeft = document.getElementById("ticket-num")
const buyBtn = document.getElementById("buy-ticket")
let capacity = 30
let tixSold = 27
let remTix;

const request = async () => {
    const req = await fetch("http://localhost:3000/films")
    const res = await req.json()
    
    console.log(res)

    // capacity = res[0].capacity
    // tixSold = res[0].tickets_sold

    res.forEach((film) => {

        let li = document.createElement('li')
        li.textContent = film.title
        li.classList.add("film")
        filmList.append(li)
    })
}

remTix = (capacity - tixSold);
tixLeft.textContent = `${remTix}`

buyBtn.addEventListener('click', () => {
    // console.log(remTix)

    if (remTix > 0){
        tixSold++;
        // console.log(tixSold)
        remTix = (capacity - tixSold);

        tixLeft.textContent = `${remTix}`

    }
    else {
        buyBtn.textContent = "SOLD OUT"
        buyBtn.style.backgroundColor = "red"
    }

}
)

request();

