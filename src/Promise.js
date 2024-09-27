


function first() {
    let isNotError = false;  // true = .them ||  false = .catch
    return new Promise((resolve, reject) => {
        if (isNotError) {
            setTimeout(() => {
                resolve("Phúc đang học");
            }, 1000)
        } else {
            reject("Lỗi rồi má !!!");
        }
    })
}

function second() {
    console.log("Đợi Phúc nhé")
}

first().then((data) => {
    console.log(data);
    second();
}).catch((err) => {
    console.log(err)
})