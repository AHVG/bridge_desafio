
package bridge.fullstack.services;

import bridge.fullstack.models.OperationModel;
import bridge.fullstack.repositories.OperationRepository;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OperationService {
    
    @Autowired
    OperationRepository operationRepository;
    
    @Transactional
    public OperationModel save(OperationModel operationModel) {
        var calculator = new SingleOperationCalculator();
        
        long start = System.currentTimeMillis();
        Integer result = calculator.calculate(operationModel.getNumber());
        long end = System.currentTimeMillis();
        long response_time = end - start;
        
        operationModel.setAnswer(result);
        operationModel.setResponseTime(response_time);
        return operationRepository.save(operationModel);
    }
    
    public List<OperationModel> findAll(){
        return operationRepository.findAll();
    }
    
}
