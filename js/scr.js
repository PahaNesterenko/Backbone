(function () {

	var m = Backbone.Model.extend({
		idAttribute: "uid",
		url: "https://api.vk.com/method/users.get?user_ids=1"
	});
	
	var D = new m({ uid: 1 });
	D.fetch();
	console.log(D.toJSON());

    var V = Backbone.View.extend({
        template : _.template( $("#templ").html() ),
		
		initialize: function(){
		console.log("init");
		this.$el = $("#main");
		
		},
		
		render: function(){
		
		console.log("render");
		this.$el.append( this.template() );
           return this;
		}

    });
	
	console.log("log");
	
	var v = new V();
	v.render();


}());