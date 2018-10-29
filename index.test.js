const rollup = require('rollup');
const pkg = require('./package.json');

let bundle;

it('supported by bundler', async () => {
  bundle = await rollup.rollup({
    input: pkg.module,
    external: Object.keys(pkg.peerDependencies),
  });
});

it('match the latest shapshot', () => {
  expect(bundle.exports).toMatchSnapshot();
});
