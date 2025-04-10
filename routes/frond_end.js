const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const HomeController = require("../controller/frond/Home");
const PricingController = require("../controller/frond/Pricing");
const FeaturesController = require("../controller/frond/Features");
const ContactController = require("../controller/frond/Contact");
const BlogController = require("../controller/frond/Blog");


// Public Routes
router.get("/index", HomeController.index);
router.get("/about", HomeController.about);
router.get("/blogs", BlogController.index);
router.get("/blog/:slug", BlogController.show);
router.get("/category/:slug/:id", BlogController.category);
router.get("/tag/:slug/:id", BlogController.tag);
router.get("/team", HomeController.team);
// router.get("/how-its-work", HomeController.work);
router.get("/faq", HomeController.faq);
router.get("/pricing", PricingController.index);
router.get("/contact", ContactController.index);
router.get("/features", FeaturesController.index);
router.get("/feature/:slug", FeaturesController.show);
router.get("/page/:slug", HomeController.page);

// // Authenticated Routes (Guest Middleware in Laravel)
router.get("/register/:id", PricingController.register);
router.post("/register-plan/:id", PricingController.registerPlan);
router.post("/send-mail", [
    body("name").notEmpty().isLength({
        max: 20
    }),
    body("email").isEmail().isLength({
        max: 40
    }),
    body("phone").notEmpty().isLength({
        max: 15
    }),
    body("subject").notEmpty().isLength({
        max: 100
    }),
    body("message").notEmpty().isLength({
        max: 500
    })
], ContactController.sendMail);

// // Installer Routes
// router.post("/install/verify", InstallerController.verify);
// router.post("/install/migrate", InstallerController.migrate);

module.exports = router;
/** */
/**, authMiddleware.isGuest, */