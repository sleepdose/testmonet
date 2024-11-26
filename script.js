function createCharacter() {
    const nameInput = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const race = document.getElementById('race').value;
    const skinColor = document.getElementById('skinColor').value;

    // Проверка правильности имени (только буквы и цифры)
    const namePattern = /^[A-Za-zА-Яа-я0-9]+$/;

    if (!namePattern.test(nameInput) || nameInput.trim() === '') {
        alert('Имя может содержать только буквы и цифры!');
        return; // Прерываем выполнение функции, если имя некорректно
    }

    // Перенаправление на новую страницу с информацией о персонаже
    window.location.href = `character.html?name=${encodeURIComponent(nameInput)}&gender=${encodeURIComponent(gender)}&race=${encodeURIComponent(race)}&skinColor=${encodeURIComponent(skinColor)}`;
}
