import subLoopStr from '../../code/day7/lesson1';

test('subLoopStr:1', () => {
  expect(subLoopStr('abab')).toBe(true);
});

test('subLoopStr:2', () => {
  expect(subLoopStr('abababc')).toBe(false);
});
