package com.card.action;

import com.card.entity.Account;
import com.card.service.AccountService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "loginServlet", value = "/login-servlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doRequest(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doRequest(req, resp);
    }

    private void doRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String name = request.getParameter("uname"),
               password = request.getParameter("upwd");

        name = name.toLowerCase();

        PrintWriter pw = response.getWriter();
        AccountService accountService = new AccountService();
        Account account = new Account(name, password);

        // 用户名不存在则注册，存在则登录
        if (!accountService.isExist(name)) {
            accountService.create(account);
            request.setAttribute("username", name);
            pw.print("201"); // 注册成功
        }
        else {
            if (accountService.login(account)) {
                request.setAttribute("username", name);
                pw.print("200"); // 登录成功
            }
            else {
                pw.print("400"); // 登录失败
            }
        }
    }
}
