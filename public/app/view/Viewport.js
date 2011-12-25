Ext.define('App.view.Viewport', {
  extend: 'Ext.Container',
  xtype: 'appviewport',
  config: {
    fullscreen: true,
    layout: 'fit',
    items: [
      {
        xtype: 'reindeerlist'
      }
    ]
  }
});
