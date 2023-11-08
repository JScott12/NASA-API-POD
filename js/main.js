// event listener
document.querySelector('#submit-btn').addEventListener('click', displayPod)

const todayDate = document.querySelector('#date')
const currentDate = new Date()
const formattedDate = currentDate.toLocaleString('en-Us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

todayDate.innerHTML = formattedDate

function displayPod(){
    const userDate = document.querySelector('#user-date').value
    const date = document.querySelector('#date')
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')
    const img = document.querySelector('img')
    const dateText = document.querySelector('#date-text')
    // let bg_img = ''
    const api_key = 'KPEEXcu0hrXgz2xv0qDxOyudcEVMwtfT6VwNKYqg'
    const URL = `https://api.nasa.gov/planetary/apod?api_key=KPEEXcu0hrXgz2xv0qDxOyudcEVMwtfT6VwNKYqg&date=${userDate}`

    // dateText.innerText = ""

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if(data.media_type == 'image'){
                img.src = data.hdurl
            } else if(data.media_type == 'video'){
                document.querySelector('iframe').src = data.url
            }
            dateText.innerText = "Image on: "
            date.innerText = data.date
            //img.src = data.hdurl
            title.innerText = data.title
            description.innerText = data.explanation
            
            bg_img = data.hdurl
            date.innerText = data.date

            console.log(data)
        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
}