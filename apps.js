//Q2: Write a function named "checkYuGiOh".

const getString = val  => {
    let replacement = [];
    if (val % 2 === 0) {
        replacement.push("yu")
    }
    if (val % 3 === 0) {
        replacement.push("gi")
    }
    if (val % 5 === 0) {
        replacement.push("oh")
    }

    return replacement.length > 0 ? replacement.join("-") : val
}


const checkYuGiOh = n => {
    const ans = Array(n).fill().map((_, index) => getString(index+1))

    console.log(ans)

    return ans
}

checkYuGiOh(2)