package com.gymmanager.service;

import com.gymmanager.model.Usuario;
import com.gymmanager.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

        private final UsuarioRepository repository;

            public UsuarioService(UsuarioRepository repository) {
                        this.repository = repository;
            }

                public List<Usuario> listarTodos() {
                            return repository.findAll();
                }

                    public Usuario buscarPorId(Long id) {
                                return repository.findById(id)
                                                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
                    }

                        public Usuario cadastrar(Usuario usuario) {

                                    if (repository.existsByEmail(usuario.getEmail())) {
                                                    throw new RuntimeException("Este e-mail já está cadastrado.");
                                    }

                                            // Perfil padrão
                                                    if (usuario.getPerfil() == null || usuario.getPerfil().isBlank()) {
                                                                    usuario.setPerfil("ADMIN");
                                                    }

                                                            return repository.save(usuario);
                        }

                            public Usuario buscarPorEmail(String email) {
                                        return repository.findByEmail(email)
                                                        .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
                            }

                            public Usuario alterarSenha(String email, String novaSenha) {

    Usuario usuario = repository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

    usuario.setSenha(novaSenha);

    return repository.save(usuario);
}

                                public void excluir(Long id) {
                                            repository.deleteById(id);
                                }



public boolean existeEmail(String email) {

        return repository.existsByEmail(email);

}
}
                                