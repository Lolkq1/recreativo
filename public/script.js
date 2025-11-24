const c = document.cookie
const s = 'testeteste2'
function cookieSearcher(cook, p) {
    let c2 = cook.split(';')
    let c3 = []
    if (c2.length===1) {
        let c4 = c2[0].split('=')
        console.log(c4[1])
        return c4[1]
    } else {
        for (x in c2) {
        c3.push(c2[x].split('='))
        console.log(c2[x].split('='))
        console.log(c2[x].split('=')[1])
    }
    for (x in c3) {
        if (c3[x][0] === p || c3[x][0] === ' '+p) {
            return c3[x][1]
        }
    }
    }
}

if (cookieSearcher(c, s) === undefined) {
    console.log('joe')
} else {
    if (cookieSearcher(c,s).length > 0) {
        console.log('papai cris')
        fetch('/t', {
        method: 'POST',
        body: JSON.stringify({
        cookie: cookieSearcher(c, s)
    })
})
    } else {
        console.log('joe2')
    }
}
