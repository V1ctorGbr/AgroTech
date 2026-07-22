package com.victor.agrotech.controllers;


import com.victor.agrotech.models.Fazenda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FazendaRepository extends JpaRepository<Fazenda, Long> {

}