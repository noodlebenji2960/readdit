function humanizeNumber(number){
    return number > 1000 ? Math.floor(number / 100) * 100 / 1000 + "k" : number
}

export default humanizeNumber