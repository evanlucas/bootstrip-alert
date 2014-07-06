require('pbind')

var $ = require('dom')
  , Alert = require('../')
  , test = require('tape')

test('setup', function(t) {
  $(document.body).append('<div class="alert in">'+
    '<button type="button" class="close" data-dismiss="alert">x</button>'+
    '</div>')

  var a = $('.alert')
  t.ok(a.length, '.alert should exist')
  t.end()
})

test('alert', function(t) {
  t.plan(4)
  var a = $('.alert')
  var al = new Alert(a)
  t.ok(al instanceof Alert, 'al should be instanceof Alert')

  al.on('close.bs.alert', function() {
    t.pass('got close.bs.alert event')
  })

  al.on('closed.bs.alert', function() {
    t.pass('got closed.bs.alert event')
    t.notOk($('.alert').length, '.alert should no longer exist')
  })

  var btn = $('.close')
  btn[0].click()
})
