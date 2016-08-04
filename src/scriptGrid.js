jQuery("#list").jqGrid({
   	url:'http://interview.kargo.co.id/api.html',
	datatype: "json",
   	colNames:['Id','Jenis Kendaraan', 'Kota Tujuan', 'Kota Asal','Metric','Tgl Mulai','Tgl Selesai','Harga','Status'],
   	colModel:[
   		{name:'id',index:'id', width:55, sorttype:"int", sortable: true},
   		{name:'vehiclegroup__name',index:'vehiclegroup__name', width:120},
   		{name:'destination__name',index:'destination__name', width:120},
   		{name:'departure__name',index:'departure__name', width:120},
   		{name:'metric',index:'metric', width:50},
   		{name:'start_date',index:'start_date', width:80, sorttype:"date" },
   		{name:'end_date',index:'end_date', width:80, sorttype:"date"},
      {name:'price',index:'price', width:150, sorttype:"float"},
      {name:'loadcap__name',index:'loadcap__name', width:55}
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#pager',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    caption:""
});
  //jQuery("#list").jqGrid('navGrid','#pager',{edit:false,add:false,del:false});
  jQuery("#list").jqGrid('filterToolbar', { stringResult: true, searchOnEnter: false, defaultSearch: "cn" });
  
