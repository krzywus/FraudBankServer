package com.krzywus.bkl4.services;

import com.krzywus.bkl4.model.Transfer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface TransferService {
    Optional<Transfer> findTransferById(int id);
    Page<Transfer> findAll(Pageable pageable);
    Transfer saveTransfer(Transfer transfer);
}
