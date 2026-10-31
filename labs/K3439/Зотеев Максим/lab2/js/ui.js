// Общие функции отображения данных
export function formatPrice(value) {
  return `${Number(value).toLocaleString('ru-RU')} ₽`;
}

export function formatDate(value) {
  return new Date(value).toLocaleDateString('ru-RU', { timeZone: 'UTC' });
}

export function propertyPhoto(property, width) {
  const [photo] = property.photos;
  if (!photo) return { src: 'img/no-photo.svg', alt: 'Фото не добавлено' };
  return { src: `${photo.url}?w=${width}`, alt: photo.alt };
}

export function showAlert(element, text, type = 'danger') {
  element.className = `alert alert-${type}`;
  element.textContent = text;
  element.hidden = false;
}

export function hideAlert(element) {
  element.hidden = true;
}

export function formData(form) {
  return Object.fromEntries(new FormData(form));
}
