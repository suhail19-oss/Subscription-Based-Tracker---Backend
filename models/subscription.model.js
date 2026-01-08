import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: [true, "Subcription price is required."],
      min: [0, "Price must be greater than 0."],
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "INR"],
      default: "INR",
    },
    frequency: {
      type: "String",
      enum: ["daily", "weekly", "monthly", "yearly"],
    },
    category: {
      type: String,
      enum: [
        "sports",
        "news",
        "entertainment",
        "technology",
        "finance",
        "politics",
        "others",
      ],
    },
    paymentMethod: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["active", "cancelled", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start Date must be in the past.",
      },
    },
    renewalDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "Renewal date must be after the Start date.",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);
