const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    propertyId: [{ type: String, required: true }, {category: String, required: true}],
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", WishlistSchema);