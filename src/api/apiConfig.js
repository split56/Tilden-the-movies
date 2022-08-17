const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'63f244449e3fd48c3144ea407160479d',
    imgPath :(imgP) => `https://image.tmdb.org/t/p/w1280/${imgP}`,
    posterImg : (imgP) => `https://image.tmdb.org/t/p/w500/${imgP}`,
}

export default apiConfig