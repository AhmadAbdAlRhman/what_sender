const Post = require('../../models/posts');
const Plan = require('../../models/plans');
const User = require('../../models/users');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
async function generateAuthKey() {
    const key = uuidv4() + uuidv4();
    const exists = await User.findOne({
        where: {
            authkey: key
        }
    });
    return exists ? await generateAuthKey() : key;
}

module.exports.index = async (res, req) => {
    try {
        const locale = req.get('Accept-Language') || 'en';

        const faqs = await Post.findAll({
            where: {
                type: 'faq',
                featured: 1,
                lang: locale
            },
            include: ['excerpt'],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        const plans = await Plan.findAll({
            where: {
                status: 1
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return res.json({
            success: true,
            data: {
                faqs,
                plans
            },
            message: 'Pricing data loaded successfully'
        });
    } catch (err) {
        console.error('Error loading pricing page:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}

module.exports.register = async (req, res) => {
    try {
        const plan = await Plan.findOne({
            where: {
                id: req.params.id,
                status: 1
            }
        });

        if (!plan) return res.status(404).json({
            success: false,
            message: 'Plan not found'
        });

        return res.json({
            success: true,
            data: {
                plan
            },
            message: 'Plan details loaded successfully'
        });
    } catch (err) {
        console.error('Error loading register plan:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}

module.exports.registerPlan = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const existingUser = await User.findOne({
            where: {
                email
            }
        });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists'
            });
        }

        const plan = await Plan.findOne({
            where: {
                id: req.params.id,
                status: 1
            }
        });
        if (!plan) {
            return res.status(404).json({
                success: false,
                message: 'Plan not found'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            role: 'user',
            status: 1,
            plan: JSON.stringify(plan.data),
            plan_id: plan.id,
            will_expire: plan.is_trial ? new Date(Date.now() + plan.trial_days * 86400000) : null,
            authkey: await generateAuthKey(),
            password: hashedPassword
        });

        // Simulated login (optional: use JWT/token here)
        req.session.user = user;

        const nextStep = user.will_expire ?
            '/user/device/create' :
            `/user/subscription/${plan.id}`;

        return res.json({
            success: true,
            data: {
                user,
                nextStep
            },
            message: 'User registered successfully'
        });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}