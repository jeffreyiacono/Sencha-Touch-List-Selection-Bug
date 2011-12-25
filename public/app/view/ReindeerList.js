Ext.define('App.view.ReindeerList', {
  extend: 'Ext.dataview.List',
  xtype: 'reindeerlist',
  config: {
    fullscreen: true,
    layout: 'fit',
    title: 'Reindeer',
    store: 'Reindeer',
    loadingTest: 'Loading ...',
    itemTpl: '{name}',
    items: [
      {
        xtype: 'toolbar',
        ui: 'light',
        docked: 'top',
        layout: {
          pack: 'left'
        },
        defaults: {
          iconMask: true,
        },
        items: [
          {iconCls: 'refresh', go: 'refresh-reindeer'},
        ]
      }
    ]
  }
});

