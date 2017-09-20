const {HLTV} = require('hltv');

console.log(HLTV);
HLTV.getMatches().then(r=>{console.log(r)}).catch(err=>console.error(err));
