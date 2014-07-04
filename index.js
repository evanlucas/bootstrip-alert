var $ = require('dom')

module.exports = Alert

function Alert(ele) {
  if (!(this instanceof Alert))
    return new Alert(ele)

  this.ele = $(ele)
  this.ele.on('click', '[data-dismiss="alert"]', this.close.bind(this))
}

Alert.prototype.close = function(e) {
  console.log('close')
  var ele = $(e.target)

  var sel = ele.data('target')

  if (!sel) {
    sel = ele.attr('href')
  }

  var parent = sel && sel.length ? $(sel) : ele.parent()

  // TODO: Allow preventDefault()
  this.ele.emit('close.bs.alert')

  this.ele.removeClass('in')

  // TODO: add option for transition
  this.ele.emit('closed.bs.alert')
  this.ele.remove()
}
