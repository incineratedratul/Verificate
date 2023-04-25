const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(profileForm);

  fetch('/api/update-profile', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Profile updated successfully');
    } else {
      alert('Error updating profile');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Error updating profile');
  });
});
