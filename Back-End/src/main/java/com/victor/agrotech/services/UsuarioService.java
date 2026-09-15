package com.victor.agrotech.services;

import com.victor.agrotech.dto.UsuarioRegisterDTO;
import com.victor.agrotech.dto.UsuarioResponseDTO;
import com.victor.agrotech.exceptions.RecursoNaoEncontradoException;
import com.victor.agrotech.models.Usuario;
import com.victor.agrotech.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UsuarioResponseDTO registrar(UsuarioRegisterDTO dto) {
        if (usuarioRepository.existsByEmail(dto.email())) {
            throw new IllegalArgumentException("Já existe um usuário com este e-mail.");
        }

        Usuario usuario = new Usuario(
                dto.nome(),
                dto.email(),
                passwordEncoder.encode(dto.senha())
        );

        Usuario salvo = usuarioRepository.save(usuario);

        return new UsuarioResponseDTO(salvo);
    }

    public List<UsuarioResponseDTO> listarTodos() {
        return usuarioRepository.findAll()
                .stream()
                .map(UsuarioResponseDTO::new)
                .toList();
    }

    public Usuario buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Usuário não encontrado com e-mail: " + email));
    }
}