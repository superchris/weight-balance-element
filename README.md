## weight-balance-element

A custom element to build an aircraft weight and balance form
with chart displaying cg limits.

Usage:

```html
<html>
<head>
  <script src="./dist/index.js"></script>
  <style>

  </style>
</head>
<body>
  <weight-balance
      basic-empty-weight="1235"
      basic-empty-arm="30.7"
      fuel-arm="40"
      cg-limits='[{"weight": 1000, "cg": 31}, {"weight": 1350, "cg": 31}, {"weight": 1675, "cg": 32.6}, {"cg": 36.5, "weight": 1675}, {"cg": 36.5, "weight": 1000}]'
      stations='[{"name": "Front Seats", "arm": 39},{"name": "Baggage Area 1", "arm": 64},{"name": "Baggage Area 2", "arm": 84}]'
    ></weight-balance>
</body>
</html>
```
