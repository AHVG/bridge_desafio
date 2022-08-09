
package bridge.fullstack.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "operations")
public class OperationModel implements Serializable {
    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(nullable = false)
    private Integer number;
    
    @Column(nullable = false)
    private Integer answer;
    
    @Column(nullable = false)
    private long responseTime;
    
    @Column(nullable = false)
    private LocalDateTime registrationDate;
    
    public void setId(long newId){
        this.id = newId;
    }
    
    public long getId(){
        return this.id;
    }
    
    public void setNumber(Integer newNumber){
        this.number = newNumber;
    }
    
    public Integer getNumber(){
        return this.number;
    }
    
    public void setAnswer(Integer newAnswer){
        this.answer = newAnswer;
    }
    
    public Integer getAnswer(){
        return this.answer;
    }
    
    public void setResponseTime(long newResponseTime){
        this.responseTime = newResponseTime;
    }
    
    public long getResponseTime(){
        return this.responseTime;
    }
    
    public void setRegistrationDate(LocalDateTime newRegistrationDate){
        this.registrationDate = newRegistrationDate;
    }
    
    public LocalDateTime getRegistrationDate(){
        return this.registrationDate;
    }
}
