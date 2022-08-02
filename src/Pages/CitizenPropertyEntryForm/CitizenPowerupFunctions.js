
//function to get current date
export const getCurrentDate = () => {
    let cDate = new Date()
    let year = cDate.getFullYear()
    let month = String(cDate.getMonth() + 1)
    let day = String(cDate.getDate())

    { month.length < 2 && (month = `0${month}`) }
    { day.length < 2 && (day = `0${day}`) }

    let fullDate = `${year}-${month}-${day}`
    return fullDate
}
//function to get custom before date from current date
export const getBeforeDate = (beforeYear, beforeMonth, beforeDay) => {
    let cDate = new Date()
    let year = cDate.getFullYear() - beforeYear
    let month = String((cDate.getMonth() + 1) - beforeMonth)
    let day = String(cDate.getDate() - beforeDay)

    { month.length < 2 && (month = `0${month}`) }
    { day.length < 2 && (day = `0${day}`) }

    let fullBeforeDate = `${year}-${month}-${day}`
    return fullBeforeDate
}
//function to get custom after date from current date
export const getAfterDate = (afterYear, afterMonth, afterDay) => {
    let cDate = new Date()
    let year = cDate.getFullYear() + afterYear
    let month = String((cDate.getMonth() + 1) + afterMonth)
    let day = String(cDate.getDate() + afterDay)

    { month.length < 2 && (month = `0${month}`) }
    { day.length < 2 && (day = `0${day}`) }

    let fullBeforeDate = `${year}-${month}-${day}`
    return fullBeforeDate
}

//have to work on this comman get data format, very usefull
// const getCurrentYMD = () => {
//     let cDate = new Date()
//     let year = cDate.getFullYear()
//     let month = String(cDate.getMonth() + 1)
//     let day = String(cDate.getDate())

//     { month.length < 2 && (month = `0${month}`) }
//     { day.length < 2 && (day = `0${day}`) }

//     let fullFormattedDate = `${year}-${month}-${day}`
//     let allDates = {
//         year,
//         month,
//         day,
//         fullFormattedDate
//     }
//     return allDates
// }

export const allowFloatInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //check max value input
        return oldValue

    const re = /^\d*\.?\d*$/;
    if (currentValue === '' || re.test(currentValue)) //test for float input
        return currentValue
    else
        return oldValue
}
export const allowNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //check max value input
        return oldValue

    const re = /^[0-9\b]+$/;
    if (currentValue === '' || re.test(currentValue)) //test for number input
        return currentValue
    else
        return oldValue
}
export const allowCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //check max value input
        return oldValue

    const re = /[A-Za-z]/;
    if (currentValue === '' || re.test(currentValue)) //test for character input
        return currentValue
    else
        return oldValue
}
export const allowCharacterCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //check max value input
        return oldValue

    const re = /[A-Za-z,]/;
    if (currentValue === '' || re.test(currentValue)) //test for character with comma input
        return currentValue
    else
        return oldValue
}
export const allowCharacterSpecialInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //check max value input
        return oldValue

    const re = /[A-Za-z,]/;
    if (currentValue === '' || re.test(currentValue)) //test for number input
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //check max value input
        return oldValue

    const re = /^[A-Za-z0-9]/;
    if (currentValue === '' || re.test(currentValue)) //test for character with number input
        return currentValue
    else
        return oldValue
}