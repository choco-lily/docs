var fs = require("fs")

var data = fs.readFileSync(
    "./node_modules/@astrojs/starlight/components/ThemeSelect.astro",
    "utf-8",
)

console.log(data)

var newValue = data.replace("false, value: 'd", "true, value: 'd")
newValue = newValue.replace("true, value: 'a", "false, value: 'a")

fs.writeFileSync(
    "./node_modules/@astrojs/starlight/components/ThemeSelect.astro",
    newValue,
    "utf-8",
)

console.log("change default mode to dark mode success")
