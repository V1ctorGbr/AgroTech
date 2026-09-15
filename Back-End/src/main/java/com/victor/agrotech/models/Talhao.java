package com.victor.agrotech.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Table(name = "talhoes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Talhao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do talhão é obrigatório")
    private String nome;

    @DecimalMin(value = "0.01", message = "A área deve ser maior que zero")
    private Double area;

    @NotBlank(message = "A cultura do talhão é obrigatória")
    private String cultura;

    @ManyToOne
    @JoinColumn(name = "fazenda_id", nullable = false)
    private Fazenda fazenda;
}