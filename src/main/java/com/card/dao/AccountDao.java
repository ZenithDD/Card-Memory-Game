package com.card.dao;

import com.card.dao.util.DBUtil;
import com.card.entity.Account;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import java.util.List;
import java.util.Map;

public class AccountDao {
    public void create(Account account) {
        QueryRunner runner = new QueryRunner(DBUtil.getDataSource());

        try {
            String sql = "insert into account(username, password) values (?, ?)";
            Object[] os = {account.getUsername(), account.getPassword()};
            runner.insert(sql, new ScalarHandler<>(), os);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public boolean login(Account account) {
        boolean flag = false;
        QueryRunner runner = new QueryRunner(DBUtil.getDataSource());

        try {
            String sql = "select count(*) from account where username=? and password=?";
            Object[] os = {account.getUsername(), account.getPassword()};
            Long res = runner.query(sql, new ScalarHandler<>(), os);
            flag = res > 0;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

    public boolean isExist(String username) {
        boolean flag = false;
        QueryRunner runner = new QueryRunner(DBUtil.getDataSource());

        try {
            String sql = "select count(*) from account where username=?";
            Object[] os = {username};
            Long res = runner.query(sql, new ScalarHandler<>(), os);
            flag = res > 0;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

}
