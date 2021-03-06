package com.krzywus.bkl4.services;

import com.krzywus.bkl4.model.Transfer;

import java.util.List;

public interface TransferService {
    Transfer saveTransfer(Transfer transfer);
    Transfer findTransferById(int id);
    List<Transfer> findAll(String username);
    List<Transfer> findAllByAccepted(boolean accepted);
    void acceptTransfer(Transfer transfer) throws IllegalArgumentException;
}
