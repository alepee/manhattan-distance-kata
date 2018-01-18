FareCalculator
    FareRange
        static eligibleDistance():
        min
        max
        pricePerKm

        distance():
        price(): Money

    price(FareRange[]): Money


Money
    private number
    sum(money: Money): Money
