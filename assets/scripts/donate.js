function switchForm(type) {
    const tabs = document.querySelectorAll('.donate-tab');
    const forms = document.querySelectorAll('.donate-form');
    tabs.forEach(tab => tab.classList.remove('active'));
    forms.forEach(form => form.classList.remove('active'));

    document.querySelector(`#form-${type}`).classList.add('active');
    event.target.classList.add('active');
}