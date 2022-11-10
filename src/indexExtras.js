const filmList = document.getElementById("films")
const tixLeft = document.getElementById("ticket-num")
const buyBtn = document.getElementById("buy-ticket")

const filmTitle = document.getElementById("title")
const runtime = document.getElementById("runtime")
const description = document.getElementById("film-info")
const showTime = document.getElementById("showtime")
const poster = document.getElementById("poster")

let capacity = 30
let tixSold = 27
let remTix;
remTix = (capacity - tixSold);
tixLeft.textContent = `${remTix}`

const request = async () => {
    const req = await fetch("http://localhost:3000/films")
    const res = await req.json()

    res.forEach((film) => {
        let li = document.createElement('li')
        li.textContent = film.title
        li.classList.add("film")
        filmList.append(li)

        li.addEventListener('click', () =>{
            poster.src = film.poster
            filmTitle.textContent = film.title;
            runtime.textContent = `${film.runtime} minutes`;
            showTime.textContent = film.showtime;
            description.textContent = film.description;


            capacity = film.capacity
            tixSold = film.ticketsSold

            console.log(typeof capacity, capacity)
            console.log(tixSold)

            remTix = (capacity - tixSold);
            tixLeft.textContent = `${remTix}`

            buyBtn.textContent = "Buy ticket"
            buyBtn.style.backgroundColor = "orange"
        })
    })
}

buyBtn.addEventListener('click', () => {
    // console.log(remTix)
    if (remTix > 1) {
        tixSold++;
        remTix = (capacity - tixSold);
        tixLeft.textContent = `${remTix}`
    }
    else if(remTix == 1){
        tixSold++;
        remTix = (capacity - tixSold);
        tixLeft.textContent = `${remTix}`
        buyBtn.textContent = "SOLD OUT"
        buyBtn.style.backgroundColor = "red"
    }
    else {
        window.alert("Sold out fr!")
    }
}
)

request();