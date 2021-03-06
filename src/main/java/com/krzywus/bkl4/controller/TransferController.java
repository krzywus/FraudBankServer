package com.krzywus.bkl4.controller;

import com.krzywus.bkl4.model.Transfer;
import com.krzywus.bkl4.services.TransferService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor(onConstructor = @_(@Autowired))
@RequestMapping("transfer")
public class TransferController {

    TransferService transferService;

    @GetMapping(value={"/all"}, produces = "application/json")
    public List<Transfer> transferList(@RequestParam("username") String username){
        return this.transferService.findAll(username);
    }


    @GetMapping(value={"/id"}, produces = "application/json")
    public Transfer transferList(@RequestParam("id") int id){
        return this.transferService.findTransferById(id);
    }

    @GetMapping(value={"admin/all"}, produces = "application/json")
    public List<Transfer> unacceptedTransferList(){
        return this.transferService.findAllByAccepted(false);
    }

    @PostMapping(value={"admin/accept"}, produces = "application/json")
    public void unacceptedTransferList(@RequestBody Transfer transfer){
        this.transferService.acceptTransfer(transfer);
    }

    @PostMapping(produces = "application/json")
    public int receiveNewTransfer(@RequestBody Transfer transfer,
                                  @RequestParam String username){
        transfer.setUsername(username);
        transfer.setAccepted(false);
        return this.transferService
                .saveTransfer(transfer)
                .getTransferId();
    }
}
