# Gra „kamień, papier, nożyce”

To będzie gra prowadzona między użytkownikiem i komputerem, w której obaj gracze będą
wybierać przedmiot — kamień, papier lub nożyce. (Ewentualnie możesz opracować wersję
wykorzystującą dane wejściowe pochodzące od drugiego użytkownika). Kamień gniecie papier,
papier owija skałę, a nożyce tną papier. JavaScript możesz wykorzystać do opracowania własnej
wersji tej gry, umieszczając logikę w konstrukcji if. Ponieważ ten projekt jest nieco trudniejszy,
oto kilka sugerowanych kroków:

* 1. Utwórz tablicę przeznaczoną do przechowywania zmiennych przedstawiających
kamień, papier i nożyce.
* 2. Utwórz zmienną, dla której będzie losowo wybierana liczba z przedziału od 0 do 2
dla obu graczy. Ta liczba przedstawia indeks w tablicy składającej się z trzech
elementów.
* 3. Utwórz zmienną przechowującą odpowiedź wyświetlaną użytkownikowi. Może
zawierać losowo wybrane wyniki dla obu graczy — odpowiedni ciąg tekstowy
dopasowany w tablicy.
* 4. Zdefiniuj warunek przeznaczony do obsługi przedmiotów wybranych przez graczy.
Jeżeli obaj wybrali to samo, mamy remis.
* 5. Skorzystaj z warunków do przygotowania logiki gry i zwrócenia odpowiedniego
wyniku. To można zrobić na wiele sposobów, wykorzystując do tego konstrukcje
warunkowe. Możesz sprawdzić, czy indeks wartości wybranej przez gracza jest
większy i ogłosić zwycięstwo — wyjątkiem jest kamień tępiący nożyce.
* 6. Dodaj komunikaty wyświetlające wybory dokonane przez obu graczy oraz
ostateczny wynik gry.
