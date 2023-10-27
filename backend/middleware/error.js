

module.exports = (err, req, res, next) =>{
    err.statusCode  = err.statusCode || 500;

    
        

    res.status(err.statuscode).json({
        success:false,
        message: err.message || "internal Server Error",
        
    })
    
}