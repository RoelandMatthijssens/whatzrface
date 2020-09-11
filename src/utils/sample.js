function sample(arr) {
    const index = Math.floor(Math.random() * arr.length)
    console.log(arr, index, arr[index])
    return arr[index]
}

export default sample