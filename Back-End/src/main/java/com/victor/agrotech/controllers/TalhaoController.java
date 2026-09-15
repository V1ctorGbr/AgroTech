package com.victor.agrotech.controllers;

import com.victor.agrotech.models.Talhao;
import com.victor.agrotech.services.TalhaoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/talhoes")
@CrossOrigin(origins = "*")
public class TalhaoController {

    @Autowired
    private TalhaoService talhaoService;

    @GetMapping
    public ResponseEntity<List<Talhao>> listarTodos() {
        return ResponseEntity.ok(talhaoService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Talhao> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(talhaoService.buscarPorId(id));
    }

    @PostMapping("/fazenda/{fazendaId}")
    public ResponseEntity<Talhao> criar(
            @PathVariable Long fazendaId,
            @Valid @RequestBody Talhao talhao) {

        return ResponseEntity.ok(
                talhaoService.criar(fazendaId, talhao)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Talhao> atualizar(
            @PathVariable Long id,
            @Valid @RequestBody Talhao talhao) {

        return ResponseEntity.ok(
                talhaoService.atualizar(id, talhao)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {

        talhaoService.excluir(id);

        return ResponseEntity.noContent().build();
    }
}