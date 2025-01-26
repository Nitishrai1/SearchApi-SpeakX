const express = require("express");
const { allquestions } = require("../models/Question");
const NodeCache = require("node-cache");
const checkCache = require("../middlewire/chachecheck");
const router = express.Router();


const cache=new NodeCache({stdTTL:600,checkperiod:120});





// Search route
router.get("/search",checkCache, async (req, res) => {
    const {q,page=1,limit=10}=req.query; //this will take the q=?query page=>1 deafult , limit =1 default from the query parameter
    const options={
        page:parseInt(page),
        limit:parseInt(limit),
    }
    try {
        const searchQuery=q ? {title:new RegExp(q,'i')}:{};//terny opertor for efficent condition satatement
        const questions=await allquestions.find(searchQuery)
        .limit(options.limit)
        .skip((options.page-1)*options.limit);


        const totalCount=await allquestions.countDocuments(searchQuery);

        const cacheKey=`search:${q||''}:page:${options.page}:limit:${options.limit}`;
        cache.set(cacheKey,questions);
        res.json({
            totalCount,
            totalPages:Math.ceil(totalCount/options.limit),
            currentPage:options.page,
            questions,
        })

        
        
    } catch (err) {
        res.status(500).json({ message: "Error fetching questions", error: err });
    }

});

router.get('/suggestions', async (req, res) => {
    const { q } = req.query;
  
    try {
      const suggestions = await allquestions
        .find({ title: new RegExp(q, 'i') })
        .limit(5) // Limit the number of suggestions
        .select('title'); // Only return the title field
  
      res.json({ suggestions });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching suggestions', error: err });
    }
});

module.exports = router;