$(document).ready (function() {
  // $(document).on('ready turbolinks:load', function() {
  
  $('#product_category_name').autocomplete({
    minLength: 0,
    source: $('#product_category_name').data('autocomplete-source')
  });

  $('#product_brand_name').autocomplete({
    minLength: 0,
    source: $('#product_brand_name').data('autocomplete-source')
  });

  $('#product_engine_name').autocomplete({
    minLength: 0,
    source: $('#product_engine_name').data('autocomplete-source')
  });

});