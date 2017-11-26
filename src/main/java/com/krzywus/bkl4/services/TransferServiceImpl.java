package com.krzywus.bkl4.services;

import com.krzywus.bkl4.Repository.TransferRepository;
import com.krzywus.bkl4.model.Transfer;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor(onConstructor = @_(@Autowired))
@NoArgsConstructor
public class TransferServiceImpl implements TransferService {
    private TransferRepository transferRepository;

    @Override
    public Transfer saveTransfer(Transfer transfer) {
        return transferRepository.save(transfer);
    }

    @Override
    public Transfer findTransferById(int id) {
        return transferRepository.findByTransferId(id);
    }

    @Override
    public List<Transfer> findAll(String username) {
        return transferRepository.findAllByUsername(username);
    }

    @Override
    public List<Transfer> findAllByAccepted(boolean accepted) {
        return transferRepository.findAllByAccepted(accepted);
    }

    @Override
    public void acceptTransfer(Transfer transfer) throws IllegalArgumentException{
        Transfer repositoryTransfer = transferRepository.findByTransferId(transfer.getTransferId());
        if (repositoryTransfer.isAccepted()) {
            throw new IllegalArgumentException();
        } else {
            repositoryTransfer.setAccepted(true);
            saveTransfer(repositoryTransfer);
        }
    }
}
