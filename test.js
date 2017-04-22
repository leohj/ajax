//Manipula la data para imprimirla
$.getJSON("heroes.json",function(data){
	$.each( data.heroes, function( a, b ) {
		var urlimage="img/"+ b.name+"_hphover.png"
		var content="";
		content+="<div class=\"profile\">";
		content+=	"<img src="+urlimage+">";
		content+=	"<span>"+b.localized_name+"</span>";
		content+="</div>"
		$( "#demo" ).append(content);

/*		$( "<div>" ).attr( "class", "profile").attr.("data-value",b.localized_name).appendTo( "#demo" );

		$( "<img>" ).attr( "src", tmp).appendTo( "#demo" );
		$( "#demo" ).append( "<span class=texto>"+b.localized_name+"</span>" );
		console.log(b.localized_name);
	*/
	});
	var lista=[];
	for(var i = 0 ; i<data.heroes.length ; i++){
		lista.push( data.heroes[i].localized_name )
	};
	$( "#tags" ).autocomplete({
      source: lista
    });

});
