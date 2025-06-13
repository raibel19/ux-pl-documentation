import plugin from 'tailwindcss/plugin';

export default plugin(function tailwindStyles({ addComponents, matchVariant }) {
  addComponents({
    '.table-wrapper > table': {
      whide: '100%',
      tableLayout: 'fixed',
      borderCollapse: 'collapse',
    },
  });

  matchVariant(
    'col',
    (value) => {
      return [`& > table th:nth-child(${value})`, `& > table td:nth-child(${value})`];
    },
    {
      values: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  );
});
