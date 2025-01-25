# Spis treści

- [Opis](#opis)
- [Część techniczna](#część-techniczna)
  - [Wymagania](#wymagania)
  - [Uruchamianie](#uruchamianie)
  - [Testowanie](#testowanie)
- [Dokumentacja](#dokumentacja)
  - [Store](#store)
    - [Używanie](#używanie)
    - [Dokumentacja API](#dokumentacja-api)

# Opis

Ten projekt pokazuje moje podejście do zadania rekrutacyjnego.

# Część techniczna

## Wymagania

* `node.js`
* `npm`

## Uruchamianie

1. Instalacja wymaganych paczek
```
npm install
```

2. Uruchomienie projektu

```
npm run start
```

Komenda odpowiedzialna jest za kompilację kodu w TypeScript do JavaScript, oraz uruchomienie go.

## Testowanie

Komenda uruchomi testy jednostkowe sprawdzające poprawność implementacji głównej funkcjonalności (`store.ts`)

```
npm run test
```

# Dokumentacja

## Store

Moduł `store.ts` dostarcza proste rozwiązanie do zarządzania stanem aplikacji. Pozwala na utworzenie magazynu stanu, wysyłanie akcji oraz subskrypcję zmian stanu.

### Używanie

```typescript
import { createStore } from './store';

const store = createStore(reducer, initialState);
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());
```

### Dokumentacja API

- **createStore(reducer, initialState)**: Tworzy nowy stan.
  - **Parametry**:
    - `reducer`: Funkcja określająca jak aktualizowany jest stan.
    - `initialState`: Początkowy stan.
  - **Zwraca**: Obiekt stanu z metodami `getState`, `dispatch` oraz `subscribe`.
