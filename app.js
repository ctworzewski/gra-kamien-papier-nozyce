let arr = ['kamien', 'papier', 'nozyce'];

let valueRandom = Math.floor(Math.random() * 3);
console.log(valueRandom)

let computer = arr[valueRandom];
let user = prompt('Podaj co wybierasz?');

console.log('Użytkownik wybrał: ', user);
console.log('Komputer wylosował: ', computer);
if (computer == user) {
    console.log('Wybrali to samo. Mamy remis!');
} else if ((computer == 'nozyce') && (user == 'papier')){
    console.log('Wygrały nozyce');
    
} else if ((computer == 'papier') && (user == 'kamien')) {
    console.log('Wygrał', computer);
} else if ((computer == 'kamien') && (user == 'nozyce')) {
    console.log('Wygrały ', computer);
} else if(user === '') {
    alert('Wprowadź jakąś wartość!');
}