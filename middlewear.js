const nw = (req, res, next) => {
    console.log(req.method);
    console.log("Whats new today..?")
    next();

};
const hdng = (req, res ,next) => {
    console.log("how r u dng..?");
    next();
};
module.exports = { nw, hdng};