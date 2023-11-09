// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const opacityInput = document.getElementById('opacity');
    const fontSizeInput = document.getElementById('fontSize');
    const applyButton = document.getElementById('applySettings');
    const opacityValue = document.getElementById('opacityValue');
    const fontSizeValue = document.getElementById('fontSizeValue');
  
    // Функция для обновления отображаемых значений
    function updateValues() {
      opacityValue.innerText = opacityInput.value;
      fontSizeValue.innerText = fontSizeInput.value;
    }
  
    // Инициализация значений
    updateValues();
  
    // Обработчик изменения ползунков
    opacityInput.addEventListener('input', updateValues);
    fontSizeInput.addEventListener('input', updateValues);
  
    // Обработчик нажатия кнопки "Apply Settings"
    applyButton.addEventListener('click', function() {
      const opacity = opacityInput.value;
      const fontSize = fontSizeInput.value;
  
      // Отправляем сообщение с настройками в контентный скрипт
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { opacity, fontSize });
      });
    });
  });