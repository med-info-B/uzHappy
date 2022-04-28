const info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};


const getTimeStamp = () => {
    return new Date().toISOString();
};

module.exports = {
    info,
};