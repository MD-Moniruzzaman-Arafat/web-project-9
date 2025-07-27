let totalSeats = 40;
let ticketCount = 0;
document.getElementById('select-seat').addEventListener('click', function (event) {
    // console.log(event.target.classList.contains("bg-green-500"))
    if (!event.target.classList.contains("bg-green-500")) {

        // change bg-color and text-color
        event.target.classList.add("text-white", "bg-green-500")

        // create element
        const div = document.createElement('div')
        div.classList.add("flex", "justify-between", "text-neutral-600", "py-2")

        const span1 = document.createElement('span')
        span1.innerText = event.target.innerText;

        const span2 = document.createElement('span')
        span2.innerText = "Economoy"

        const span3 = document.createElement('span')
        span3.innerText = 550

        div.append(span1, span2, span3)

        // show tickects
        document.getElementById('tickets').appendChild(div)

        // totat seat left
        document.getElementById('total-seat').innerText = totalSeats -= 1;
        document.getElementById('ticket-count').innerText = ticketCount += 1

    }

})
