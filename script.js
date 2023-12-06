const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Eva', 'David', 'Sophia', 'Michael', 'Olivia'];

document.getElementById('generateButton').addEventListener('click', generateRandomName);

function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const generatedName = names[randomIndex];
    document.getElementById('generatedName').textContent = generatedName;
}