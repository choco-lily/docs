var fs = require("fs")

var data = fs.readFileSync(
    "./node_modules/@astrojs/starlight/components/ThemeSelect.astro",
    "utf-8",
)

console.log(data)

var newValue = data.replace("false, value: 'd", "true, value: 'd")
newValue = newValue.replace("true, value: 'a", "false, value: 'a")
newValue = newValue.replace('value="auto"', 'value="dark"')

fs.writeFileSync(
    "./node_modules/@astrojs/starlight/components/ThemeSelect.astro",
    newValue,
    "utf-8",
)

fs.writeFileSync(
    "./dist/server/entry.mjs",
    'import{renderers as s}from"./renderers.mjs";import{c as a,s as t}from"./chunks/_@astrojs-ssr-adapter_1yFOOFk2.mjs";import{manifest as e}from"./manifest_1rfzln_p.mjs";let serverIslandMap=new Map,_page0=()=>import("./pages/_image.astro.mjs"),_page1=()=>import("./pages/404.astro.mjs"),_page2=()=>import("./pages/api/auth/_---auth_.astro.mjs"),_page3=()=>import("./pages/auth/_---path_.astro.mjs"),_page4=()=>import("./pages/_---slug_.astro.mjs"),pageMap=new Map([["node_modules/astro/dist/assets/endpoint/node.js",_page0],["node_modules/@astrojs/starlight/routes/static/404.astro",_page1],["node_modules/auth-astro/src/api/[...auth].ts",_page2],["src/pages/auth/[...path].ts",_page3],["node_modules/@astrojs/starlight/routes/static/index.astro",_page4]]),_manifest=Object.assign(e,{pageMap,serverIslandMap,renderers:s,actions:()=>import("./_noop-actions.mjs"),middleware:()=>import("./_astro-internal_middleware.mjs")}),_args={mode:"middleware",client:"",server:"",host:!1,port:4321,assets:"_astro"},_exports=a(_manifest,_args),handler=_exports.handler,startServer=_exports.startServer,options=_exports.options,_start="start";_start in t&&t[_start](_manifest,_args);export{handler,options,pageMap,startServer};',
)

console.log("now default mode is dark!")
