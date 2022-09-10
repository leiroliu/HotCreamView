function mapToList(map,keys){
    var arr = [keys.length];

    for (var i = 0; i< keys.length;i++){
        arr[i] = map[keys[i]]
    }

    return arr;
}

console.info(mapToList({"a":1,"b":2,"c":3,"d":4}, ["a","c","d"]))