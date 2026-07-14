package com.gymmanager.controller;

import com.gymmanager.model.Usuario;
import com.gymmanager.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UsuarioService service;

    public AuthController(UsuarioService service) {
        this.service = service;
    }

    @PostMapping("/cadastro")
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return service.cadastrar(usuario);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {

        Usuario usuarioBanco = service.buscarPorEmail(usuario.getEmail());

        if (!usuarioBanco.getSenha().equals(usuario.getSenha())) {
            throw new RuntimeException("E-mail ou senha inválidos.");
        }

        return usuarioBanco;
    }

    @PostMapping("/esqueci-senha")
    public String esqueciSenha(@RequestBody Usuario usuario) {

        if (!service.existeEmail(usuario.getEmail())) {
            throw new RuntimeException("E-mail não encontrado.");
        }

        return "Solicitação de recuperação enviada com sucesso.";
    }

    @PostMapping("/nova-senha")
public Usuario novaSenha(@RequestBody Usuario usuario) {

    return service.alterarSenha(
            usuario.getEmail(),
            usuario.getSenha()
    );

}

}
                                                
                            
            
            
