package com.victor.agrotech.controllers;

import com.victor.agrotech.dto.UsuarioLoginDTO;
import com.victor.agrotech.dto.UsuarioRegisterDTO;
import com.victor.agrotech.dto.UsuarioResponseDTO;
import com.victor.agrotech.models.Usuario;
import com.victor.agrotech.security.TokenService;
import com.victor.agrotech.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/registrar")
    public ResponseEntity<UsuarioResponseDTO> registrar(@RequestBody UsuarioRegisterDTO dto) {
        return ResponseEntity.ok(usuarioService.registrar(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UsuarioLoginDTO dto) {
        var authToken = new UsernamePasswordAuthenticationToken(dto.email(), dto.senha());
        var auth = authenticationManager.authenticate(authToken);

        Usuario usuario = (Usuario) auth.getPrincipal();
        String token = tokenService.gerarToken(usuario);

        return ResponseEntity.ok(token);
    }
}