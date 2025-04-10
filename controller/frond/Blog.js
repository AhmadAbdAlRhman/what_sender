const Post = require('../../models/posts');
const Category = require('../../models/categories');
const moment = require('moment');


module.exports.index = async (req, res) => {
    try {
        const locale = req.locale || 'en'; // Assuming you're setting locale somewhere
        const search = req.query.search || '';
        const date = req.query.date;

        let whereClause = {
            type: 'blog',
            lang: locale,
            status: 1
        };

        if (search) {
            whereClause.title = {
                [Op.like]: `%${search}%`
            };
        }

        if (date) {
            const parsedDate = moment(date).format("YYYY-MM-DD");
            whereClause.created_at = {
                [Op.gte]: `${parsedDate} 00:00:00`,
                [Op.lte]: `${parsedDate} 23:59:59`
            };
        }

        const blogs = await Post.findAndCountAll({
            where: whereClause,
            include: ["shortDescription", "preview"],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ],
            offset: (parseInt(req.query.page || 1) - 1) * 4
        });

        const recent_blogs = await Post.findAll({
            where: {
                type: 'blog',
                lang: locale,
                status: 1
            },
            // include: ["shortDescription", "preview"],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ]
        });

        const categories = await Category.findAll({
            where: {
                type: 'blog_category',
                lang: locale
            },
            // include: ['postcategories']
        });

        const tags = await Category.findAll({
            where: {
                type: 'tags',
                lang: locale
            },
            // include: ['postcategories']
        });

        res.json({
            blogs,
            recent_blogs,
            categories,
            tags
        });
    } catch (error) {
        console.error("Blog index error:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports.category = async (req, res) => {
    try {
        const {
            slug,
            id
        } = req.params;
        const locale = req.locale || 'en';
        const search = req.query.search || '';

        const category = await Category.findOne({
            where: {
                id,
                type: 'blog_category',
                status: 1
            }
        });
        if (!category) return res.status(404).json({
            message: "Category not found"
        });

        let blogWhere = {
            type: 'blog',
            lang: locale,
            status: 1
        };

        if (search) {
            blogWhere.title = {
                [Op.like]: `%${search}%`
            };
        }

        const blogs = await Post.findAndCountAll({
            where: blogWhere,
            // include: [
            //     "shortDescription",
            //     "preview",
            //     {
            //         association: "postcategories",
            //         where: {
            //             category_id: id
            //         }
            //     }
            // ],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ],
            offset: (parseInt(req.query.page || 1) - 1) * 4
        });

        const recent_blogs = await Post.findAll({
            where: {
                type: 'blog',
                lang: locale,
                status: 1
            },
            // include: ["shortDescription", "preview"],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ]
        });

        const categories = await Category.findAll({
            where: {
                type: 'blog_category',
                lang: locale,
                status: 1
            },
            // include: ['postcategories']
        });

        const tags = await Category.findAll({
            where: {
                type: 'tags',
                lang: locale,
                status: 1
            },
            // include: ['postcategories']
        });

        res.json({
            blogs,
            recent_blogs,
            categories,
            tags
        });
    } catch (err) {
        console.error("Category error:", err);
        res.status(500).json({
            message: "Server error"
        });
    }
}
module.exports.tag = async (req, res) => {
    try {
        const {
            slug,
            id
        } = req.params;
        const locale = req.locale || 'en';
        const search = req.query.search || '';

        const tag = await Category.findOne({
            where: {
                id,
                type: 'tags',
                status: 1
            }
        });

        if (!tag) return res.status(404).json({
            message: "Tag not found"
        });

        let blogWhere = {
            type: 'blog',
            lang: locale,
            status: 1
        };

        if (search) {
            blogWhere.title = {
                [Op.like]: `%${search}%`
            };
        }

        const blogs = await Post.findAndCountAll({
            where: blogWhere,
            include: [
                "shortDescription",
                "preview",
                {
                    association: "postcategories",
                    where: {
                        category_id: id
                    }
                }
            ],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ],
            offset: (parseInt(req.query.page || 1) - 1) * 4
        });

        const recent_blogs = await Post.findAll({
            where: {
                type: 'blog',
                lang: locale,
                status: 1
            },
            include: ["shortDescription", "preview"],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ]
        });

        const categories = await Category.findAll({
            where: {
                type: 'blog_category',
                lang: locale,
                status: 1
            },
            include: ['postcategories']
        });

        const tags = await Category.findAll({
            where: {
                type: 'tags',
                lang: locale,
                status: 1
            },
            include: ['postcategories']
        });

        res.json({
            blogs,
            recent_blogs,
            categories,
            tags
        });
    } catch (err) {
        console.error("Tag error:", err);
        res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports.show = async (req, res) => {
    try {
        const {
            slug
        } = req.params;
        const locale = req.locale || 'en';

        const blog = await Post.findOne({
            where: {
                slug,
                type: 'blog',
                status: 1
            },
            // include: ['shortDescription', 'longDescription', 'tags', 'preview', 'seo']
        });

        if (!blog) return res.status(404).json({
            message: "Blog not found"
        });

        const categories = await Category.findAll({
            where: {
                type: 'blog_category',
                lang: locale,
                status: 1
            },
            // include: ['postcategories']
        });

        const tags = await Category.findAll({
            where: {
                type: 'tags',
                lang: locale,
                status: 1
            },
            // include: ['postcategories']
        });

        const recent_blogs = await Post.findAll({
            where: {
                type: 'blog',
                lang: locale,
                status: 1
            },
            // include: ["shortDescription", "preview"],
            limit: 4,
            order: [
                ["created_at", "DESC"]
            ]
        });

        const seo = blog.seo ? JSON.parse(blog.seo.value) : {};
        const meta = {
            title: seo.title || '',
            description: seo.description || '',
            tags: seo.tags || '',
            preview: seo.image || ''
        };

        res.json({
            blog,
            categories,
            tags,
            recent_blogs,
            meta
        });
    } catch (error) {
        console.error("Blog show error:", error);
        res.status(500).json({
            message: "Server error"
        });
    }
}