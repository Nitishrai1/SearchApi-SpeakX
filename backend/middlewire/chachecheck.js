const NodeCache = require("node-cache");
const cache=new NodeCache({stdTTL:600,checkperiod:120});
const checkCache=(req,res,next)=>{
    const {q,page,limit}=req.query;
    const cacheKey=`search:${q || ''}:page:${page}:limit:${limit}`;

    const cachedResponse=cache.get(cacheKey);
    if(cachedResponse){
        return res.json(cachedResponse);
    }

    next();
}

module.exports=checkCache;