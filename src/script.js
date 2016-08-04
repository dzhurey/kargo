(function() {
  var jqxhr = $.getJSON( "http://interview.kargo.co.id/api.html", function() {
console.log( "success" );
})
.done(function(data) {
  console.log( "second success" );
  var as = data.records;
  console.log(as);
  $.each(data.rows,function(i,item){
    console.log(item.vehiclegroup__name);
    $( "<div>" ).attr( "src", item.vehiclegroup__name ).appendTo( "#pager" );
  })

})
.fail(function() {
  console.log( "error" );
})
.always(function() {
  console.log( "complete" );
});


})();
