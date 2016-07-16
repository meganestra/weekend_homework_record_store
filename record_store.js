var _ = require('lodash');

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0
};

RecordStore.prototype = {
  numberOfRecords: function() {
    return this.inventory.length;
  },
  addRecord: function(record) {
    this.inventory.push(record);
  },
  // listInventory: function() {
  //   _(this.inventory).forEach(function(record){
  //     console.log("test");

  //     // "Record artist: " + record.artist + ", Record title: " + record.title + ", Record price: £" + record.price;
  // //   })
  // }
  


};

module.exports = RecordStore;

