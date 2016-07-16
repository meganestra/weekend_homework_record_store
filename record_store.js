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

  //     // "Record artist: " + record.artist + ", Record title: " + record.title + ", Record price: £" + record.price;
  // //   })
  // }
  sellRecord: function(record) {
    this.inventory.pop(record);
    this.balance += record.price;
  },
  calculateInventoryValue: function() {
    var inventoryValue = 0
    _(this.inventory).forEach(function(record){
      inventoryValue += record.price;
    })
    return inventoryValue;
  },
  financialReport: function() {
    return "Inventory value: " + this.calculateInventoryValue() + " Store balance: " + this.balance;
  }


};

module.exports = RecordStore;

