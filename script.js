document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.filter;
      document.querySelectorAll('.project').forEach(project => {
        const projectCategory = project.dataset.category;
        if (category === 'all' || category === projectCategory) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });