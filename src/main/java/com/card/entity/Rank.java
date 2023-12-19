package com.card.entity;

import lombok.Data;

@Data
public class Rank {
    private String username;
    private Integer difficulty;
    private Integer timeCost;
    private Long timestamp;
    public Rank(String username, Integer difficulty, Integer timeCost, Long timestamp) {
        this.username = username;
        this.difficulty = difficulty;
        this.timeCost = timeCost;
        this.timestamp = timestamp;
    }
}
