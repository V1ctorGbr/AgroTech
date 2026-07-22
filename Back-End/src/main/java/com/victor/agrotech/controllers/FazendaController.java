package com.victor.agrotech.controllers;

import com.victor.agrotech.models.Fazenda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fazendas")
@CrossOrigin(origins = "*")
public class FazendaController {

    @Autowired
    private FazendaRepository fazendaRepository;

    // Listar todas as fazendas
    @GetMapping
    public ResponseEntity<List<Fazenda>> listarTodas() {
        return ResponseEntity.ok(fazendaRepository.findAll());
    }

    // Buscar fazenda por ID
    @GetMapping("/{id}")
    public ResponseEntity<Fazenda> buscarPorId(@PathVariable Long id) {
        return fazendaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Criar nova fazenda
    @PostMapping
    public ResponseEntity<Fazenda> criar(@RequestBody Fazenda fazenda) {
        Fazenda novaFazenda = fazendaRepository.save(fazenda);
        return ResponseEntity.ok(novaFazenda);
    }

    // Atualizar fazenda
    @PutMapping("/{id}")
    public ResponseEntity<Fazenda> atualizar(
            @PathVariable Long id,
            @RequestBody Fazenda fazenda) {

        return fazendaRepository.findById(id)
                .map(fazendaExistente -> {
                    fazendaExistente.setNome(fazenda.getNome());
                    fazendaExistente.setLocal(fazenda.getLocal());
                    fazendaExistente.setArea(fazenda.getArea());
                    fazendaExistente.setCultura(fazenda.getCultura());
                    fazendaExistente.setMaquinas(fazenda.getMaquinas());

                    Fazenda fazendaAtualizada = fazendaRepository.save(fazendaExistente);

                    return ResponseEntity.ok(fazendaAtualizada);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Excluir fazenda
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {

        if (!fazendaRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        fazendaRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}