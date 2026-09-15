package com.victor.agrotech.services;

import com.victor.agrotech.exceptions.RecursoNaoEncontradoException;
import com.victor.agrotech.models.Fazenda;
import com.victor.agrotech.repositories.FazendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FazendaService {

    @Autowired
    private FazendaRepository fazendaRepository;

    public List<Fazenda> listarTodas() {
        return fazendaRepository.findAll();
    }

    public Fazenda buscarPorId(Long id) {
        return fazendaRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Fazenda não encontrada com id: " + id));
    }

    public Fazenda criar(Fazenda fazenda) {
        return fazendaRepository.save(fazenda);
    }

    public Fazenda atualizar(Long id, Fazenda fazenda) {
        Fazenda fazendaExistente = buscarPorId(id);

        fazendaExistente.setNome(fazenda.getNome());
        fazendaExistente.setLocal(fazenda.getLocal());
        fazendaExistente.setArea(fazenda.getArea());
        fazendaExistente.setCultura(fazenda.getCultura());
        fazendaExistente.setMaquinas(fazenda.getMaquinas());

        return fazendaRepository.save(fazendaExistente);
    }

    public void excluir(Long id) {
        if (!fazendaRepository.existsById(id)) {
            throw new RecursoNaoEncontradoException("Fazenda não encontrada com id: " + id);
        }
        fazendaRepository.deleteById(id);
    }
}