console.log('content.js');

var iframeSrcUrl = chrome.extension.getURL('container.html');

console.log('src: ' + iframeSrcUrl);

function injectIframe() {
  var $iframe = $('#my-iframe');

  if (!$iframe.length) {
    $iframe = $('<iframe />', {
      name: 'my-iframe',
      id: 'my-inner',
      src: iframeSrcUrl
    });

    // Apply some CSS so things look awesome
    $iframe.css({
      width: '100%',
      height: '100%',
      position: 'absolute',
      border: 'none'
    });

    console.log('injecting container.html iframe');

    $iframe.appendTo('body');
  }
}

injectIframe();