package com.gymmanager.controller;

import com.gymmanager.model.Agendamento;
import com.gymmanager.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {

    @Autowired
        private AgendamentoService service;

            // Listar todos
                @GetMapping
                    public List<Agendamento> listarTodos() {
                            return service.listarTodos();
                                }

                                    // Buscar por ID
                                        @GetMapping("/{id}")
                                            public Agendamento buscarPorId(@PathVariable Long id) {
                                                    return service.buscarPorId(id)
                                                                    .orElseThrow(() -> new RuntimeException("Agendamento não encontrado."));
                                                                        }

                                                                            // Cadastrar
                                                                                @PostMapping
                                                                                    public Agendamento salvar(@RequestBody Agendamento agendamento) {
                                                                                            return service.salvar(agendamento);
                                                                                                }

                                                                                                    // Atualizar
                                                                                                        @PutMapping("/{id}")
                                                                                                            public Agendamento atualizar(@PathVariable Long id,
                                                                                                                                             @RequestBody Agendamento agendamento) {
                                                                                                                                                     return service.atualizar(id, agendamento);
                                                                                                                                                         }

                                                                                                                                                             // Excluir
                                                                                                                                                                 @DeleteMapping("/{id}")
                                                                                                                                                                     public void excluir(@PathVariable Long id) {
                                                                                                                                                                             service.excluir(id);
                                                                                                                                                                                 }
                                                                                                                                                                                 }