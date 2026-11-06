# MMI — interaktywna wersja A

Interfejs systemu multimedialnego zbudowany w React, CSS i SVG na podstawie dostarczonych fotografii. Ekrany i sterowanie są zaprogramowane. Wyjątkiem jest ilustracja samochodu w Audi drive select: wyświetlany jest wycięty fragment oryginalnej fotografii, z łagodnym przejściem tła. Układ obejmuje obudowę, górny wyświetlacz z paskiem skrótów, dolny panel klimatyzacji i dolne przyciski konsoli.

## Uruchomienie

```sh
npm install
npm run dev
```

- `npm run lint` — kontrola kodu.
- `npm run build` — wersja produkcyjna.
- `npm run preview` — podgląd wersji produkcyjnej.

## Muzyka

MEDIA → medioteka: utwory, albumy, wykonawcy, gatunki, ostatnio i często odtwarzane oraz własne pliki. „Dodaj muzykę” przyjmuje wiele plików audio. Nazwa `Wykonawca - Tytuł.mp3` jest dzielona na wykonawcę i tytuł; metadane ID3 nie są odczytywane. Maksymalny rozmiar pojedynczego pliku to 60 MB. Obsługiwane kodeki zależą od przeglądarki.

Pliki są przechowywane lokalnie w IndexedDB. Nie są wysyłane na serwer. Po odświeżeniu wracają do katalogu „Moja muzyka”. Można je tam usuwać. W razie niedostępnej pamięci aplikacja wyświetla komunikat i zachowuje plik tylko w bieżącej sesji.

Odtwarzacz obsługuje pauzę, wznowienie, przewijanie, następny/poprzedni utwór, głośność, losowanie oraz powtarzanie. Muzyka może grać podczas przeglądania innych sekcji. Korektor w Ustawienia → Dźwięk korzysta z filtrów Web Audio i wpływa na faktyczny dźwięk.

Dołączone trzy pliki WAV są krótkimi, wygenerowanymi dźwiękami demonstracyjnymi: „Nocna trasa”, „Poranek”, „Spokojny rytm”. Nie są nagraniami artystów widocznych na zdjęciach. Sekcja Radio korzysta z tych samych dźwięków demonstracyjnych; nie odbiera prawdziwych stacji FM ani transmisji internetowych.

## Nawigacja

NAWIGACJA → Szukaj → nazwa celu lub fikcyjny adres → podgląd trasy → Rozpocznij prowadzenie.

Mapa jest programowo rysowaną siecią ulic. Ma pięć lokalizacji demonstracyjnych, wyznaczenie trasy wzdłuż ulic, podsumowanie odległości i czasu oraz pierwszą wskazówkę manewru. Można ją przybliżać, oddalać, przesuwać i wyśrodkować. W ustawieniach można wybrać kolorystykę oraz widok 2D/3D. Dolny ekran pokazuje klawiaturę przy wyszukiwaniu; działa również zwykła klawiatura komputera.

To symulacja stanowiskowa z fikcyjnymi adresami, bez GPS, bieżącego ruchu, rzeczywistej mapy miasta ani prowadzenia podczas jazdy. Położenie samochodu nie zmienia się samo. Tryb automatycznego przybliżania jest przechowywanym ustawieniem, bez automatycznego przejazdu. Integracja rzeczywistych map i tras wymaga osobnego dostawcy danych.

## Klimatyzacja

Dolny ekran jest stale interaktywny. Obsługuje temperatury od 16 do 28°C co 0,5°C, synchronizację, włączanie/wyłączanie nawiewu, AUTO, A/C, maksymalne chłodzenie, obieg zamknięty, ogrzewanie i wentylację foteli. POJAZD → Klimatyzacja otwiera schemat kokpitu oraz SYNC / OFF / A/C MAX. Ustawienia udostępniają poziom nawiewu i jego kierunek. Jednostkę temperatury można zmienić w ustawieniach ogólnych; model przechowuje temperaturę w °C.

