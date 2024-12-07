const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utilis/wrapAsync.js");
const ExpressError = require("../utilis/ExpressError.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listing.js");
const {validateReview , isLoggedIn, isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js");

//review
//post review route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Delete review route
router.delete("/:reviewId", isLoggedIn , isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports=router;