const ramenMenu = document.getElementById("ramen-menu")
const ramenName = document.getElementById("ramenName")
const restaurantName = document.getElementById("restaurantName")
const ratingDisplay = document.getElementById("rating-display")
const commentDisplay = document.getElementById("comment-display")
const ramenDetailImg = document.getElementById("detailImage")
const newName = document.getElementById("new-name")
const newRestaurant = document.getElementById("new-restaurant")
const newImage = document.getElementById("new-image")
const newRating = document.getElementById("new-rating")
const newComment = document.getElementById("new-comment")
const ramenForm = document.getElementById("new-ramen")
const editForm = document.getElementById("edit-ramen")
const editRating = document.getElementById("edit-rating")
const editComment = document.getElementById("edit-comment")
const deleteRamen = document.getElementById("deleteRamen")
let selectedRamen

const displayRamens = async () => {
    let req = await fetch(" http://localhost:3000/ramens")
    let res = await req.json()

    res.forEach((ramen) => {
        let ramenImg = document.createElement("img")
        ramenImg.src = ramen.image
        ramenMenu.appendChild(ramenImg)

        ramenImg.addEventListener("click", () => {
            displayDetails(ramen)
            selectedRamen = ramen.id
            console.log(selectedRamen)
        })

    })

    let firstRamen = res[0]
    displayDetails(firstRamen)

}

const displayDetails = (ramen) => {
    ramenDetailImg.src = ramen.image
    ramenName.innerText = ramen.name
    restaurantName.innerText = ramen.restaurant
    ratingDisplay.innerText = ramen.rating
    commentDisplay.innerText = ramen.comment
}


ramenForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let req = await fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: newName.value,
            restaurant: newRestaurant.value,
            image: newImage.value,
            rating: newRating.value,
            comment: newComment.value
        })
    })
    let res = await req.json()
    let img = document.createElement("img")
    img.src = res.image
    ramenMenu.appendChild(img)
    img.addEventListener("click", () => {
        displayDetails(res)
        selectedRamen = res.id
    })

})



editForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/ramens/${selectedRamen}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            rating: editRating.value,
            comment: editComment.value
        })
    })
    let res = await req.json()

    ratingDisplay.innerText = res.rating
    commentDisplay.innerText = res.comment
    selectedRamen = res.id

    const img = document.getElementById(selectedRamen)

    img.addEventListener('click', () => {
        ratingDisplay.innerText = res.rating
        commentDisplay.innerText = res.comment
    })

})

deleteRamen.addEventListener("click", async () => {
    let req = await fetch(`http://localhost:3000/ramens/${selectedRamen}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    let img = document.getElementById(`${selectedRamen}`)
    img.remove()

})


displayRamens()


// const ramenMenu = document.getElementById("ramen-menu")
// const ramenName = document.getElementById("ramenName")
// const restaurantName = document.getElementById("restaurantName")
// const ratingDisplay = document.getElementById("rating-display")
// const commentDisplay = document.getElementById("comment-display")
// const ramenDetailImg = document.getElementById("detailImage")
// const newName = document.getElementById("new-name")
// const newRestaurant = document.getElementById("new-restaurant")
// const newImage = document.getElementById("new-image")
// const newRating = document.getElementById("new-rating")
// const newComment = document.getElementById("new-comment")
// const ramenForm = document.getElementById("new-ramen")
// const editForm = document.getElementById("edit-ramen")
// const editRating = document.getElementById("edit-rating")
// const editComment = document.getElementById("edit-comment")
// const deleteRamen = document.getElementById("deleteRamen")
// let selectedRamen

// const displayRamens = async () => {
//     let req = await fetch(" http://localhost:3000/ramens")
//     let res = await req.json()

//     res.forEach((ramen) => {
//         let ramenImg = document.createElement("img")
//         ramenImg.src = ramen.image
//         ramenMenu.appendChild(ramenImg)
//         selectedRamen = ramen.id
//         ramenImg.id = selectedRamen

//         ramenImg.addEventListener("click", () => {
//             ramenDetailImg.src = ramen.image
//             ramenName.innerText = ramen.name
//             restaurantName.innerText = ramen.restaurant
//             ratingDisplay.innerText = ramen.rating
//             commentDisplay.innerText = ramen.comment
//         })

//     })

//     let firstRamen = res[0]
//     ramenDetailImg.src = firstRamen.image
//     ramenName.innerText = firstRamen.name
//     restaurantName.innerText = firstRamen.restaurant
//     ratingDisplay.innerText = firstRamen.rating
//     commentDisplay.innerText = firstRamen.comment

// }


// ramenForm.addEventListener("submit", async (e) => {
//     e.preventDefault()
//     let req = await fetch("http://localhost:3000/ramens", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             name: newName.value,
//             restaurant: newRestaurant.value,
//             image: newImage.value,
//             rating: newRating.value,
//             comment: newComment.value
//         })
//     })
//     let res = await req.json()
//     let img = document.createElement("img")
//     img.src = res.image
//     ramenMenu.appendChild(img)
//     img.addEventListener("click", () => {
//         ramenDetailImg.src = res.image
//         ramenName.innerText = res.name
//         restaurantName.innerText = res.restaurant
//         ratingDisplay.innerText = res.rating
//         commentDisplay.innerText = res.comment
//         selectedRamen = res.id
//     })

// })



// editForm.addEventListener("submit", async (e) => {
//     e.preventDefault()
//     let req = await fetch(`http://localhost:3000/ramens/${selectedRamen}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             rating: editRating.value,
//             comment: editComment.value
//         })
//     })
//     let res = await req.json()
//     let img = document.createElement('img')
//     img.src = res.image
//     ramenMenu.appendChild(img)

//     img.addEventListener('click', () => {
//         ramenDetailImg.src = res.image
//         ramenName.innerText = res.name
//         restaurantName.innerText = ramen.restaurant
//         ratingDisplay.innerText = ramen.rating
//         commentDisplay.innerText = ramen.comment
//         img.id = res.id
//     })

// })

// deleteRamen.addEventListener("click", async () => {
//     let req = await fetch(`http://localhost:3000/ramens/${selectedRamen}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" }
//     })
//     let img = document.getElementById(`${selectedRamen}`)
//     img.remove()

// })


// displayRamens()

