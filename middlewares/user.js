module.exports = (req, res, next)=>{
    //this will activate on every route call 
    // it does nothing at the moment but can be used for Auth etc.
    next()
}