# pricing-service

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

curl -fsSL https://bun.sh/install | bash

exec /bin/zsh
bun run src/server.ts

This project was created using `bun init` in bun v1.1.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

The API inludes all days e.i the first and last days

https://localhost:443/price?customerId=X&startDate=2019-09-20&endDate=2019-10-01
https://localhost:443/price?customerId=Y&startDate=2018-01-01&endDate=2019-10-01
