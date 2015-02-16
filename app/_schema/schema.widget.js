var mongoose = require ("mongoose");

var WidgetSchema = new mongoose.Schema({
  widgetId: String,
  name: String,
  icon: String
});

exports.Schema = WidgetSchema;
