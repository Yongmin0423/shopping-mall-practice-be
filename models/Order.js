import mongoose from "mongoose";
import User from "./User.js";
import Product from "./Product.js";

const orderSchema = new mongoose.Schema(
  {
    shipTo: { type: String, required: true },
    contact: { type: String, required: true },
    totalPrice: { type: String, required: true },
    userId: { type: mongoose.ObjectId, ref: User },
    status: { type: String, default: "preparing" },
    orderNum: { type: String },
    items: [
      {
        productId: { type: mongoose.ObjectId, ref: Product },
        size: { type: String, required: true },
        qty: { type: Number, default: 1, required: true },
        price: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);
orderSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createdAt;
  return obj;
};

const Order = mongoose.model("Order", orderSchema);

export default Order;
