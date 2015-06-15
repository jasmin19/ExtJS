Ext.application({
    name   : 'MyApp',

    launch : function() {

       Ext.create('Ext.Panel', {
            renderTo     : Ext.getBody(),
            width        : 600,
            height       : 250,
            bodyPadding  : 5,
            title        : 'My first Ext JS Code',
            html         : 'Hello <b>World</b>...'
    
        });

       Ext.create('Ext.Button', {
            text: 'Click me',
            renderTo: Ext.getBody(),
            width: 600,
            handler: function() {
                alert('You clicked the button!');
            }
        });

       Ext.create('Ext.slider.Single', {
            width: 600,
            value: 0,
            increment: 5,
            minValue: -50,
            maxValue: 50,
            renderTo: Ext.getBody()
});


    }
});

