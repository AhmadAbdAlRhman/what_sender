const express = require("express");
const router = express.Router();
const HomeController = require("../controller/frond/Home");


// Public Routes
router.get("/index", HomeController.index);
router.get("/about", HomeController.about);
// router.get("/blogs", BlogController.index);
// router.get("/blog/:slug", BlogController.show);
// router.get("/category/:slug/:id", BlogController.category);
// router.get("/tag/:slug/:id", BlogController.tag);
router.get("/team", HomeController.team);
// router.get("/how-its-work", HomeController.work);
router.get("/faq", HomeController.faq);
// router.get("/pricing", PricingController.index);
// router.get("/contact", ContactController.index);
// router.get("/features", FeaturesController.index);
// router.get("/feature/:slug", FeaturesController.show);
router.get("/page/:slug", HomeController.page);

// // Authenticated Routes (Guest Middleware in Laravel)
// router.get("/register/:id", authMiddleware.isGuest, PricingController.register);
// router.post("/register-plan/:id", authMiddleware.isGuest, PricingController.registerPlan);
// router.post("/send-mail", ContactController.sendMail);

// // Installer Routes
// router.post("/install/verify", InstallerController.verify);
// router.post("/install/migrate", InstallerController.migrate);

module.exports = router;
