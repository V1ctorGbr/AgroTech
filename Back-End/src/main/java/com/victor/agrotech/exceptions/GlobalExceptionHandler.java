package com.victor.agrotech.exceptions;

import jakarta.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<Map<String, Object>> tratarValidacao(
            ConstraintViolationException exception) {

        Map<String, String> erros = new HashMap<>();

        exception.getConstraintViolations().forEach(erro ->
                erros.put(
                        erro.getPropertyPath().toString(),
                        erro.getMessage()
                )
        );

        Map<String, Object> resposta = new HashMap<>();

        resposta.put("status", 400);
        resposta.put("mensagem", "Dados inválidos");
        resposta.put("erros", erros);

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(resposta);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> tratarDadosInvalidos(
            MethodArgumentNotValidException exception) {

        Map<String, String> erros = new HashMap<>();

        exception.getBindingResult()
                .getFieldErrors()
                .forEach(erro ->
                        erros.put(
                                erro.getField(),
                                erro.getDefaultMessage()
                        )
                );

        Map<String, Object> resposta = new HashMap<>();

        resposta.put("status", 400);
        resposta.put("mensagem", "Dados inválidos");
        resposta.put("erros", erros);

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(resposta);
    }

    @ExceptionHandler(RecursoNaoEncontradoException.class)
    public ResponseEntity<Map<String, Object>> tratarRecursoNaoEncontrado(
            RecursoNaoEncontradoException exception) {

        Map<String, Object> resposta = new HashMap<>();

        resposta.put("status", 404);
        resposta.put("mensagem", exception.getMessage());

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(resposta);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> tratarArgumentoInvalido(
            IllegalArgumentException exception) {

        Map<String, Object> resposta = new HashMap<>();

        resposta.put("status", 400);
        resposta.put("mensagem", exception.getMessage());

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(resposta);
    }
}