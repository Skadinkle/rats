javascript: const faces = ['OwO ', 'UwU', 'TwT', '>w<', '^w^'];
let face = faces[Math.floor(Math.random()*faces.length)];
document.write('<body style=\'background-color: black;\'></body><title>' + face + '</title><p style=\'text-align: center; font-size: 500px; font-family: Arial; color: white;\'>' + face + '</p>');