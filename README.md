# Pay Slip - Using React, Redux and Redux Saga

Experiments with Saga.

### Set up and test

1. Unzip to payslip folder and run:

    ```sh
    npm install
    npm start
    ```

2. Open [http://localhost:8080/](http://localhost:8080/)

3. Run tests:

    ```sh
    npm test
    ```
    
### Notes/Assumptions
1. Select any day/date of the month, pay slip will calculate for the remaining days including full month if first day selected.
2. The remaining days include weekends, this may not be the best or accurate way to calculate the monthly pay.