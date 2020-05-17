describe("Calculator", function() { /* Calculator is the object and describe is the function */

    beforeEach(function() { /*before each run: */
        calc = new Calculator; /* creates the instance of the object */
    });

    describe("Addition function", function() {
        it("should return 42", function() {
            calc.add(20); /* calls the number function ones */
            calc.add(22); /* calls the number function ones again */
            expect(calc.value).toBe(42); /*(the) expect(-function) value to be 42 */
        });

        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });

        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert"); /* The spyOn-function will look for a function of the object window(because the alert()-function is a method of the object window) with the function-name "alert" included, see if it has been triggerd and if not, trigger it.*/
            calc.add("Hitchhikers")
            expect(window.alert).toHaveBeenCalledWith("Error!"); /* the return message */
        });
    });
});