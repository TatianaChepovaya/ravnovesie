var lang = document.getElementById('lang')
lang.onchange = function () {
  window.location = lang.options[lang.options.selectedIndex].value + 'index.html'
}
