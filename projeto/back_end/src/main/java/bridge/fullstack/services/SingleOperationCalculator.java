
package bridge.fullstack.services;

import static java.lang.Math.floor;
import static java.lang.Math.sqrt;

public class SingleOperationCalculator {
 
    public SingleOperationCalculator() {
    }
    
    private int getDivisors(int number){
        int divisors = 2;
        for(int i = 2; i < ((int)floor(sqrt(number))) + 1; i++)
            if(number % i == 0)
                  divisors += (number/i == i) ? 1 : 2;
        return divisors;
    }
    
    public Integer calculate(Integer number){
        Integer asnwer = 0;
        for(int n = 2; n < number; n++)
            if(this.getDivisors(n) == this.getDivisors(n + 1))
                asnwer++;
        return asnwer;
    }
}
