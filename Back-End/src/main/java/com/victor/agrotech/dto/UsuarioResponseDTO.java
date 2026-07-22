package com.victor.agrotech.dto;

import com.victor.agrotech.models.Perfil;
import com.victor.agrotech.models.StatusUsuario;
import com.victor.agrotech.models.Usuario;

public record UsuarioResponseDTO(
    Long id,
    String nome,
    String email,
    Perfil perfil,
    StatusUsuario status
) {
    public UsuarioResponseDTO(Usuario usuario) {
        this(
            usuario.getId(),
            usuario.getNome(),
            usuario.getEmail(),
            usuario.getPerfil(),
            usuario.getStatus()
        );
    }
}