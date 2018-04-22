module('Methods (jQuery)', {
    setup: function(){
        this.$inputs = $('<input><input>')
            .datepicker()
            .appendTo('#qunit-fixture');
    },
    teardown: function(){
        this.$inputs.each(function(){
            $.data(this, 'datepicker').picker.remove();
        });
    }
});

test('Methods', function(){
    [
        'show',
        'hide',
        'set_value',
        'place'
    ].forEach($.proxy(function(index, _value){
        var returnedObject = this.$inputs.datepicker(_value);

        strictEqual(returnedObject, this.$inputs, "is jQuery element");
        strictEqual(returnedObject.length, 2, "correct length of jQuery elements");
    }, this));
});
