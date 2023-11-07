
        document.querySelector('.checkbox').addEventListener('change', function() {
    const textElement = document.querySelector('.text');
    textElement.textContent = this.checked ? 'Appreciated' : 'Appreciate';

    const svgIcon = document.querySelector('.svg-icon');
    svgIcon.style.transform = this.checked ? 'translate(-50%, -70%) scale(0.8)' : 'translate(-50%, -50%) scale(1)';
  });

 