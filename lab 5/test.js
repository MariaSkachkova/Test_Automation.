name: Tests
on: [push, pull_request]
jobs:
  test:
    name: 'Test on Node.js v${{ matrix.node }} / ${{ matrix.os }}'
    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]
        node: [10, 12, 14, 16]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node }}
      - run: npm install
      - run: npm test
