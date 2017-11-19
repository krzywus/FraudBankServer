package com.krzywus.bkl4.controller;

import com.krzywus.bkl4.model.Transfer;
import com.krzywus.bkl4.services.TransferService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor(onConstructor = @_(@Autowired))
@RequestMapping("transfer")
public class TransferController {

    TransferService transferService;

    @GetMapping(value ={"/id"})
    public Transfer getStaffById(@RequestParam("id") int id){
        return this.transferService.findTransferById(id).get();
    }

    @GetMapping(value={"/all"})
    public List<Transfer> transferList(){
        return this.transferService
                .findAll(new PageRequest(0,20)).getContent();
    }

    @PostMapping(produces = "application/json")
    public int receiveNewTransfer(@RequestBody Transfer transfer){
        return this.transferService
                .saveTransfer(transfer)
                .getTransferId();
    }
}
