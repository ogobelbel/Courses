let options = {
    width: 1024,
    heigh: 1024,
    name: "test"
};




options.bool = false;
options.colors = {
    border : "black",
    background: "red"
};

let text = "ds";
options.colors[text] = options.name;


console.log(options);

for(let key in options){
    console.log('Свойтво ' + key + ' имеет значение' + options[key]);
}

console.log(Object.keys(options.colors).length);