package shared;

import com.jolbox.bonecp.BoneCP;
import com.jolbox.bonecp.BoneCPConfig;
import server.etc.Constants;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

/**
 * All objects which all threads will need to share
 * will be instantiated in SharedObjects.
 */
public class SharedObjects {
    private static BoneCP financialDbConnectionPool;
    private static Set<String> loggedInUsers;

    public static synchronized void initialize() {
        setUpFinancialDbConnectionPool();
    }

    public static synchronized void setFinancialDbConnectionPool(BoneCP connectionPool) {
        try {
            SharedObjects.financialDbConnectionPool = new BoneCP(connectionPool.getConfig());
        } catch (SQLException e) {
            System.err.println("Failed to set FinancialDbConnectionPool");
        }
    }

    public static boolean loginUser(String username) {
        if (loggedInUsers != null) {
            if (!loggedInUsers.contains(username)) {
                loggedInUsers.add(username);
                return true;
            }
            return false;
        }
        loggedInUsers = new HashSet<>();
        loggedInUsers.add(username);
        return true;
    }

    public static boolean logoutUser(String username) {
        if (loggedInUsers != null && loggedInUsers.contains(username)) {
            loggedInUsers.remove(username);
            return true;
        }
        return false;
    }

    public static boolean userIsLoggedIn(String username) {
        if (loggedInUsers != null) {
            return loggedInUsers.contains(username);
        }
        return false;
    }
    public static BoneCP getFinancialDbConnectionPool() {
        return financialDbConnectionPool;
    }

    private static synchronized void setUpFinancialDbConnectionPool() {
        BoneCP connectionPool = null;
        Connection connection = null;
        try {
            // Set up the connection pool
            BoneCPConfig config = new BoneCPConfig();
            config.setJdbcUrl(Constants.getFinancialsDbPath(true));
            config.setUsername(Constants.adminUser);
            config.setPassword(Constants.adminPassword);
            config.setMinConnectionsPerPartition(Constants.CONNECTION_POOL_MIN_CONNECTIONS_PER_PARTITION);
            config.setMaxConnectionsPerPartition(Constants.CONNCETION_POOL_MAX_CONNECTIONS_PER_PARTITION);
            config.setPartitionCount(Constants.CONNECTION_POOL_PARTITION_COUNT);
            connectionPool = new BoneCP(config);

            connection = connectionPool.getConnection(); // fetch a connection

            if (connection != null) {
                // Assign connection pool to current thread
                System.out.println("Successfully connected to database: " + Constants.getFinancialsDbPath(true));
                SharedObjects.financialDbConnectionPool = connectionPool;
            } else {
                System.err.println("Failed to establish a connection with database: " + Constants.getFinancialsDbPath(true));
                return;
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
