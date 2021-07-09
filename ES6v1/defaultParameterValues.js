const logger = (log, isAlert) => {
    if (isAlert) return console.log("Co alert");
    console.log(log);
};
// logger("Message...", false);

function Clg(msg, type = "log") {
    console[type](msg);
}
Clg("Hello!!!", "warn");
