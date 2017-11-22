package com.krzywus.bkl4.services;

import com.krzywus.bkl4.model.Transfer;

import java.util.List;

public interface TransferService {
    Transfer saveTransfer(Transfer transfer);
    List<Transfer> findAll(String username);
    List<Transfer> findAllByAccepted(boolean accepted);
}
