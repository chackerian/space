import { Mongo } from 'meteor/mongo';

// Listing
export const Listing = new Mongo.Collection('listing');

// Notification
export const Notification = new Mongo.Collection('notifications');

// Feedback
export const Feedback = new Mongo.Collection('feedback');

// Report
export const Report = new Mongo.Collection('report');

// Saves
export const Saves = new Mongo.Collection('save');
