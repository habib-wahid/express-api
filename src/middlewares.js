
module.exports = (options) => {
    return (req,res,next) => {
        console.log("res ", options);
        next()
    }
}