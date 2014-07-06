var $ = require('dom')
  , inherits = require('inherits')
  , EE = require('events').EventEmitter

module.exports = Alert

function Alert(ele) {
  if (!(this instanceof Alert))
    return new Alert(ele)

  EE.call(this)
  this.ele = $(ele)

  this.ele.on('click', '[data-dismiss="alert"]', close)

  var self = this
  function close(e) {
    var ele = $(e.target)
    var sel = ele.data('target')

    if (!sel) {
      sel = ele.attr('href')
    }

    var parent = sel && sel.length ? $(sel) : ele.parent()

    // TODO: allow preventDefault()

    self.emit('close.bs.alert')

    parent.removeClass('in')

    // TODO: Check for isDefaultPrevented()
    // TODO: Allow for transition support
    parent.remove()

    self.emit('closed.bs.alert')
  }
}

inherits(Alert, EE)
