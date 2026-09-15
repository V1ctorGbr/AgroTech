package com.victor.agrotech.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "fazendas")
@EqualsAndHashCode(of = "id")
public class Fazenda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome da fazenda é obrigatório")
    private String nome;

    @NotBlank(message = "A localização da fazenda é obrigatória")
    private String local;

    @NotNull(message = "A área da fazenda é obrigatória")
    @DecimalMin(value = "0.01", message = "A área deve ser maior que zero")
    private Double area;

    @NotBlank(message = "A cultura da fazenda é obrigatória")
    private String cultura;

    @NotNull(message = "A quantidade de máquinas é obrigatória")
    @Min(value = 0, message = "A quantidade de máquinas não pode ser negativa")
    private Integer maquinas;
}