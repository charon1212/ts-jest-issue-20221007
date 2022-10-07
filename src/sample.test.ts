it('sample', () => {
  type A = { x: true, a: string };
  type B = { x: false, b: number };
  type C = A | B;
  const f = (c: C) => {
    if (c.x) {
      console.log(c.a);
      expect(c.a).toBe('hoge');
    } else {
      console.log(c.b);
      expect(c.b).toBe(123);
    }
  };
  f({ x: true, a: 'hoge' });
});
