'use strict';
const { test } = require('tap');
const req = require('../req-prom');

test('handles network errors', async ({ rejects }) => {
  await rejects(req('ht‌tp://error.com'), Error('network error'));
});

// strictDeepEqual is deprecated. strictSame() should be used
test('responds with data', async ({ ok, strictSame }) => {
  const data = await req('ht‌tp://example.com');

  ok(Buffer.isBuffer(data));

  strictSame(data, Buffer.from('some data'));
});
