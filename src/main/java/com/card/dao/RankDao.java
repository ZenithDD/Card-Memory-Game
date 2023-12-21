package com.card.dao;

import com.card.dao.util.DBUtil;
import com.card.entity.Rank;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class RankDao {
    public void create(Rank rank) {
        QueryRunner runner = new QueryRunner(DBUtil.getDataSource());

        try {
            String sql = "insert into `rank` (username, difficulty, time_cost, timestamp) values (?, ?, ?, ?)";
            Object[] os = {rank.getUsername(), rank.getDifficulty(), rank.getTimeCost(), rank.getTimestamp()};
            runner.insert(sql, new ScalarHandler<>(), os);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Rank> query() {
        List<Rank> books = new ArrayList<Rank>();
        QueryRunner runner = new QueryRunner(DBUtil.getDataSource());

        try {
            String sql = "select * from `rank`";
            List<Map<String, Object>> rankList = runner.query(sql, new MapListHandler());

            for (Map<String, Object> rankObj: rankList) {
                String username = (String) rankObj.get("username");
                Integer difficulty = (Integer) rankObj.get("difficulty");
                Integer timeCost = (Integer) rankObj.get("time_cost");
                Long timestamp = (Long) rankObj.get("timestamp");
                Rank rank = new Rank(username, difficulty, timeCost, timestamp);
                books.add(rank);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return books;
    }

    public List<Rank> queryPart(int startIndex, int range) {
        List<Rank> books = new ArrayList<Rank>();
        QueryRunner runner = new QueryRunner(DBUtil.getDataSource());

        try {
            String sql = "select * from rank order by id asc limit ?,?";
            Object[] os = {startIndex, range};
            List<Map<String, Object>> rankList = runner.query(sql, new MapListHandler(), os);

            for (Map<String, Object> rankObj: rankList) {
                String username = (String) rankObj.get("username");
                Integer difficulty = (Integer) rankObj.get("difficulty");
                Integer timeCost = (Integer) rankObj.get("time_cost");
                Long timestamp = (Long) rankObj.get("timestamp");
                Rank rank = new Rank(username, difficulty, timeCost, timestamp);
                books.add(rank);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return books;
    }
}
