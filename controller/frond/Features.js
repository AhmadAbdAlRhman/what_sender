const Post = require('../../models/posts');
const Plan = require('../../models/plans');


module.exports.index = async (req, res) => {
    try {
        const locale = req.get('Accept-Language') || 'en';

        const features = await Post.findAll({
            where: {
                type: 'feature',
                status: 1,
                lang: locale
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
                lang: locale
            },
            // include: ['excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        // Optional SEO metadata (if using)
        const metadata = {
            seo: 'seo_features'
        };

        res.json({
            success: true,
            data: {
                features,
                faqs
            },
            metadata
        });
    } catch (err) {
        console.error('Features index error:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}

module.exports.show = async (req, res) => {
    try {
        const locale = req.get('Accept-Language') || 'en';
        const {
            slug
        } = req.params;

        const feature = await Post.findOne({
            where: {
                type: 'feature',
                lang: locale,
                slug
            },
            include: ['preview', 'excerpt', 'longDescription', 'banner']
        });

        if (!feature) {
            return res.status(404).json({
                success: false,
                message: 'Feature not found'
            });
        }

        const plans = await Plan.findAll({
            where: {
                status: 1,
                is_featured: 1
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        const meta = {
            title: feature.title || '',
            description: feature.excerpt ?.value || '',
            preview: feature.preview ?.value || ''
        };

        res.json({
            success: true,
            data: {
                feature,
                plans
            },
            metadata: meta
        });
    } catch (err) {
        console.error('Feature show error:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}