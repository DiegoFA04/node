const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_Key;
        if (apiKey === 'leifer-01') {
            next();
        } else {
            res.status(403);
            res.send({ error: "ApiKey_no_valido" });
        }
    } catch (e) {
        res.status(403);
        res.send({ error: "Algo_ocurrio_en_el_custom_header" });
    }
}

module.exports = customHeader;