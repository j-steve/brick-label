

const BRICKLINK = {
  nameSelector: '#item-name-title',
  categorySelector: '#content > div > table > tbody > tr > td:nth-child(1) > a:nth-child(3)',
}

const TITLE_REGEX = /^(?:(?<d1>\d+) x (?<d2>\d+)(?: x (?<d3>\d+))? ?)?(?<title>[\w  ]+)?/;
const SUBTITLE_REGEX = /^(?<title>[\w ]+?)(?: with (?<subtitle>[\w ]+))?$/;

LEGOS2.forEach(createLabel);

function createLabel(part) {
  getBricklinkHtml(part.id).then(([partTitle, category]) => {
    part.category = part.category || category;
    if (partTitle.startsWith(category)) {partTitle = partTitle.substr(category.length + 1);}
    const titleGroups = TITLE_REGEX.exec(part.title || partTitle).groups;
    // const subtitleGroups = SUBTITLE_REGEX.exec(titleGroups.title).groups;
    // const subtitleGroups = SUBTITLE_REGEX.exec(part.title || partTitle).groups;
    // part.d1 = titleGroups.d1;
    // part.d2 = titleGroups.d2;
    // part.d3 = titleGroups.d3;
    // part.title = subtitleGroups.title;
    part.title = (part.title || partTitle)
      .replace(/ x /g, '×')
      .replace(/ 1\/3/g, '⅓')
      .replace('2/3', '⅔')
      .replace(/^45 /g, '')
      .replace(/^30 /g, ''); 
    let withSplitSubTitle;
    [part.title, withSplitSubTitle] = part.title.split(' with ');
    if (!part.subtitle && withSplitSubTitle) {part.subtitle = 'w/ ' + withSplitSubTitle;}
    else if (part.title.includes('×')) {
      const splitParts = part.title.split(' ');
      part.title = splitParts.shift();
      if (!part.subtitle && splitParts) {part.subtitle = splitParts.join(' ');}
    }
    part.isTitleNumeric = part.title.includes('×');
    //  {

    // }
    // if (!part.title) {
    //   if (partTitle.startsWith(category)) {
    //     partTitle = partTitle.substr(category.length + 1);
    //   }
    //   part.title = partTitle.replace(/ x /g, '×');
    //   const withSplit = part.title.split(' with ');
    //   if (withSplit.length > 1) {
    //     part.title = withSplit[0];
    //     if (!part.subtitle) {
    //       part.subtitle = 'w/' + withSplit[1];
    //     }
    //   }
    // }
    part.size = part.size || Math.max(...part.title.split('×')) || '';
    part.imgPath = part.imagePath || `https://img.bricklink.com/ItemImage/PN/${part.imageColor || 11}/${part.id}.png`
    buildLabelElement(part);
  });
}

function getBricklinkHtml(partId) {
  const storedValue = localStorage[partId];

  if (storedValue && JSON.parse(storedValue)[0]) {

    return $.Deferred(({resolve}) => resolve(JSON.parse(storedValue)));
  }
  return $.get({
    url: `https://cors-anywhere.herokuapp.com/https://www.bricklink.com/v2/catalog/catalogitem.page?P=${partId}`,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  }).then(resp => {

    $r = $(resp);
    const results = [
      $r.find(BRICKLINK.nameSelector).text(),
      $r.find(BRICKLINK.categorySelector).text(),
    ];
    if (results[0] || results[1]) {
      localStorage[partId] = JSON.stringify(results);
    }
    return results;
  }).catch(e => console.error(e));
}

function buildLabelElement(part) {
  const $container = $('<div>').addClass('part').appendTo('#labels');
  // const $containerInner = $('<div>').addClass('inner').appendTo($container);
  // const $left = $('<div>').addClass('left').appendTo($containerInner);
  // const $middle = $('<div>').addClass('middle').appendTo($containerInner);
  // const $right = $('<div>').addClass('right').appendTo($containerInner);
  
  $('<div>').addClass('category').text(part.category).appendTo($container);
  // const $righthand = $('<div>').addClass('righthand').appendTo($containerInner);
  
  const $iconContainer = $('<div>').addClass('icon-container').appendTo($container);
  $('<img>').addClass('icon').toggleClass('colored', !!part.imageColor || !!part.imagePath).prop('src', part.imgPath).appendTo($iconContainer);
  if (!part.hideId) {
    $('<div>').addClass('part-number').text(part.assorted ? '(assorted)' : part.id).appendTo($iconContainer);
  }

  $('<div>').addClass('part-title').toggleClass('title-numeric', part.isTitleNumeric && part.title.split('×').length < 3).text(part.title).appendTo($container);
  $('<div>').addClass('part-subtitle').text(part.subtitle).appendTo($container);
  if (part.color || part.colorTranslucent || part.color1 && part.color2) {
    $color = $('<div>').addClass('color').toggleClass('translucent', !!part.colorTranslucent).appendTo($container);
    $colorInner = $('<div>').addClass('color-inner').appendTo($color);
    if (part.color) {
      $colorInner.css('background-color', part.color);
    } else if (part.color1 && part.color2) {
      $colorInner.css('background', `linear-gradient(to bottom right, ${part.color1} 0%, ${part.color1} 44%, ${part.color2} 46%, ${part.color2} 100%)`);
    } else {
      $colorInner.addClass('rainbow');
    }
  }
  // $('<div>').addClass('size').text(part.size).appendTo($containerInner);

  // const $dimensionContainer = $('<div>').addClass('dimension-container').appendTo($container);
  // if (part.d1) {$('<div>').addClass('d1').text(part.d1).appendTo($dimensionContainer);}
  // if (part.d2) {$('<div>').addClass('d2').text(part.d2).appendTo($dimensionContainer);}
  // if (part.d3) {$('<div>').addClass('d3').text(part.d3).appendTo($dimensionContainer);}

}