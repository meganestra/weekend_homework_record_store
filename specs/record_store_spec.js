var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('chai').assert;

describe('Record Store', function(){

  beforeEach(function(){
    record1 = new Record("Drake", "Controlla", 2.79);
    record2 = new Record("Wutang Clan", "C.R.E.A.M", 1.79);
    record3 = new Record("Action Bronson", "Baby Blue", 2.99);
    recordStore1 = new RecordStore("Rub a dub", "Glasgow");

    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
  })

  it('should count the total records in the inventory', function(){
    assert.equal(3, recordStore1.numberOfRecords());
  })

  it('should add a record to the inventory and increase the store balance', function() {
    assert.equal(3, recordStore1.numberOfRecords());
  })

  // it('should list the inventory', function(){
  //   assert.equal("Record artist: Drake, Record title: Controlla, Record price: £2.79", recordStore1.listInventory());
  // })

})
