document.addEventListener('DOMContentLoaded', function () {
  try {
    const elems = document.querySelectorAll('select');
    if (window.M && window.M.FormSelect) {
      window.M.FormSelect.init(elems);
    }
  } catch (e) {
    // ignore
  }

  const courseSelect = document.getElementById('course-select');
  const lessons = {
    intro: document.getElementById('lesson-intro'),
    sensors: document.getElementById('lesson-sensors'),
    orbits: document.getElementById('lesson-orbits'),
  };

  const showLesson = (key) => {
    Object.values(lessons).forEach((el) => el.classList.remove('active'));
    (lessons[key] || lessons.intro).classList.add('active');
  };

  courseSelect.addEventListener('change', (e) => {
    showLesson(e.target.value);
  });

  // Simple answer checks
  document.getElementById('q1-submit').addEventListener('click', () => {
    const val = (document.getElementById('q1').value || '').toLowerCase();
    document.getElementById('q1-result').textContent = val.includes('shift') && (val.includes('f1') || val.includes('f 1'))
      ? 'Correct: Shift + F1 opens help.'
      : 'Hint: Check the splash tips about help.';
  });

  document.getElementById('q2-submit').addEventListener('click', () => {
    const val = (document.getElementById('q2').value || '').toLowerCase();
    document.getElementById('q2-result').textContent = val.includes('look') && val.includes('angles')
      ? 'Correct: Look Angles.'
      : 'Hint: Explore the bottom menus related to sensors.';
  });

  document.getElementById('q3-submit').addEventListener('click', () => {
    const val = (document.getElementById('q3').value || '').toLowerCase();
    document.getElementById('q3-result').textContent = val === 'l' || val.includes('l key')
      ? 'Correct: Press the L key.'
      : 'Hint: One of the splash tips mentions this.';
  });
});


