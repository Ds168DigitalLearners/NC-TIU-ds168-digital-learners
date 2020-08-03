<%@page import="java.sql.*";%>
<% 
String name=request.getParameter("regno");
String name=request.getParameter("psw");

try{
	Class.forName("com.mysql.jdbc.Driver");
	connection con= DriverManger.getConnection("jdbc:msql://localhost:3306/project", "root","123456");
			Statement st=con.creatStatement();
	st.executeUpdate("insert into user(fname,lname,regno.email,password)valiues('"+fname+"','"+lname+"','"+regno+"','"+psw+"',)");
	response.sendRedirect("afterlogin.html");
	
}
catch() 
response.sendRedirect("Sign Up.html");



%>