(function () {


    var V = Backbone.View.extend({
        template : _.template( $("#templ").html() ),
		
		initialize: function(){
		console.log("init");
		this.$el = $("#main");
		
		},
		
		render: function(){
		
		console.log("render");this.$el.append( this.template() );
           return this;
		}

    });
	
	console.log("log");
	
	var v = new V();
	v.render();


}());