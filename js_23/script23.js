const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1].focus(), 10)
        } 
        else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})

// >= 0 burada boşluk tuşunun calışmasını olanak sağlar eğer > 0 yazarsak boşluk tuşu calışmaz
