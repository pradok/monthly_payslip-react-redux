export default class ApiTaxableIncome {
    static taxableIncome(args) {
        return new Promise(resolve => {
            setTimeout(() => {
                // mock income bracket list as if from server.
                const incomeBracket = [
                    {
                        min: 0,
                        max: 18200,
                        percent: 0,
                        amount: 0
                    },
                    {
                        min: 18201,
                        max: 37000,
                        over: 18200,
                        percent: 19,
                        amount: 0
                    },
                    {
                        min: 37001,
                        max: 80000,
                        over: 37000,
                        percent: 32.5,
                        amount: 3572
                    },
                    {
                        min: 80001,
                        max: 180000,
                        over: 80000,
                        percent: 37,
                        amount: 17547
                    },
                    {
                        min: 180001,
                        max: null,
                        over: 180000,
                        percent: 45,
                        amount: 54547
                    }

                ];
                resolve(incomeBracket);
            }, 500);
        });
    }
}
