package com.card.action;

import com.alibaba.fastjson.JSONObject;
import com.card.entity.Rank;
import com.card.service.RankService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "rankServlet", value = "/rank-servlet")
public class RankServlet extends HttpServlet {

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

        RankService rankService = new RankService();
        List<Rank> rankList = rankService.query();

        PrintWriter pw = response.getWriter();
        pw.print(JSONObject.toJSON(rankList));
    }
}
