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
    ```import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_1yFOOFk2.mjs';
import { manifest } from './manifest_1rfzln_p.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page3 = () => import('./pages/auth/_---path_.astro.mjs');
const _page4 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page2],
    ["src/pages/auth/[...path].ts", _page3],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "",
    "server": "",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
```,
)

console.log("now default mode is dark!")
