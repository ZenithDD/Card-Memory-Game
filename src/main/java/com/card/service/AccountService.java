package com.card.service;

import com.card.dao.AccountDao;
import com.card.entity.Account;

public class AccountService {

    private AccountDao accountDao;

    public AccountService() {
        this.accountDao = new AccountDao();
    }

    public void create(Account account) {
        this.accountDao.create(account);
    }

    public boolean login (Account account) {
        return this.accountDao.login(account);
    }

    public boolean isExist(String username) {
        return this.accountDao.isExist(username);
    }

}
