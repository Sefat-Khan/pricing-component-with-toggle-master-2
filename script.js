
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle');
    const monthlyElements = document.querySelectorAll('.monthly');
    const annuallyElements = document.querySelectorAll('.annually');

    toggleButton.addEventListener('change', function () {
      monthlyElements.forEach(element => {
        element.style.display = toggleButton.checked ? 'inline' : 'none';
      });

      annuallyElements.forEach(element => {
        element.style.display = toggleButton.checked ? 'none' : 'inline';
      });
    });
  });

  