function loadImage(path) {
    console.log(`../assets/images/${path}`)
    return require(`../assets/images/${path}.jpg`)
}

export default loadImage