// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).on('turbolinks:load', function() {
  // Initialize Semantic UI components
  $('.ui.dropdown').dropdown();
})
// Add any other JavaScript code you need to run on page load