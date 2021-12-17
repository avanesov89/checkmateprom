"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
function initMasonry() {
  if ($(window).width() > 1000) {
    var colWidth = $('.container').width() / 5 - 20;
    var $grid = $('.portfolio__grid').masonry({
      columnWidth: colWidth,
      gutter: 25,
      itemSelector: '.portfolio__item'
    });
  } else if ($(window).width() <= 768) {
    return false;
  } else {
    var colWidth = $('.container').width() / 2;
    var $grid = $('.portfolio__grid').masonry({
      columnWidth: colWidth,
      gutter: 0,
      itemSelector: '.portfolio__item'
    });
  }
}
//# sourceMappingURL=main.js.map
