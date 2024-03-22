// helpers.test.js
describe('Helpers Tests', function() {
  // Test cases for sumPaymentTotal function
  describe('sumPaymentTotal', function() {
    it('should sum the total of bill amounts', function() {
      // Set up test data
      allPayments = {
        payment1: { billAmt: 20, tipAmt: 5 },
        payment2: { billAmt: 30, tipAmt: 7 },
      };

      // Call the function being tested
      const result = sumPaymentTotal('billAmt');

      // Assert the result
      expect(result).toEqual(50);
    });

    it('should sum the total of tip amounts', function() {
      // Set up test data
      allPayments = {
        payment1: { billAmt: 20, tipAmt: 5 },
        payment2: { billAmt: 30, tipAmt: 7 },
      };

      // Call the function being tested
      const result = sumPaymentTotal('tipAmt');

      // Assert the result
      expect(result).toEqual(12);
    });

    it('should return 0 when given an empty or invalid type', function() {
      // Set up test data
      allPayments = {};

      // Call the function being tested with invalid type
      const result1 = sumPaymentTotal('invalidType');
      // Call the function being tested with empty type
      const result2 = sumPaymentTotal();

      // Assert the results
      expect(result1).toEqual(0);
      expect(result2).toEqual(0);
    });
  });

  // Test cases for calculateTipPercent function
  describe('calculateTipPercent', function() {
    it('should calculate the tip percentage correctly', function() {
      // Call the function being tested
      const result = calculateTipPercent(100, 20);

      // Assert the result
      expect(result).toEqual(20);
    });
  });

  // Test cases for appendTd function
  describe('appendTd', function() {
    it('should append a new td element to the given tr element with the provided value', function() {
      // Set up test environment
      const tr = document.createElement('tr');

      // Call the function being tested
      appendTd(tr, 'Test Value');

      // Assert the DOM manipulation
      expect(tr.children.length).toEqual(1); // Ensure a new td element is appended
      expect(tr.children[0].textContent).toEqual('Test Value'); // Ensure the value is correct
    });
  });
});
