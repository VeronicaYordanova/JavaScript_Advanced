function argumentInfo() {

    let map = new Map();
    for (let i = 0; i < arguments.length; i++) {

        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);

        if (!map.has(type)) {
            map.set(type, 1);

        }
        else {
            map.get(type);
            map.set(type, map.get(type) + 1);
        }
    }
    let mapAsc = new Map(
        Array.from(map).sort((a, b) => {
                return b[1] - a[1];
            })
    );
    for (let [key, value] of mapAsc) {
        console.log(key + ' = ' + value);

    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });