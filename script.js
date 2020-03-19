

const BRICKLINK = {
  nameSelector: '#item-name-title',
  categorySelector: '#content > div > table > tbody > tr > td:nth-child(1) > a:nth-child(3)',
}

const TITLE_REGEX = /^(?:(?<d1>\d+) x (?<d2>\d+)(?: x (?<d3>\d+))? ?)?(?<title>[\w  ]+)?/;
const SUBTITLE_REGEX = /^(?<title>[\w ]+?)(?: with (?<subtitle>[\w ]+))?$/;

LEGOS7.forEach(createLabel);
addLabelRemainingCounter(LEGOS7);


function createLabel(part) {
  getBricklinkHtml(part.id).then(([partTitle, category]) => {
    part.category = getCategory(part.category || category);
    if (partTitle.startsWith(category)) {
      partTitle = partTitle.substr(category.length + 1);
    }
    const titleGroups = TITLE_REGEX.exec(part.title || partTitle).groups;
    part.title = (part.title || partTitle)
      .replace(/ x /g, '×')
      .replace(/ ?1\/3/g, '⅓')
      .replace(/ ?2\/3/g, '⅔')
      .replace(/ ?3\/4/g, '¾')
      .replace(/ ?1\/2/g, '½')
      .replace(/^\d\d /g, '')
      .replace(' - ', ' ');
    let withSplitSubTitle;
    [part.title, withSplitSubTitle] = part.title.split(' with ');
    if (!part.subtitle && withSplitSubTitle) {
      part.subtitle = 'w/ ' + withSplitSubTitle;
    }
    else if (part.title.includes('×')) {
      const splitParts = part.title.split(' ');
      part.title = splitParts.shift();
      if (!part.subtitle && splitParts) {
        part.subtitle = splitParts.join(' ');
      }
    }
    if (part.category == 'Cone') {part.category = 'Brick, Cone';}
    part.isTitleNumeric = part.isTitleNumeric || part.title.includes('×');
    part.size = part.size || Math.max(...part.title.split('×')) || '';
    buildLabelElement(part);
  });
}

function getCategory(originalCategory) {
  originalCategory = originalCategory.replace(/^Minifigure/, 'Minifig');
  switch(originalCategory) {
    case 'Minifig, Utensil': 
      return 'Object';
    case 'Minifig, Weapon': 
      return 'Object, Weapon';
    case 'Minifig, Headgear': 
      return 'Minifig, Hat';
    case 'Minifig, Body Part':
      return 'Minifig, Part';
    case 'Animal, Body Part': 
      return 'Animal, Part';
    case 'Tail':
      return 'Vehicle, Tail';
    case 'Aircraft':
      return 'Vehicle, Aircraft';
    case 'Hinge':
      return 'Joint, Hinge';
    case 'Turntable':
      return 'Joint, Turntable';
    case 'Glass':
      return 'Window, Glass';
    case 'Windscreen':
      return 'Window, Vehicle'
    case 'Lever':
      return 'Vehicle';
    case 'Door Frame':
      return 'Door, Frame';
    case 'Container':
      return 'Object, Storage';
    case 'Minifig, Legs Assembly':
      return 'Minifig, Legs';
    case 'Minifig, Torso Assembly':
      return 'Minifig, Torso';
    case 'Energy Effect':
      return 'Energy';
    default:
      return originalCategory;
  }
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
  buildIcon(part, $container);
  $('<div>').addClass('category').text(part.category).appendTo($container);
  buildTitle(part, $container);
  buildPartColor(part, $container);
}

function buildIcon(part, $container) {
  const $iconContainer = $('<div>').addClass('icon-container').appendTo($container);
  if (part.imageList) {
    const $multiContainer = $('<div>').addClass('icon-multi').appendTo($iconContainer);
    part.imageList.forEach(image => {
      const isUrl = ('' + image).startsWith('http');
      const imagePath = isUrl ? image : `https://img.bricklink.com/ItemImage/PN/11/${image}.png`
      const $iconDiv = $('<div>').addClass('icon-wrapper').appendTo($multiContainer);
      $('<img>').addClass('icon').toggleClass('colored', isUrl).prop('src', imagePath).appendTo($iconDiv);
    });
  } else {
    const imagePath = part.imagePath || `https://img.bricklink.com/ItemImage/PN/${part.imageColor || 11}/${part.id}.png`
    $('<img>').addClass('icon').toggleClass('colored', !!part.imageColor || !!part.imagePath)
      .prop('src', imagePath)
      .appendTo($iconContainer);
  }
  buildPartNumber(part, $iconContainer);
}

function buildPartNumber(part, $container) {
  if (!part.hideId) {
    $partNum = $('<div>').addClass('part-number').appendTo($container);
    if (part.assorted) {
      $partNum.text('(assorted)')
    } else {
      const ids = getAllIds(part);
      ids.sort(idSort);
      ids.forEach(partId => {
        $('<span>').text(partId).appendTo($partNum);
      });
    }
  }
}

function getAllIds(part) {
  return [part.id].concat(part.otherIds || []).filter(x => x);
}

function buildTitle(part, $container) {
  const useNumericFont = part.isTitleNumeric && part.title.split('×').length < 3;
  const $title = $('<div>').addClass('part-title')
    .toggleClass('title-numeric', useNumericFont)
    .text(part.title).appendTo($container);
  if (part.titleSize) {$title.css('font-size', part.titleSize);}
  if (part.title2) {
    $('<p>').addClass('part-title-2').text(part.title2).appendTo($title);
  }
  const $subtitle = $('<div>').addClass('part-subtitle').appendTo($container);
  if (part.title2) {
    $subtitle.css('margin-top',  '7px');
  }
  if (Array.isArray(part.subtitle)) {
    part.subtitle.forEach(line => $('<p>').text(line).appendTo($subtitle));
  } else {
    $subtitle.text(part.subtitle)
  }
}

function buildPartColor(part, $container) {
  if (part.color || part.colorTranslucent != null || part.color1 && part.color2) {
    $color = $('<div>').addClass('color')
      .toggleClass('translucent', !!part.colorTranslucent)
      .appendTo($container);
    $colorInner = $('<div>').addClass('color-inner').appendTo($color);
    if (part.color) {
      $colorInner.css('background-color', part.color);
    } else if (part.color1 && part.color2) {
      const gradiant = `linear-gradient(to bottom right, ${part.color1} 0%, ${part.color1} 49%, ${part.color2} 51%, ${part.color2} 100%)`;
      $colorInner.css('background', gradiant);
    } else {
      $colorInner.addClass('rainbow');
    }
  }
}

const ID_PARTS = /^(^\d+)(\D+.*)?$/;

function idSort(a, b) {
  const [aMatch, aDigits, aLetters] = ID_PARTS.exec(a);
  const [bMatch, bDigits, bLetters] = ID_PARTS.exec(b);
  if (aDigits == bDigits) {
    return (aLetters || '').localeCompare(bLetters || '');
  }
  return +aDigits < +bDigits ? -1 : 1;
}

function addLabelRemainingCounter(partsList) {
  const ROW_SIZE = 4;
  const labelsRemaining = 80 - partsList.length;
  if (labelsRemaining > ROW_SIZE) {
    $('<p>').text(labelsRemaining).css('color', 'red').appendTo('body');
  }
}