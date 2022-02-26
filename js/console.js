var c = document.createElement('div');
c.id = 'console';
document.appendChild(c);
window.onerror = (err) =>
{
	c.innerHTML += `${err.name} : ${err.message}`;
}
