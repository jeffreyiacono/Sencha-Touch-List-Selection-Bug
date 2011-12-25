Ext.define('App.store.Reindeer', {
  extend: 'Ext.data.Store',
  model: 'App.model.Reindeer',
  requires: 'App.model.Reindeer',
  proxy: {
    type: 'ajax',
    url: 'data/reindeer.json',
    reader: {
      type: 'json',
      root: ''
    }
  }
});
