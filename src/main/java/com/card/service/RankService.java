package com.card.service;

import com.card.dao.RankDao;
import com.card.entity.Rank;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class RankService {

    private RankDao rankDao;

    public RankService() {
        this.rankDao = new RankDao();
    }

    public void create(Rank rank) {
        this.rankDao.create(rank);
    }

    public List<Rank> query() {
        List<Rank> ranks = this.rankDao.query();
        ranks.sort(Comparator.comparingInt(Rank::getTimeCost));
        List<String> exist = new ArrayList<>();
        List<Rank> res = new ArrayList<>();
        for (Rank i: ranks) {
            if (!exist.contains(i.getUsername())) {
                res.add(i);
                exist.add(i.getUsername());
            }
        }
        return res;
    }

    public List<Rank> queryPart(int startIndex, int range) {
        return this.query().subList(startIndex, startIndex + range);
    }

    public int getRankCount() {
        return this.query().size();
    }
}
