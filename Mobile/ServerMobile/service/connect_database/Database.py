import mysql.connector ;

def database():
    pool = mysql.connector.connect(
            host="ttjob-project.ctyetg9uawza.ap-southeast-2.rds.amazonaws.com",
            user="projectApp1",
            passwd="vv2-77KPO8c",
            database="project_db",
            auth_plugin='mysql_native_password'
    );
    return pool;