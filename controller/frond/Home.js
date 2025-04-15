const Category = require('../../models/categories');
const Post = require('../../models/posts');
const Plan = require('../../models/plans');
const {getOption} = require('../../utils/options');
const {setMetadata} = require('../../utils/seo');
module.exports.index = async (req, res) => {
    try {
        const brands = await Category.findAll({
            where: {
                type: 'brand',
                status: 1
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });
        const testimonials = await Post.findAll({
            where: {
                type: 'testimonial'
            },
            // include: ['preview', 'excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        });
        const faqs = await Post.findAll({
            where: {
                type: 'faq',
                featured: 1,
                // lang: req.locale
            },
            // include: ['excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        })
        const plans = await Plan.findAll({
            where: {
                status: 1,
                is_featured: 1
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });
        const seoData = setMetadata("seo_home" ,res);
        const home = await getOption("home-page", true, true);
        const features_area = home?.brand?.status || "active";
        const brand_area = home?.brand?.status || "active";
        const account_area = home?.account_area?.status || "active";
        let heading = home?.heading?.title || "";
        heading = heading.replace("<strong>", "<span>").replace("</strong>", "</span>");

        // // 🔹 جلب مسار القالب (إذا كنت تستخدم EJS أو Pug، وإلا فأعد البيانات كـ JSON)
        // const themePath = await getOption("theme_path") || "frontend.index";

        // 🔹 إرسال البيانات كـ JSON إلى React
        return res.json({
            seo: seoData,
            brands,
            testimonials,
            faqs,
            plans,
            home,
            features_area,
            brand_area,
            account_area,
            heading,
            // themePath,
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

module.exports.team = async (req, res) => {
    try {
        const teams = await Post.findAll({
            where: {
                type: 'team'
            },
            // include: ['excerpt', 'preview'],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        const formattedTeams = teams.map(team => ({
            title: team.title,
            slug: team.slug,
            preview: team.preview ?.value || '',
            excerpt: team.excerpt ?.value ? JSON.parse(team.excerpt.value) : null
        }));

        const faqs = await Post.findAll({
            where: {
                type: 'faq',
                featured: 1,
                // lang: req.locale
            },
            // include: ['excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        res.json({
            teams: formattedTeams,
            faqs
        });
    } catch (error) {
        console.error('Error in HomeController team:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}

module.exports.about = async (req, res) => {
    try {
        const about = await getOption('about', true);
        const counter = await getOption('counter', true);

        const descriptions = about ?.description ?.split('<br>') || [];
        const facilities = about ?.facilities ?.split(',') || [];

        const features = await Post.findAll({
            where: {
                type: 'feature',
                featured: 1,
                // lang: req.locale 
            },
            // include: ['preview', 'excerpt'],
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 6
        });

        const teams = await Post.findAll({
            where: {
                type: 'team'
            },
            // include: ['excerpt', 'preview'],
            order: [
                ['createdAt', 'DESC']
            ]
        }).then(teams =>
            teams.map(team => ({
                name: team.title,
                position: team.slug,
                avatar: team.preview ?.value || '',
                socials: team.excerpt ?.value ? JSON.parse(team.excerpt.value) : null
            }))
        );

        const faqs = await Post.findAll({
            where: {
                type: 'faq',
                featured: 1,
                // lang: req.locale 
            },
            // include: ['excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        const plans = await Plan.findAll({
            where: {
                status: 1,
                is_featured: 1
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        res.json({
            about,
            counter,
            descriptions,
            facilities,
            features,
            teams,
            faqs,
            plans
        });
    } catch (error) {
        console.error('Error in HomeController about:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}

module.exports.faq = async (req, res) => {
    try {
        const faqs = await Post.findAll({
            where: {
                type: 'faq',
                // lang: req.locale 
            },
            // include: ['excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        res.json({
            faqs
        });
    } catch (error) {
        console.error('Error in HomeController faq:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}

module.exports.page = async (req, res) => {
    try {
        const {
            slug
        } = req.params;

        const page = await Post.findOne({
            where: {
                status: 1,
                type: 'page',
                slug
            },
            // include: ['seo', 'description']
        });

        if (!page) return res.status(404).json({
            error: 'Page not found'
        });

        const seo = page.seo ?.value ? JSON.parse(page.seo.value) : {};

        const meta = {
            title: seo.title || '',
            description: seo.description || '',
            tags: seo.tags || ''
        };

        res.json({
            page,
            meta
        });
    } catch (error) {
        console.error('Error in HomeController page:', error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
}
