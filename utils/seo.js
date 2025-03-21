const  getOption  = require("./options");

module.exports.setMetadata = async (key, res) => {
    try {
        const seo = await getOption(key, true);

        if (!seo) {
            return console.warn(`SEO metadata for '${key}' not found.`);
        }

        const metadata = {
            title: seo.site_name || process.env.APP_NAME,
            description: seo.matadescription || "",
            keywords: seo.matatag || "",
            image: seo.preview ? `${process.env.APP_URL}/${seo.preview}` : "",
            twitter_site: seo.twitter_site_title || "",
        };

        // Setting meta tags dynamically
        res.locals.meta = metadata;
    } catch (error) {
        console.error("Error setting SEO metadata:", error);
    }
};

module.exports.setPageMetadata = async (data, res) => {
    try {
        const metadata = {
            title: data.title || process.env.APP_NAME,
            description: data.description || "",
            keywords: data.tags || "",
            image: data.preview || "",
        };

        // Setting meta tags dynamically
        res.locals.meta = metadata;
    } catch (error) {
        console.error("Error setting page metadata:", error);
    }
};

