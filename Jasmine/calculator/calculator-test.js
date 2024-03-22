describe("Loan Calculator", function() {
  describe("calculateMonthlyPayment", function() {
    it("should calculate the monthly payment correctly", function() {
      const values1 = { amount: 10000, years: 5, rate: 5 };
      expect(calculateMonthlyPayment(values1)).toEqual("188.71");

      const values2 = { amount: 20000, years: 10, rate: 3.5 };
      expect(calculateMonthlyPayment(values2)).toEqual("193.01");

      const values3 = { amount: 15000, years: 7, rate: 6.25 };
      expect(calculateMonthlyPayment(values3)).toEqual("248.45");
    });

    it("should return a result with 2 decimal places", function() {
      const values = { amount: 10000, years: 5, rate: 5 };
      const result = calculateMonthlyPayment(values);
      const decimals = (result.split(".")[1] || []).length;
      expect(decimals).toEqual(2);
    });

    it("should handle zero principle", function() {
      const values = { amount: 0, years: 5, rate: 5 };
      expect(calculateMonthlyPayment(values)).toEqual("0.00");
    });

    it("should handle zero years", function() {
      const values = { amount: 10000, years: 0, rate: 5 };
      expect(calculateMonthlyPayment(values)).toEqual("0.00");
    });

    it("should handle zero rate", function() {
      const values = { amount: 10000, years: 5, rate: 0 };
      expect(calculateMonthlyPayment(values)).toEqual("0.00");
    });

  });
});
