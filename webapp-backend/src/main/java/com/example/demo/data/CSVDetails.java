package com.example.demo.data;

import javax.persistence.*;

@Entity
@Table(name = "temperature")
public class CSVDetails {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "uuid")
    private String uuid;

    @Column(name = "nine")
    private String nine;

    @Column(name = "unix")
    private String unix;

    @Column(name = "temp_C")
    private double temp_C;

    public CSVDetails() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getNine() {
        return nine;
    }

    public void setNine(String nine) {
        this.nine = nine;
    }

    public String getUnix() {
        return unix;
    }

    public void setUnix(String unix) {
        this.unix = unix;
    }

    public double getTemp_C() {
        return temp_C;
    }

    public void setTemp_C(double temp_C) {
        this.temp_C = temp_C;
    }
}
