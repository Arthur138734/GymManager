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

}
                                                
                            
            
            
