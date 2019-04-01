/**
 * Si pasamos la clase 'more-text' coge el valor por defecto
 * Si pasamos la clase 'more-text-x" el texto se cortará hasta el length === x, donde x es un número
 * Si x es mayor que el length del texto a cortar, no se añadirá ellipsis
 */
function cutTextJS() {
  var moreTextSelector = document.querySelectorAll('[class*="more-text"]');
  var arrayMT = Array.from(moreTextSelector);
  arrayMT.forEach((element, loop) => {
    var defaultMaxLength = 300;

    var item = arrayMT[loop];
    var itemTxt = item.innerHTML.trim();
    var classToArray = item.className.split('-');
    
    if (classToArray.length === 3) {
      // Comprobación de que el item es mayor que el length que queremos cortar
      if (itemTxt.length > parseInt(classToArray[2])) {
        itemTxt = itemTxt.substring(0, classToArray[2]) + '...';
      }
    } else if (itemTxt.length > defaultMaxLength) {
      // Control de espacios en el substring
      var maxLength = itemTxt.charAt(defaultMaxLength) === ' ' ? defaultMaxLength - 2 : defaultMaxLength - 1;
      itemTxt = itemTxt.substring(0, maxLength) + '...';
    }
    item.innerHTML = itemTxt;
  });
}