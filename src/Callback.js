
 
function first(callback) {  //callback là hàm //
    setTimeout(() => {
        console.log('Phuc đang học');
        callback()   //second//
    }, 2000)
}
function second() {
    console.log('Phuc da hoc xong');
}

first(second);
