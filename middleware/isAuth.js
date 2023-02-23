
const isAuthorized = (req, res, next) => {
    if(!req.oidc.isAuthenticated() ){
        res.setHeader("Content-Type", "text/plain")
        res.status(400).send('Not Logged In Middleware');
        return        
    }
    next()
}

module.exports = {
    isAuthorized
}