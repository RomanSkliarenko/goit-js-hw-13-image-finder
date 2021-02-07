// const refs = {
//   ta: document.querySelector('[id="ta"]'),
//   language: document.querySelector('[id="lan_one"]'),
//   input: document.querySelector('.input'),
//   btn: document.querySelector('.button'),
// };

// refs.btn.addEventListener('click', () => {
//   fetch(
//     `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=${refs.language.value}&q=${refs.input.value}&mt=1&onlyprivate=0&de=a%40b.c`,
//     {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '4a0f2b699emshbe33ba828db4003p1d8ef8jsnc1b936006d69',
//         'x-rapidapi-host':
//           'translated-mymemory---translation-memory.p.rapidapi.com',
//       },
//     },
//   )
//     .then(response => {
//       console.log(response.json());
//     })
//     .catch(err => {
//       console.error(err);
//     });
// });
