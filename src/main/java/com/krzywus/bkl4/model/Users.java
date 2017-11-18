package com.krzywus.bkl4.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int staffId;

    @Column(name = "username")
    private String firstName;

    @Column(name = "is_available")
    private boolean isAvailable = true;

    @JsonIgnore
    @Column(name = "password")
    private String password;

}