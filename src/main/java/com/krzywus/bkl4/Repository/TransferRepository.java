package com.krzywus.bkl4.Repository;

import com.krzywus.bkl4.model.Transfer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransferRepository extends JpaRepository<Transfer, Long> {
    Page<Transfer> findAll(Pageable pageable);
    List<Transfer> findAllByUsername(String username);
    List<Transfer> findAllByAccepted(boolean accepted);
    Transfer findByRecipientAndAccountAndAmountAndTitle(
            String recipient, String account, String Amount, String Title);
}
