const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  // Kullanıcı girişi boşsa uyarı ver
  if (input.trim() === '') {
    alert('Please provide a phone number');
    return;
  }

  // Telefon numaralarını doğrulamak için regex (opsiyonel ülke kodu (1), opsiyonel boşluklar/çekişler)
  const phoneRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?([0-9]{3})[\s\-]?([0-9]{4})$/;

  // Numara geçerli mi kontrol et
  const result = phoneRegex.test(input) ? 'Valid' : 'Invalid';
  const resultColor = phoneRegex.test(input) ? '#00471b' : '#4d3800';

  // Yeni bir sonuç paragrafı oluştur
  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  pTag.textContent = `${result} US number: ${input}`;
  pTag.style.color = resultColor;
  resultsDiv.appendChild(pTag);
};

// "Check" butonuna tıklanırsa numarayı kontrol et ve giriş alanını temizle
checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

// Enter tuşuna basıldığında numarayı kontrol et ve giriş alanını temizle
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

// "Clear" butonuna tıklanırsa tüm sonuçları temizle
clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = ''; // Tüm sonuçları temizle
});
