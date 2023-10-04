function returnsSomething(){
    console.log("hello")
    return 5;
}

const value = returnsSomething()

console.log(value)


function celciustofahrenheit(celsius){
    return(celsius * 9/5 + 32)

}

console.log(celciustofahrenheit(32) + '°F')


function hours_to_minutes(hours){
    let minutes = (hours * 60)
    return minutes
}


console.log(hours_to_minutes(1))