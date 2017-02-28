console.log('container.js');

var iframeSrcUrl = 'https://jsfiddle.net/q1u81qw2/5/';

function injectContainerFrame() {
  var $iframe = $('#my-iframe2');

  if (!$iframe.length) {
    $iframe = $('<iframe />', {
      name: 'my-iframe2',
      id: 'my-inner2',
      src: iframeSrcUrl
    });

    // Apply some CSS so things look awesome
    $iframe.css({
      width: '100%',
      height: '100%',
      position: 'absolute',
      border: 'none'
    });

    console.log('injecting jsfiddle iframe');

    $iframe.appendTo('body');
  }
}

// This debugger will not break!
debugger;

injectContainerFrame();
