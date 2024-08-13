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

The API includes all days within the specified date range, including the start and end dates.

Endpoint
The API provides a single endpoint: /price.

Parameters
customerId - The ID of the customer for whom the price is being calculated.
Format: A single uppercase letter.

startDate - The start date of the service period.
Format: YYYY-MM-DD
Example: 2019-09-20

endDate - The end date of the service period.
Format: YYYY-MM-DD
Example: 2019-10-01

Valid Request:
https://localhost:443/price?customerId=X&startDate=2019-09-20&endDate=2019-10-01
Response: {"price": 6.16}

Valid Request:
https://localhost:443/price?customerId=Y&startDate=2018-01-01&endDate=2019-10-01
Response: {"price": 166.096}

Invalid Request (missing endDate):
https://localhost:443/price?customerId=Y&startDate=2018-01-01
Response: {"error": "Invalid input"}
