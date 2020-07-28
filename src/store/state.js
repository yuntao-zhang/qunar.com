let defayltCity = '上海'
try {
  if (localStorage.getItem) {
    defayltCity = localStorage.getItem('city')
  }
} catch (e) {}

export default {
  city: defayltCity
}
