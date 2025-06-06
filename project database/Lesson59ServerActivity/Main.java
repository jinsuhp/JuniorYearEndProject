import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.sql.*;

import java.net.InetSocketAddress;
import java.util.Map;

//For compiling on the shell on repl: Same on mac
//javac -cp sqlite-jdbc-3.23.1.jar: Main.java
//java -cp sqlite-jdbc-3.23.1.jar: Main

//Use for windows
//javac -cp sqlite-jdbc-3.23.1.jar; Main.java
class Main {

 public static void main(String[] args)throws IOException{
    (new Main()).init();
  }


  void print(Object o){ System.out.println(o);}
  void printt(Object o){ System.out.print(o);}

  void init() throws IOException{
   

    // create a port - our Gateway
    int port = 8700;
      
    //create the HTTPserver object
    HttpServer server = HttpServer.create(new InetSocketAddress(port),0);

    // create the database object
    Database db = new Database("jdbc:sqlite:Students.db");	
    
    
  
    server.createContext("/", new RouteHandler("You are connected, but route not given or incorrect....") );

    // Add your routes here....
    String sql = "select * From Student";
    
    server.createContext("/Students", new RouteHandler(db,sql) );
	
	String sql2 = "select * From Grade";
    
    server.createContext("/Grades", new RouteHandler(db,sql2) );
	
	String sql3 = "select * From Extracurricular";
    
    server.createContext("/Extracurriculars", new RouteHandler(db,sql3) );
	
	String sql4 = "select * From Classroom";
    
    server.createContext("/Classrooms", new RouteHandler(db,sql4) );
	
     
      
    //Start the server
    server.start();

    System.out.println("Server is listening on port "+port);
       
      
    }    
}


