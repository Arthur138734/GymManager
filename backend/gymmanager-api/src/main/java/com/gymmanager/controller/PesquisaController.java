package com.gymmanager.controller;

import com.gymmanager.dto.PesquisaDTO;
import com.gymmanager.service.PesquisaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pesquisa")
@CrossOrigin(origins = "*")
public class PesquisaController {

    private final PesquisaService service;

        public PesquisaController(PesquisaService service) {
                this.service = service;
                    }

                        @GetMapping
                            public PesquisaDTO pesquisar(@RequestParam String texto) {

                                    return service.pesquisar(texto);

                                        }

                                        }