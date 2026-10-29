const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1024,height:1024}});
const P='<path d="M30 22H54a20 20 0 0 1 0 40H44V80a7 7 0 0 1-14 0Z" fill="#FFD43B"/><path d="M43 42l6 6 11-12" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>';
const shot=async(name,html,bg)=>{await pg.setContent(`<body style="margin:0;width:1024px;height:1024px;background:${bg||'transparent'};display:flex;align-items:center;justify-content:center">${html}</body>`);await pg.screenshot({path:'resources/'+name,omitBackground:!bg});};
// full icon: dark tile
await shot('icon-only.png',`<svg viewBox="0 0 100 100" width="1024" height="1024"><rect width="100" height="100" rx="0" fill="#111"/>${P}</svg>`,'#111');
// adaptive: foreground on transparent (scaled to safe zone 66%), background solid
await shot('icon-foreground.png',`<svg viewBox="0 0 100 100" width="1024" height="1024"><g transform="translate(50 50) scale(.85) translate(-50 -50)">${P}</g></svg>`);
await shot('icon-background.png','','#111');
// splash: yellow bg with logo tile
const tile=`<svg viewBox="0 0 100 100" width="420" height="420"><rect width="100" height="100" rx="24" fill="#111"/>${P}</svg>`;
await pg.setViewport&&0;
const pg2=await b.newPage({viewport:{width:2732,height:2732}});
for(const n of ['splash.png','splash-dark.png']){await pg2.setContent(`<body style="margin:0;width:2732px;height:2732px;background:#FFD43B;display:flex;align-items:center;justify-content:center">${tile}</body>`);await pg2.screenshot({path:'resources/'+n});}
await b.close();})();
