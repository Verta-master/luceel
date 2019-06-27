// Range slider
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 10,
    max: 22,
    values: [ 10, 22 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + ":00 час." );
      $( "#amount-max" ).val( ui.values[ 1 ] + ":00 час." );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + ":00 час." );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + ":00 час." );
});
