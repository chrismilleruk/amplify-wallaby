import { handler } from './index.typed';

test('index handler is a function', () => {
  expect(handler).toBeInstanceOf(Function)
});

test('call handler with built-in test event', async () => {
  const result = handler(require('./event.json'));
  expect(await result).toMatchObject({
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  })
})