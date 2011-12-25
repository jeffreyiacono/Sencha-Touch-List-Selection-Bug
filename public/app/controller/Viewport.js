/**
 * @class App.controller.Viewport
 * @extends Ext.app.Controller
 */
Ext.define('App.controller.Viewport', {
  extend: 'Ext.app.Controller',

  views: [
    'Viewport',
    'ReindeerList',
  ],

  stores: [
    'Reindeer'
  ],

  refs: [
    {
      selector   : 'appviewport',
      xtype      : 'appviewport',
      ref        : 'viewport',
      autoCreate : true
    },
    {
      selector   : 'reindeerlist',
      xtype      : 'reindeerlist',
      ref        : 'reindeerList',
    }
  ],

  init: function() {
    this.getViewport();
    this.getReindeerList().getStore().load();

    this.control({
      'button[go=refresh-reindeer]' : {
        tap: function(btn) {
          this.getReindeerList().getStore().load();
        }
      }
    })
  },
});
