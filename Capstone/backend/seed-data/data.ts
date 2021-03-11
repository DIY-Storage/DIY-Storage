function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    unitSize: '5 x 10',
    options: "Smart access, motion camera, Flexible payment, Discount options",
    price: 65,
    total: 10,
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    unitSize: '10 x 10',
    options: "Smart access, motion camera, Flexible payment, Discount options",
    price: 75,
    total: 20,
  },
  {
    unitSize: '10 x 15',
    options: "Smart access, motion camera, Flexible payment, Discount options",
    price: 90,
    total: 12,
  },
  {
    unitSize: '10 x 20',
    options: "Smart access, motion camera, Flexible payment, Discount options",
    price: 110,
    total: 18,
  },
  {
    unitSize: '10 x 30',
    options: "Smart access, motion camera, Flexible payment, Discount options",
    price: 165,
    total: 14,
  },
  {
    unitSize: '10 x 40',
    options: "Smart access, motion camera, Flexible payment, Discount options",
    price: 204,
    total: 12,
  },
  
];
