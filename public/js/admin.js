// Example: public/js/admin.js
async function loadMessages() {
  const res = await fetch('/contacts');
  const messages = await res.json();
  const list = document.getElementById('messages-list');
  list.innerHTML = '';
  messages.forEach(msg => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${msg.name}</strong> (${msg.email}):<br>${msg.message}`;
    list.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', loadMessages);