Są to stany symulacji: aplikacja nie kontroluje fizycznego pojazdu. Zachowanie SYNC i zakres temperatur są założeniami do porównania z konkretną wersją oryginalnego MMI.

## Scenariusze badawcze i zapis

- S1: MEDIA → Listy odtwarzania → Często odtwarzane utwory → Nocna trasa. Sukces następuje po rozpoczęciu faktycznego odtwarzania.
- S2: NAWIGACJA → Szukaj → Centrum Nauki → Rozpocznij prowadzenie.
- S3: POJAZD → Klimatyzacja → ustaw temperaturę kierowcy 22°C → SYNC. Sukces wymaga włączonego nawiewu i 22°C po obu stronach.

Po ukończeniu zadania można pobrać JSON ze zdarzeniami, czasami, aktywacjami, powrotami i AOI w pikselach CSS. Zmiana rozmiaru okna zapisuje nowy zestaw AOI. Log jest w pamięci do rozpoczęcia kolejnego scenariusza lub odświeżenia. Eksport nie jest jeszcze docelowym PUN_dane_badania.csv. Tryb swobodnej obsługi nie mierzy czasu zadania.

## Wierność wersji A

Odtworzono strukturę obu wyświetlaczy, proporcje paneli, układ kafelków i list, ciemnogranatowe tło, jasne obramowania, kolorystykę sekcji, boczne skróty, temperatury, fotelowe symbole i przyciski konsoli. Ilustracje kokpitu, foteli i pojazdu są autorskimi wektorowymi przybliżeniami; nie są oryginalnymi modelami 3D producenta. Nie należy traktować tej wersji jako zweryfikowanego odwzorowania piksel w piksel ani skali fizycznej 1:1.

Widoki odtwarzacza i podglądu trasy są rekonstrukcjami funkcjonalnymi, ponieważ nie dostarczono zdjęć wszystkich ich stanów. Niektóre elementy pojazdu są demonstracyjne: telefon nie wykonuje prawdziwych połączeń, a asysta kierowcy i kamera wymagają sprzętu, którego aplikacja nie symuluje. Formularz scenariuszy, opis zadania i podsumowanie są elementami stanowiska badawczego.

## Weryfikacja

Sprawdzono w Chromium: S1–S3, rzeczywiste odtwarzanie audio i zmianę `currentTime`, pauzę/wznowienie, przewijanie, głośność, kolejny utwór, import pliku, odtwarzanie z blob URL, zapis po odświeżeniu i usunięcie z biblioteki, wybór celu i trasę, temperatury i SYNC, eksport JSON i obecność AOI, brak błędów wykonania oraz brak poziomego przepełnienia przy 390 px. Obejrzano zrzuty głównych ekranów. Lint i kompilacja produkcyjna przechodzą.

Badanie powinno odbywać się na monitorze o stałym rozmiarze, po uzgodnieniu wymiarów, zachowania oryginału i szablonu prowadzącego. Wąski ekran służy tylko do podglądu.

## Użycie AI

Kod, grafiki SVG i dźwięki demonstracyjne przygotowano z pomocą Codex na podstawie dostarczonych materiałów. Weryfikacja obejmuje kod i działanie przeglądarkowe. Dokładną zgodność wizualną i zachowanie oryginalnego urządzenia należy jeszcze potwierdzić na urządzeniu.

## Czas i data

Pasek statusu i Ustawienia → Ogólne korzystają z zegara urządzenia uruchamiającego przeglądarkę, z jego lokalną strefą czasową. Zegar odświeża się co sekundę oraz po powrocie do okna. Nie korzysta z wpisanej na stałe daty ani osobnego serwera czasu. Sprawdzono zmianę minuty i zmianę daty o północy w strefie Europe/Warsaw.

W Audi drive select grafikę wektorową zastąpiono wycinkiem samochodu z dostarczonej fotografii. Kadrowanie jest wykonywane przez SVG viewBox i maskę CSS, bez generowania nowego auta ani zmiany oryginalnych pikseli pliku. Pozostałe widoki zachowują ilustracje wektorowe.
