package com.gymmanager.controller;

import com.gymmanager.model.Configuracao;
import com.gymmanager.service.ConfiguracaoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/configuracoes")
@CrossOrigin(origins = "*")
public class ConfiguracaoController {

    private final ConfiguracaoService service;

        public ConfiguracaoController(ConfiguracaoService service) {
                this.service = service;
                    }

                        @GetMapping
                            public List<Configuracao> listarTodos() {
                                    return service.listarTodos();
                                        }

                                            @GetMapping("/{id}")
                                                public Configuracao buscarPorId(@PathVariable Long id) {
                                                        return service.buscarPorId(id);
                                                            }

                                                                @PostMapping
                                                                    public Configuracao salvar(@RequestBody Configuracao configuracao) {
                                                                            return service.salvar(configuracao);
                                                                                }

                                                                                    @PutMapping("/{id}")
                                                                                        public Configuracao atualizar(@PathVariable Long id,
                                                                                                                          @RequestBody Configuracao configuracao) {
                                                                                                                                  return service.atualizar(id, configuracao);
                                                                                                                                      }

                                                                                                                                          @DeleteMapping("/{id}")
                                                                                                                                              public void excluir(@PathVariable Long id) {
                                                                                                                                                      service.excluir(id);
                                                                                                                                                          }

                                                                                                                                                          }