const arr = []
const od = []
for (let i = 1; i <= 58; i++) {
    arr.push(i);
}
if (arr.length % 7 != 0) {
    var el = arr.length / 3
}
if (arr.length % 11 != 0) {
    el = arr.length / 9
}
el
el = Math.round(el + .5)
el
for (let j = 1; j <= el / 2; j++) {
    let x = 18 * j - 8
    let y = 18 * j - 15
    od.push(y, x)
}
console.log(od);

(() => {
    console.log("hello")
})();


/*
    dummy data array
    mydata = () => {
        const img_array = []
        const specific_slot = []
        for (let i = 1; i <= 65; i++) {
            img_array.push("https://cdn1.staticans.com/image/data/aldo-shoes/09-feb-2022/8080948_1.JPG?width=500&height=635&mode=fill&fill=blur&format=auto");
        }
        if (img_array.length % 7 !== 0) {
            var el = img_array.length / 7
        }
        if (img_array.length % 11 !== 0) {
            var el = img_array.length / 11
        }
        el = Math.round(el + .5)
        el = el - 2
        for (let j = 1; j <= el; j++) {
            let x = 18 * j - 8
            let y = 18 * j - 15
            specific_slot.push(y, x)
        }
        console.log(img_array);
        this.setState({
            imgArr: [...this.state.imgArr, img_array],
            spans: [...this.state.spans, specific_slot]
        })
    }
*/