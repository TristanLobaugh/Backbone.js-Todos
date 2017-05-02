
const Todo = Backbone.Model.extend({
	defaults: {
		task: 'Cook Dinner',
		done: false
	}
});

const my_todo = new Todo();

const TodoView = Backbone.View.extend({
	initialize() {
		this.render();
	},
	template: _.template('<%= task %> | <%= done %>'),
	render() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

const todoView = new TodoView({ model: my_todo });
$('#todo').append(todoView.el);
