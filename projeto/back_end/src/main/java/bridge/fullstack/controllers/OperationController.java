
package bridge.fullstack.controllers;

import bridge.fullstack.dtos.InputDto;
import bridge.fullstack.models.OperationModel;
import bridge.fullstack.services.OperationService;

import java.time.LocalDateTime;
import java.time.ZoneId;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3000)
@RequestMapping("api")
public class OperationController {
    
    @Autowired
    OperationService operationService;
    
    @GetMapping("access-history")
    public ResponseEntity<Object> accessHistory() {
        return ResponseEntity.status(HttpStatus.CREATED).body(operationService.findAll());
    }
    
    @PostMapping("add-history")
    public ResponseEntity<Object> addToHistory(@RequestBody @Valid InputDto inputDto){       
        var operationModel  = new OperationModel();
        operationModel.setNumber(inputDto.getNumber());
        operationModel.setRegistrationDate(LocalDateTime.now(ZoneId.of("UTC")));
        return ResponseEntity.status(HttpStatus.CREATED).body(operationService.save(operationModel));
    }
}
