package com.card.action;

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

        String currentPage = (String) request.getParameter("currentPage");
        if (currentPage == null) currentPage = "1";
        String pageSize = (String) request.getParameter("pageSize");
        if (pageSize == null) pageSize = "5";
        int curPage = Integer.parseInt(currentPage);
        int size = Integer.parseInt(pageSize);

        RankService rankService = new RankService();
        int rankCount = rankService.getRankCount();
        int pageCount = rankCount % size == 0 ? rankCount / size : rankCount / size + 1;
        if (curPage < 1) curPage = 1;
        else if (curPage > pageCount) curPage = pageCount;
        List<Rank> rankList = rankService.queryPart(size * (curPage - 1), size);

        request.setAttribute("rankList", rankList);
        PrintWriter pw = response.getWriter();
        pw.print("200");
    }
}
