
//var MyView = Backbone.View.extend({
//
//    attributes:{
//        id:'main',
//        class:'blue',
//        'data-record':56
//    },
//    className:'red',
////    tagName:"li",
////    tagName:"td",
//    tagName:"section",
//
//    initialize:function(){
//        console.log('started',this);
//    },
//    render : function(){
//        this.$el.append('<h2>Hello World</h2>');
//        return this;
//    }
//
//});
//var myview1 = new MyView();
//console.log(myview1);
//
//$('#container').append(myview1.render().el);

var MyView2 = Backbone.View.extend({

    render : function(){
        var self = this;
        $.get('templates/content.html',function(template){
            var data = {title:'abc',discreption:'xyz'};
            var compiled = _.template(template);
            self.$el.append(compiled(data));
        });
        return this;
    },
    func:function(e){
        console.log(e);
       console.log( e.currentTarget);
    },
    events : {
        'click #foo':'func'
    }
});
var myview3 = new MyView2();
$('#container').append(myview3.render().el);