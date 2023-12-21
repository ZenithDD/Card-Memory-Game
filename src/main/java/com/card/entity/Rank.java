package com.card.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Rank {
    private String username;
    private Integer difficulty;
    private Integer timeCost;
    private Long timestamp;
}
