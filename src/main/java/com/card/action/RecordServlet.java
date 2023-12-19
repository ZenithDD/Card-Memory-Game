package com.card.action;

import com.card.entity.Account;
import com.card.entity.Rank;
import com.card.service.AccountService;
import com.card.service.RankService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;

@WebServlet(name = "recordServlet", value = "/record-servlet")
public class RecordServlet extends HttpServlet {
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
        String name = request.getParameter("uname");
        Integer difficulty = Integer.parseInt(request.getParameter("difficulty"));
        Integer timeCost = Integer.parseInt(request.getParameter("timeCost"));

        Rank record = new Rank(name, difficulty, timeCost, System.currentTimeMillis() / 1000);
        RankService rankService = new RankService();

        rankService.create(record);
        PrintWriter pw = response.getWriter();
        pw.print("200");

        System.out.println(3);
    }

}
