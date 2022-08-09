
package bridge.fullstack.repositories;

import bridge.fullstack.models.OperationModel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OperationRepository extends JpaRepository<OperationModel, Long> {}
