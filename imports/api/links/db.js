import { Mongo } from 'meteor/mongo';

// Listing
export const Listing = new Mongo.Collection('listing');

// Offer
export const Offer = new Mongo.Collection('offer');

// Notification
export const Notification = new Mongo.Collection('notifications');

// Message
export const Message = new Mongo.Collection('message');

// Feedback
export const Feedback = new Mongo.Collection('feedback');

// Report
export const Report = new Mongo.Collection('report');

// Saves
export const Saves = new Mongo.Collection('save');

// History
export const searchHistory = new Mongo.Collection('history');
