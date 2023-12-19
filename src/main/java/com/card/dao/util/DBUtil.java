package com.card.dao.util;

import com.mchange.v2.c3p0.ComboPooledDataSource;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class DBUtil {
    private static ComboPooledDataSource cpds = new ComboPooledDataSource();

    public static DataSource getDataSource() {
        try {
            cpds.setDriverClass("com.mysql.cj.jdbc.Driver");
            cpds.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/card_db?useSSL=false&autoReconnect=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai");
            cpds.setUser("root");
            cpds.setPassword("1329623049");
            cpds.setInitialPoolSize(10);
            cpds.setMaxPoolSize(20);
            cpds.setMinPoolSize(5);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return cpds;
    }

    public static Connection getConnection() throws SQLException {
        return getDataSource().getConnection();
    }
}
