const Option = require('../models/options');
module.exports.getOption = async (key, parseJson = false, fallback = null) => {
    const option = await Option.findOne({
        where: {
            key
        }
    });
    if (!option) return fallback;
    try {
        return parseJson ? JSON.parse(option.value) : option.value;
    } catch (e) {
        console.error('Error parsing option JSON:', e);
        return fallback;
    }
};