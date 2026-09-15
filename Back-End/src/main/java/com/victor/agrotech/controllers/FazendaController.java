package com.victor.agrotech.controllers;

import com.victor.agrotech.models.Fazenda;
import com.victor.agrotech.services.FazendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fazendas")
@CrossOrigin(origins = "*")
public class FazendaController {

    @Autowired
    private FazendaService fazendaService;

    @GetMapping
    public ResponseEntity<List<Fazenda>> listarTodas() {
        return ResponseEntity.ok(fazendaService.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Fazenda> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(fazendaService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Fazenda> criar(@RequestBody Fazenda fazenda) {
        return ResponseEntity.ok(fazendaService.criar(fazenda));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Fazenda> atualizar(
            @PathVariable Long id,
            @RequestBody Fazenda fazenda) {

        return ResponseEntity.ok(fazendaService.atualizar(id, fazenda));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        fazendaService.excluir(id);
        return ResponseEntity.noContent().build();
    }
}