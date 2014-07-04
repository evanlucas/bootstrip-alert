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
  t.plan(3)
  var a = $('.alert')
  var al = new Alert(a)
  t.ok(al instanceof Alert, 'al should be instanceof Alert')

  a.on('close.bs.alert', function() {
    t.pass('got close.bs.alert event')
  })

  a.on('closed.bs.alert', function() {
    t.pass('got closed.bs.alert event')
  })

  a.find('[data-dismiss="alert"]').first().emit('click', {
    bubbles: true
  })
})
