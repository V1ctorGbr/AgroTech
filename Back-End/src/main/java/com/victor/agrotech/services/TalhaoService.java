package com.victor.agrotech.services;

import com.victor.agrotech.exceptions.RecursoNaoEncontradoException;
import com.victor.agrotech.models.Fazenda;
import com.victor.agrotech.models.Talhao;
import com.victor.agrotech.repositories.FazendaRepository;
import com.victor.agrotech.repositories.TalhaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TalhaoService {

    @Autowired
    private TalhaoRepository talhaoRepository;

    @Autowired
    private FazendaRepository fazendaRepository;

    public List<Talhao> listarTodos() {
        return talhaoRepository.findAll();
    }

    public Talhao buscarPorId(Long id) {
        return talhaoRepository.findById(id)
                .orElseThrow(() ->
                        new RecursoNaoEncontradoException(
                                "Talhão não encontrado com id: " + id
                        )
                );
    }

    public Talhao criar(Long fazendaId, Talhao talhao) {

        Fazenda fazenda = fazendaRepository.findById(fazendaId)
                .orElseThrow(() ->
                        new RecursoNaoEncontradoException(
                                "Fazenda não encontrada com id: " + fazendaId
                        )
                );

        talhao.setFazenda(fazenda);

        return talhaoRepository.save(talhao);
    }

    public Talhao atualizar(Long id, Talhao dados) {

        Talhao talhaoExistente = buscarPorId(id);

        talhaoExistente.setNome(dados.getNome());
        talhaoExistente.setArea(dados.getArea());
        talhaoExistente.setCultura(dados.getCultura());

        return talhaoRepository.save(talhaoExistente);
    }

    public void excluir(Long id) {

        if (!talhaoRepository.existsById(id)) {
            throw new RecursoNaoEncontradoException(
                    "Talhão não encontrado com id: " + id
            );
        }

        talhaoRepository.deleteById(id);
    }
}