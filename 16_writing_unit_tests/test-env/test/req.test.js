'use strict';
const { test } = require('tap');
const req = require('../req');

// strictDeepEqual is deprecated. strictSame() should be used
test('handles network errors', ({ strictSame, end }) => {
  req('ht‌tp://error.com', (err) => {
    strictSame(err, Error('network error'));

    end();
  });
});

// ifError is deprecated, error() should be used
test('responds with data', ({ ok, strictSame, error, end }) => {
  req('ht‌tp://example.com', (err, data) => {
    error(err);

    ok(Buffer.isBuffer(data));

    strictSame(data, Buffer.from('some data'));

    end();
  });
});
