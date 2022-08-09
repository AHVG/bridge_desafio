
package bridge.fullstack.dtos;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

public class InputDto {
    
    @NotNull(message = "cannot be null")
    @Min(value = 3, message="must be equal or greater than 3")
    private Integer number;
    
    public void setNumber(Integer newNumber){
        this.number = newNumber;
    }
    
    public Integer getNumber(){
        return this.number;
    }
}
